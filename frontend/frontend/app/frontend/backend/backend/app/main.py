from fastapi import FastAPI
import random

app = FastAPI()

@app.get("/")
def root():
    return {"message": "AI Backend Running"}

@app.get("/predict")
def predict():
    return {
        "failure_probability": round(random.uniform(0, 1), 3),
        "status": "ok"
    }
