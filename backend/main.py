from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from dateutil.relativedelta import relativedelta
import uuid

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)


@app.get("/")
def read_root():
    docUUID = uuid.uuid4()

    documentName = "My Very Important Document"
    description = "An important document"

    dateCreated = datetime.now()
    expirationDate = dateCreated + relativedelta(months=+1)
    
    return {
        "uuid": docUUID,
        "document_name":documentName,
        "created_at": dateCreated.strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
        "description":description,
        "expires_at": expirationDate.strftime("%Y-%m-%dT%H:%M:%S.%fZ")
    }
