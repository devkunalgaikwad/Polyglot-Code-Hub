import mysql.connector
from mysql.connector import Error
import pandas as pd

# create_connection_server      is for create to sql server
# create_database               is for to create database
# create_connection_database    is for connect the database as like as USE clause in sql
# execute_query                 is for to excute query

def create_connection_server(host_name, user_name, user_password):
    connection = None
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = user_password)
        print("Connection is succesfull to Server")
    except Error as e_server:
        print(f'Error : {e_server}')
    return connection


def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print('Database is succesfully connected')
    except Error as e_db:
        print(f'Error: {e_db}')


def create_connection_database(host_name, user_name, user_password, query):
    database_connection = None
    try:
        database_connection = mysql.connector.connect()
        print('Database has connected successfull')
    except Error as e_cd:
        print(f'Error : {e_cd}')
    return database_connection


def execute_query(database_connection, query):
    cursor = database_connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print('Query is excuted')
    except Error as e_eq:
        print(f'Error : {e_eq}')

# password of server
pw ='Schoolbus1234@#'

#connection to server

connection = create_connection_server("localhost", 'root', pw)

# creating new database

database_name = '''CREATE DATABASE sql_python'''
create_database(connection, database_name)


# to excute actual query

create_order_table = '''
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_id INT NOT NULL,
    price FLOAT NOT NULL,
    order_date DATE,
    comments VARCHAR(25))'''

# connecting to database

connection = create_connection_database('localhost', 'root', pw, database_name)

exeucted_query = execute_query(connection, create_order_table)


#