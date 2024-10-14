from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request

app = FastAPI()

# 정적 파일 서빙 설정 (경로를 정확하게 설정합니다)
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# 템플릿 서빙 설정
templates = Jinja2Templates(directory="app/templates")

# @app.get("/", response_class=HTMLResponse)
# async def read_root(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})

@app.get("/", response_class=HTMLResponse)
async def read_charts(request: Request):
    return templates.TemplateResponse("charts.html", {"request": request})

@app.get("/tables.html", response_class=HTMLResponse)
async def read_tables(request: Request):
    return templates.TemplateResponse("tables.html", {"request": request})

@app.get("/tourist_spots_map.html", response_class=HTMLResponse)
async def read_tables(request: Request):
    return templates.TemplateResponse("tourist_spots_map.html", {"request": request})

@app.get("/map.html", response_class=HTMLResponse)
async def read_map(request: Request):
    return templates.TemplateResponse("map.html", {"request": request})