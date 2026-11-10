FROM python:3.11-slim

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
ENV PYTHONUNBUFFERED=1

# Expõe a porta do FastAPI
EXPOSE 8000

# Executa com uvicorn
CMD ["uvicorn", "src.mcp_server:app", "--host", "0.0.0.0", "--port", "8000", "--log-level", "debug"]
