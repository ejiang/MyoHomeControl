import requests

devices = {'1': "http://", '2': 'http://', '3': 'http://'}

while True:
    a = raw_input()
    requests.get(devices[a])

#192.168.15.200
#wpa_cli status
