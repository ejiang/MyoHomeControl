import requests

while True:
    a = raw_input()
    payload = {'light': int(a)}
    requests.post("http://127.0.0.1:5000/submit", params=payload)
