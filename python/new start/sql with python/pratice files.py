import mysql.connector
from mysql.connector import Error
import pandas as pd

def create_server_connection(host_name,user_name,user_password):
    connection=None
    try:
        connection= mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = user_password
        )
        print('Mysql Database connection is successfull')
    except Error as er:
        print(f'Error in database connection is :{er}')
    return connection


def create_database(connection, qurey):
    cursor= connection.cursor()
    try:
        cursor.execute(qurey)
        print('Database is successfully created')
    except Error as err:
        print('Error in excuting the is {}',err)

def connection_to_database(host_name,user_name,user_password,database_name):
    connection=None
    try:
        connection=mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd = user_password,
            database = database_name
        )
        print('Connection with database is successful')
    except Error as err:
        print('There is error with connection with database {}',err)
    return connection


def excute_qurey(connection,qurey):
    cursor=connection.cursor()
    try:
        cursor.execute(qurey)
        connection.commit()
        print('Query is executed')
    except Error as err:
        print('While excuting qurey error is occured{}',err)


def read_qurey(connection,qurey):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(qurey)
        result= cursor.fetchall()
        return result
    except Error as err:
        print('Error is occured in reading table{}', err)


# Database name
db = 'sql_pratice'
pw = 'Schoolbus1234@#'
connection = create_server_connection('localhost','root',pw)

#qurey= '''
#CREATE DATABASE sql_pratice'''
#create_database(connection, qurey)

connection=connection_to_database('localhost', 'root',pw,db)

#qurey_execute = '''
#CREATE TABLE employees(emp_id INT(15) NOT NULL PRIMARY KEY, emp_name VARCHAR(25) NOT NULL, salary INT(15))'''
#execute_qurey = excute_qurey(connection,qurey_execute)

#inserting_data ='''
#INSERT INTO employees
#VALUES (101,'Kunal Gaikwad', 15000000),
#(102,'Suraj Gutte', 250000)'''

#excute_qurey(connection,inserting_data)

select_qurey = '''
SELECT *
FROM employees'''

results = read_qurey(connection, select_qurey)

for result in results:
    print(result)

data = []

for result in results:
    result = list(result)
    data.append(result)

columns = ['emp_id', 'emp_name','salary']

df = pd.DataFrame(data, columns= columns)

print(df)