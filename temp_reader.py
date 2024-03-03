import Adafruit_DHT
import time
import sqlite3
import datetime


def temp_reader(pin_num):
    SENSOR = Adafruit_DHT.DHT11
    PIN = pin_num
    while True:
        humidity, temp = Adafruit_DHT.read_retry(SENSOR,PIN)
        if humidity is not None and temp is not None:
            
            # setup connection to database
            conn = sqlite3.connect('db.sqlite3')
            cursor = conn.cursor()
            
            # create table within database
            #cursor.execute("""CREATE TABLE IF NOT EXISTS air_readings (
            #            temp real,
            #            humid real
            #            )""")
    
            # create new table that includes data and time and datapin of temp sensor
            # to identify what sensor is giving what reading
            cursor.execute("""CREATE TABLE IF NOT EXISTS air_readings_detailed (
                        data_pin integer,
                        date text,
                        time text,
                        temp real,
                        humid real
                        )""")

            # get current date and time of data collection
            cur_datetime = datetime.datetime.now()
            cur_date = cur_datetime.date()
            cur_time = cur_datetime.time()
    
            #print("Air Temperature: {0:0.1f} C Humidity: {1:0.1f} %".format(temp,humidity))
            
            # insert data into database
            cursor.execute("INSERT INTO air_readings_detailed VALUES ({}, '{}', '{}', {}, {})".format(pin_num, cur_date, cur_time, temp, humidity))
            conn.commit()
            
            cursor.execute("SELECT * FROM air_readings_detailed WHERE data_pin=4")
            
            conn.commit()
            
            #print all data from dht11 connected to data_pin 4
            print(cursor.fetchall())
            
            
        else:
            print("Check sensor connected to pin ", pin_num)
        time.sleep(4)
