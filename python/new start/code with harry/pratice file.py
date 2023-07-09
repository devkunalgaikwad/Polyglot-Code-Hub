# code is generating secret code
'''
if words is more than 3 char then remove first char and append in last of string
or then simple keep it same

then add random char at first and end of string

and then simply reverse it
'''

import random

alpha = 'qwertyuiopasdfghjklzxcvbnm'

command =  int(input('Enter for encoding 1 and 2 for decoding and any key for info : '))
if command == 1:
    code = input('Enter string for code : ')
    words = code.split(' ')
    intial_encode = []
    for word in words:
        if len(word) >= 3:
            first_char = word[0]
            word += first_char
            word = word[1:]
        else:
            pass
        nr1 = ''
        nr2 = ''
        for i in range(3):
            r1 = random.choice(alpha)
            r2 = random.choice(alpha)
            nr1 += r1
            nr2 +=r2
        word = nr1 +word + nr2
        word = word[::-1]
        intial_encode.append(word)
    final_encode = ''
    final_encode = ' '.join(intial_encode)
    print(final_encode)
elif command == 2 :
    encode = input('Enter encoded string : ')
    encode=encode.split(' ')
    final_code = []
    for word in encode:
        word = word[::-1]
        word = word[3:-3]
        if len(word) >= 3:
            last_word = word[-1]
            new_word = word[:-1]
            word = last_word + new_word
            print(word)
        else:
            print(word)
        final_code.append(word)
    final_decode = ''
    final_decode = ' '.join(final_code)
    print(final_decode)
else:
    print('exit')


#readline is used for readline in fie

f = open('my_file.txt', 'r')
while True:
    line = f.readline()
    if not line:
        break
    print(line)


#game is snake, water and gun


# snake vs water = snake wins
# water vs gun = water wins
# gun vs snake = gun wins


from random import choice

elements = ('snake', 'water', 'gun')

command = int(input('Enter 1 to start game and 2 for exit and any key for info'))

if command == 1:
    user_score = 0
    sys_score = 0
    for index,i in enumerate(range(5)):

        user_input = input('''
Welcome in snake, water and gun game
for select the option select following keys
Snake
Water
Gun ''')
        sys_input = choice(elements)
        if (user_input == 'snake' and sys_input == 'water') or (user_input == 'water' and sys_input == 'gun') or (user_input == 'gun' and sys_input == 'snake'):
            user_score +=1
            print(f'player is wins round{index} \n System has fail in round{index}')
        elif user_input == sys_input:
            print(f'Round is draw in round{index}')
        else:
            sys_score+=1
            print(f'Player is lose in round{index} \n And system is win in round{index}')
    if user_score == sys_score:
        print('Game is draw as score of both system and player is same')
    elif user_score > sys_score:
        print(f'Game winner is player with total points of {user_score}\n And with system score of {sys_score}')
    else:
        print(f'Game winner is system with total points of {sys_score}\n And with player score of {user_score}')

elif command ==2:
    print('You have exited the game')
else:
    print('''
snake vs water = snake wins
water vs gun = water wins
gun vs snake = gun wins
''')


class person:
    name = str()
    occupation = str()
    age = float(
    )
    def info(self):
        print(f'Costomer name is {self.name} and its occuption is {self.occupation}\nwith age of {self.age}')

a=person()
a.name = 'kunal gaikwad'
a.occupation = 'COe'
a.age= 25

b=person()
b.info()
a.info()


'''
it is decorator (@)
hello is called inn greet function'''

def greet(fx):
    def mfx():
        print('Good Morning')
        fx()
        print('Thanks for using this fuction')
    return mfx

@greet
def hello():
    print('Hello World')

hello()



'''
Inheritance is like one class is used in another class
'''


class employees:
    def __init__(self, name, emp_id):
        self.name = name
        self.emp_id =emp_id


class programmer(employees):
    def extra_details(self, laugauge):
        self.laugauge= laugauge

    def info(self):
        print(f'Employees detail are {self.name} with {self.emp_id} of {self.laugauge}')

a= programmer('kunal gaikwad', 200)
a.extra_details('python')
a.info()


# staticmethod

class calculations:
    def __init__(self, num1):
        self.num1 =num1

    def add(self, num2):
        self.num2 =num2
        return self.num1+num2

    @staticmethod
    def addd(num1, num2):
        print(num1+num2)


a = calculations(5)

u= a.add(2)
print(u)

calculations.addd(4,5)


'''
it is project for system info in library managment'''
class library:
    def __init__(self):
        self.book_list = []
        self.no_book = 0


    def add_book(self, book_name):
        self.book_list.append(book_name)


    def info(self):
        self.no_books = len(self.book_list)
        print(f'Number of books are{self.no_books}')
        for i in self.book_list:
            print(i)


b = library()
b.add_book('Harry Potter')
b.add_book('Harry Potter')
b.add_book('Harry Potter')
b.add_book('Harry Potter')
b.info()


#class method

class employees:
    company = 'Apple'
    def __init__(self,name,emp_id):
        self.name =name
        self.emp_id = emp_id


    def info(self):
        print(f'Employee name is {self.name} in company {self.company}')


    @classmethod
    def change_company(cls , new_company):
        cls.company = new_company


a = employees('Kunal',25)
a.info()

a.change_company('Microsoft')
a.info()
print(a.company)




class employees:
    def __init__(self,name, emp_id):
        self.name =name
        self.emp_id = emp_id


    def info(self):
        print(self.name,'\n', self.emp_id)

    @classmethod
    def add_emp(cls , string):
        return cls(string.split(' - ')[0],string.split(' - ')[1])


a = employees('Kunal',250)
a.info()

#challege is name and emp_id is given in string format

string = 'Harry - 2500'

b = employees.add_emp(string)
b.info()


class employees:
    def __init__(self,name , emp_id):
        self.name = name
        self.emp_id = emp_id
        print(f'Employee name is {self.name} with id {self.emp_id}')


class extra_details(employees):
    def __init__(self,name, emp_id, lang):
        super().__init__(name, emp_id)
        self.lang =lang
        print(f'Employee name is {self.name} with id {self.emp_id} of deparment {self.lang}')



obj2 = extra_details('Harry',25, 'Python')

file_name = 'E:nearby file\source.txt'
file = open(file_name, mode= 'r')

print(file.read())
print(file.closed)
file.close()
print(file.closed)


with open (file_name, mode = 'r') as out_file:
    text=out_file.read()

print(out_file.closed)
print(text)

#r and rt is same to read txt
#w is for write a text but it delete pervious one'

with open(file_name, mode= 'w') as out_file:
    out_file.write('Hi i am updated')


file_name = 'E:nearby file\lending-company.csv'

with open(file_name, mode = 'r') as out_file:
    text = out_file.read()

import pandas as pd
print(pd.read_csv('E:nearby file\lending-company.csv'))

import pandas as pd
my_csv_data=pd.read_csv('E:nearby file\lending-company.csv',index_col='LoanID')
print(my_csv_data)


def info():
    print('hello')
var = [14,5]
print('first number is %s' %var[0])

varr=20.35
print('first number %d' %varr)
print('first number %.2f' %varr)

print('first number %d and %d' %(var[0], var[1])) 

print('Hi myself Kunal Gaikwad \rhi')

print('Hi myself Kunal Gaikwad \n \thi')
    