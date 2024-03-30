from picamera2 import Picamera2
from time import sleep


def take_picture(delay):
    camera = Picamera2()
    while True:
        camera.start()
        camera.capture_file("/home/pi/Desktop/PyFarm_Capstone/PyeFarm/PyeFarmProject/frontend/static/images/test.jpg")
        camera.stop()
        sleep(delay)



if __name__ == "__main__":
    take_picture(10)