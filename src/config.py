import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    GITHUB_TOKEN: str
    GITHUB_REPO: str
    APP_PORT: int = 8000
    DATABASE_URL: str = "sqlite:///./cache.db"
    AUTO_REFRESH_MINUTES: int = 5
    
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
