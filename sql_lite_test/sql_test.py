import sqlite3

# create a database connection
connection = sqlite3.connect("test.db")

# to execute SQL statements and fetch results from SQL queries
# need to use a database cursor
cur = connection.cursor()

# with a database connection and a cursor we can create 
# a database table "plants" with columns for name, plant date, progress
cur.execute("CREATE TABLE plants(name, date, progress)")

# total changes is the total number of database rows that have been changed
print(connection.total_changes)