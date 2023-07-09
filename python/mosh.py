x=2.6
print(round(x))
y= -2.9
print(abs(y))

import math

price = 1000000
has_a_good_credit = False

if has_a_good_credit:
    down_payment = 0.1*price
else:
    down_payment= 0.2*price
print(f"down payment: ${down_payment}")

weight= int(input("enter your weight: "))
unit= input("Lbs or kg : ")
if unit.upper() =="KG":
    converted = weight*0.45
    print(f"you are {converted} kg")
else:
    converted = weight*1.5
    print(f"you are {converted} lbs")

secret_number = 9
guess_count= 0
guess_limit=3

while guess_count < guess_limit:
    guess = int(input("Enter your guess : "))
    guess_count += 1
    if guess == secret_number:
        print("You won")
        break
else:
    print("You lose")
command = ""
started = False
while True:
    command = input(">").lower()
    if command == "start":
        if started:
            print("Car is aready started")
        else:
            started = True
            print("Car is started...")
    elif command == "stop":
        if not started:
            print("Car is already stopped!")
        else:
            started=False
            print("Car is stopped.")
    elif command == "help":
        print('''
Start - to start the car
Stop - to stop the car
Quit - exit the game
        ''')
    elif command =="quit":
        break
    else:
        print("Sorry, I don't understand the command")
prices = [20, 66, 999]
total = 0
for price in prices:
    total += price
print(f"Total : {total}")

n=4
m=3
for x in range(n):
    for y in range(m):
        print(f"({x} , {y})")

n = [5, 2, 5, 2, 2]
for c in n:
    print("x" * c)

for c in n:
    output= ""
    for co in range(c):
        output += "x"
    print(output)

numbers = [6,2,5,9,5]
max =numbers[0]
for number in numbers:
    if number> max:
        max= number
print(max)

matrix = [
[2,3,6,0],
[4,8,6,90],
[4,5,6,9,]
]
print(matrix[0][2])

for row in matrix:
    for number in row:
        print(number)


numbers = [10,36,36,10,8,78,9,0]
numbers.insert(0, 20)
print(numbers)              #clear(to clear all list) remove, pop, index

numbers.sort()
print(numbers)
numbers.reverse()
print(numbers)

num = [20,3,3,20,56,8,9,7]
uniques = []
for number in num:
    if number not in uniques:
         uniques.append(number)
print("uniques", uniques)

coordinates = (1,6,5)
x, y,z=coordinates          #unpacking
print(x)
print(y)
print(z)


costomer = {
"name" : "john smith",
"age" : 62,
"email" : "john12@gmail.com",
"result": True,
}
print(costomer["result"])
costomer["brithday"]= "jan 1 1980"
print(costomer)

phone = input("enter your phone number : ")
map = {
'1' :"one",
'2' : "tow",
'3' : "three",
'4' : "four",
'5' : "five",
'6' : "six",
'7' : "seven",
'8' : "eight",
'9' : "nine",
'0' : "zero"
}
output= ""

message = input(">")
words = message.split(' ')
emojis = {
":)" : "😊",
":(" : "😒"
}
output = ""                                        #converter for emojis
for word in words:
    output += emojis.get(word , word) + " "
    print(output)


for ch in phone:
    output += map.get(ch,)+" "
print(output)


def greet_user(name):
    print(f'hi {name}')
print("hi")
greet_user("kunal")                 #parameters defination


def square(number):
    return number*number
print(square(3))                     #return


def emoji_converter(message):
    words = message.split(' ')
    emojis = {
    ":)" : "😊",
    ":(" : "😒"
    }
    output = ""                                        #converter for emojis
    for word in words:
       output += emojis.get(word , word) + " "
    return output
message = input(">")
print(emoji_converter(message))

try:
    age = int(input("enter your value: "))
    print(age)
except ZeroDivisionError :
    print("age cannot be 0")
except ValueError :
    print("invalid value")              #it is used to handle to error


class Person:                                   #class
    def __init__(self, name):
        self.name = name

    def talk(self):
        print(f"Hi, I am {self.name}")


johan = Person("John Mac")
print(johan.name)
johan.talk()

bob= Person("Bob")
bob.talk()


class Mammal:                           #inhertance
    def walk(self):
        print("walk")

    def stop(self):
        print("jasbvyudabjavanjk")

class Dog(Mammal):
    pass
class Cat(Mammal):
    pass

dog1= Dog()
dog1.walk()
dog1.stop()

from module2 import Dice

Dice.roll


import random
for i in range(3):
    print(random.random())
print(random.randint(10,32))

members = ["mangesh", 'kunal', 'ganesh', 'nikhil', 'pranit']
leader = random.choice(members)
print("leader :", leader)

x=random.randint(0,6)
y=random.randint(0,6)
xy=(x,y)
print(xy)


class Dice:
    def roll(self):
        x=random.randint(0,7)
        y=random.randint(0,7)
        print(x , y)
        return


Dice.roll

from pathlib import Path

path = Path()
print(path.glob('*.py'))

for file in path.glob("*,py"):
    print(file)