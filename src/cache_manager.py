from typing import List, Optional
from sqlmodel import Field, SQLModel, create_engine, Session, select
from datetime import datetime
from src.config import settings

class Component(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    path: str
    content: Optional[str] = None
    last_updated: datetime = Field(default_factory=datetime.utcnow)
    sha: str

engine = create_engine(settings.DATABASE_URL)

def init_db():
    SQLModel.metadata.create_all(engine)

class CacheManager:
    def __init__(self):
        init_db()

    def update_component(self, name: str, path: str, sha: str, content: Optional[str] = None):
        with Session(engine) as session:
            statement = select(Component).where(Component.path == path)
            component = session.exec(statement).first()
            
            if component:
                component.name = name
                component.sha = sha
                if content:
                    component.content = content
                component.last_updated = datetime.utcnow()
            else:
                component = Component(name=name, path=path, sha=sha, content=content)
                session.add(component)
            
            session.commit()

    def get_all_components(self) -> List[Component]:
        with Session(engine) as session:
            return session.exec(select(Component)).all()

    def get_component_by_path(self, path: str) -> Optional[Component]:
        with Session(engine) as session:
            return session.exec(select(Component).where(Component.path == path)).first()
            
    def search_components(self, query: str) -> List[Component]:
        with Session(engine) as session:
            statement = select(Component).where(Component.name.contains(query) | Component.path.contains(query))
            return session.exec(statement).all()
