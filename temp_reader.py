import Adafruit_DHT
import time


def temp_reader(pin_num):
    SENSOR = Adafruit_DHT.DHT11
    PIN = pin_num
    while True:
        humidity, temp = Adafruit_DHT.read_retry(SENSOR,PIN)
        if humidity is not None and temp is not None:
            print("Air Temperature: {0:0.1f} C Humidity: {0:0.1f} %".format(temp,humidity))
        else:
            print("Sensor Error")
        time.sleep(4)

#temp_reader(4)  


