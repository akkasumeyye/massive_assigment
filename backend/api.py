from fastapi import FastAPI , Query
from pydantic import BaseModel
from typing import Optional

import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#cors confirigations

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def welcome():
    return{"Welcome to Project"}

class Genetic (BaseModel):
    variant: Optional[str] = None
    gene: Optional[str] = None
    classification :int
    frequency : Optional[float] = None
    

with open ("massive_data.json" , 'r') as f:
    genetic = json.load(f)

@app.get('/api')
async def all_genes ():
    return genetic    

#classification filter endpoint

@app.get('/api/{c_classification}', status_code=200)
def get_gene (c_classification):
    gene = [c for c  in genetic if c['classification'] == c_classification]
    return gene  if len (gene) > 0 else {}    

