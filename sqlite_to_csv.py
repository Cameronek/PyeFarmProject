# Convert sqlite to csv

import csv
import sqlite3
import os

filename = input('Enter the name of the sqlite db file: ')
filename_csv = filename.split('.')[0] + '.csv'

# make "formatted_data" and "parsed_data" directories if they don't exist
if not os.path.exists("formatted_data"):
    os.makedirs("formatted_data")

if not os.path.exists("parsed_data"):
    os.makedirs("parsed_data")

def sqlite_to_csv(filename, filename_csv):

    # Connect to the database
    conn = sqlite3.connect(filename)
    c = conn.cursor()

    # parse through the database and create an array of the tables
    tables = []
    for row in c.execute("SELECT name FROM sqlite_master WHERE type='table';"):
        tables.append(row[0])

    # Print the tables
    print('Tables in the database:')
    for table in tables:
        print(table)

    # Create a new csv file
    with open(filename_csv, 'w') as f:
        writer = csv.writer(f)
        # writer.writerow(['id', 'time', 'data'])
        # for row in c.execute('SELECT * FROM data'):
        #     writer.writerow(row)

        # for each table in the database, write the table to the csv file, separate each table with a row of dashes
        for table in tables:
            writer.writerow([table])
            for row in c.execute('SELECT * FROM ' + table):
                writer.writerow(row)
            writer.writerow(['-' * 50])

    # Close the csv file
    f.close()

    # Close the connection
    conn.close()

    return filename_csv

# split sections of the unparsed csv to their own individual csv files
def parse_csv(filename_csv, array_of_table_names):

    # open the csv file
    with open(filename_csv, 'r') as f1:
        reader = csv.reader(f1)
        data = list(reader)

    # go through the data and split the csv into individual csv files based on the tables in
    # array_of_table_names
    
    # For each of the tables in the array
    for table in array_of_table_names:
        # Create a new csv file
        with open("parsed_data/" + table + '.csv', 'w') as f2:
            
            # find the line number of the table name by finding a matching string
            table_line = 0
            for i in range(len(data)):
                if data[i][0] == table:

                    # make sure there is nothing else on the same line as the table name
                    if len(data[i]) == 1:
                        table_line = i
                        break
            
            
            print("For table: "+ table +", table located at: " + str(table_line))

            # write the lines below the table name to the new csv file until a line of dashes is found
            for i in range(table_line + 1, len(data)):
                if data[i][0] == '-' * 50:
                    break
                else:
                    writer = csv.writer(f2)
                    writer.writerow(data[i])

        # Close the csv file
        f1.close()

    # Close the csv file
    f2.close()




# Run the functions
sqlite_to_csv(filename, filename_csv)
tables = ["air_readings", "air_readings_detailed", "new_air_readings"]
parse_csv(filename_csv, tables)


