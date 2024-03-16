import serial
import time
import sqlite3
import datetime

def serial_comm():
    ser = serial.Serial('/dev/ttyACM0', 9600)

    while True:
        read_serial = ser.read(25).decode()
        air_temp, air_humid, soil_temp, soil_moisture = read_serial.split()
        #print("air temp:", air_temp, "air humidity:", air_humid,"soil temperature:", soil_temp, "soil moisture:", soil_moisture)

        conn = sqlite3.connect('db.sqlite3')
        cursor = conn.cursor()
        
        # create new table in database
        cursor.execute("""CREATE TABLE IF NOT EXISTS sensor_values (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date TEXT,
                    time TEXT,
                    air_temp REAL,
                    air_humid REAL,
                    soil_temp REAL,
                    soil_moisture REAL
                    )""")

        # get current date and time of data collection
        cur_datetime = datetime.datetime.now()
        cur_date = str(cur_datetime.date())
        cur_time = str(cur_datetime.time())
        
        cursor.execute("INSERT INTO sensor_values (date, time, air_temp, air_humid, soil_temp, soil_moisture) VALUES (?,?,?,?,?,?)",
                       (cur_date, cur_time, air_temp, air_humid, soil_temp, soil_moisture))
        conn.commit()
        cursor.execute("SELECT * FROM sensor_values")
        conn.commit()
        #print(cursor.fetchall())