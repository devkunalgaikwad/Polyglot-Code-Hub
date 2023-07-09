import mysql.connector
from mysql.connector import Error
import pandas as pd


# it is for connect sql server to python

def create_server_connection(host_name, user_name, user_password):
    connection= None
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = user_password
        )
        print('MySQL server is connected successfully')
    except Error as ee:
        print(f'Error : {ee}')
    return connection


# it is for to create database in my sql_workbench

def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print('Databases create successfully')
    except Error as ee :
        print(f'Error : {ee}')


# it is for connection to database

def database_connection(host_name, user_name, user_password, database_name):
    connection = None
    try:
        connection=mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = user_password,
            database = database_name)
        print('MySQL database is succesfull connected')
    except Error as ee:
        print(f'Error : {ee}')
    return connection


# for excuting actual query

def excute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query was succesfull")
    except Error as ese:
        print(f'Error : {ese}')
# password of sql sever

pw= "Schoolbus1234@#"

database_name = 'mysql_python'

connection = create_server_connection('localhost','root', pw)

create_orders_table = "CREATE DATABASE mysql_python"
create_database(connection, create_orders_table)

create_orders_table ='''
CREATE TABLE orders(order_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    order_date DATE,
    quantity INT,
    unit_price FLOAT);
'''

connection = database_connection('localhost', 'root', pw, database_name)
excute_query(connection, create_orders_table)

