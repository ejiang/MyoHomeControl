import requests

while True:
    a = raw_input()
    payload = {'light': int(a)}
    requests.post("http://192.168.15.200:8888/", params=payload)

#192.168.15.200
#wpa_cli status
