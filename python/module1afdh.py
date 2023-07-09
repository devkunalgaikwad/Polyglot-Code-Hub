l = [10,2,6,5,5,6]
print(l[2])
print(l[0:4])
print(l[0::3])                                  #number form list
print(l[3:])
print(l[-1::-2])


a=[10,23,0,2,5,6,54,78,9,5,5]
t= len (a)                                         #series of numbers for list
print(t)
for n in range (t):
    print(a[n])
for j in a:
    print (j)
for k in range (t-1,-1,-1):
    print(a[k])

del l[2]
print(l)
print(l.pop(2), type(l))
print(l.remove(2))
print(l.clear())                        #list edit
a[0]=2                                  #replace number in list a number
print(a)
a.insert(1,4)                             #add new number
print(a)
k=[2,1,3,5,8,4,5,6,2,5,5]
a.extend(k)
print(a, type(a))
a.append(122)
print(a)

n=[m for m in range(1,20)]
print(n)
                                        #list fuction
print(n.count(2))
print(max(n))
print(min(n))
n.append(2)
n.sort()
print(n)
n.reverse()
print(n)

m= [h for h in range(1,101) if h%2==0]
print(m)
s= 'hello'
f=[d for d in s]                #it is used for print even and odd number and print list
print(f)

#for interate more than one list

l=[4,45,8,9,45,88]
l1=[45,9,8,7,8,7,5,2,3]
for a,b in zip(l,l1):
    print(a,b)

#alternative method for interate more than one list

t=len(l)
for a in range(t):
    print(l[a], l1[a])

#it is used for convert string into list

n= input("Enter your name :")
l=n.split();
print(l)

#to get number of input

for a in range(1,3):
    n= input('Enter your valve'+ str(a) +':+')
    print(n)

l=[]
for a in range(1,4):
    n= input('Enter your value'+str( a)+":-")
    l.append(n)
print(l)

#push is inserting an element
#pop is deleting of last element
#peek is display last element
#display is show list

l=[]
while True:
    c=int(input('''
1 Elements
2 Pop Elements
3 Peek Elements
4 Display stack
5 Exit
    '''))

    if c==1:
        n=int(input("Enter your value :"))
        l.append(n)
        print(l)
    elif c==2:
        if len(l)==0:
            print("Empty stack")
        else:
            p=l.pop()
            print(f"Popped element is {p} from stack of{l}")
    elif c==3:
        if len(l)==0:
            print("Empty stack")
        else:
            print("Last element of stack", l[-1])
    elif c==4:
        print("list is", l)
    elif c==5:
        break
    else:
        print("invalid operator")


#dictonary


d= {
'name':'python',
'fees': 8000,
'duration': '2 months'
}

print(d['fees'])

for a in d:
    print(d[n])

    d = {
'course' : 'Python',
'fees' : 8000,
'duration' : '2 Months'
}

# it is used to get values
c=d.get("course")
c1=d["course"]
print(c,c1)

#for keys
for a in d.keys():
    print(a)

#for values

for a in d.values():
    print(a)

#for items (for both values and keys)

for a,b in d.items():
    print(a ,b )

#for to delete
del d['fees']
print(d)

#for pop it gives value del delete item

print(d.pop('duration'))
print(d)

#for to create  dictory

d= dict(name="python",fees=2000)
print(d)

#to update dict key

d.update({"fees":10000})
print(d)

#to add item

d['desc']="this is python"
print(d)

#for nested dictionary

course={
"phy":{"duration":"3 Months","fees":15000},
"java":{"duration":"6 Months","fees":19000},
}

print(course)
print(course["phy"]["fees"])

for k,v in course.items():
    print(k,v["duration"],v["fees"])

#to update

course["java"]["fees"]=12000
print(course)

#for delete

del course["phy"]["fees"]
print(course)

#it is for tuple

t=(10,2,10,3,2,550)
print(type(t))

#for iterate element from tuple
l=len(t)
for a in range(l):
    print(t[a])
for g in t:
    print(g)

#for getting min value
print(min(t))

#for getting max value
print(max(t))

#for getting variable iterations
print(t.count(10))

#for getting index number
print(t.index(2))

#for getting sum of element
print(sum(t))

#set is a type of data collection which unorder and unindex but has no duplicate

s= {10,25,36}

print(type(s))
#to get element in set
for a in s:
    print(a)

#to convert list to set

l=[12,5,565,8,9]
y=set(l)
print(y,type(y))

s.remove(10)
print(s)

s.add(56)
print(s)

s.discard(20)

#pop in set remove any element
u=s.pop()
print(u)

#to clear set
print(s.clear())

s.update(l)
print(s)

#defination

def showdata():
    print("welcome to ws cube tech")
showdata()

def sum(a,b):
    print(a+b)
print(sum(10,52))

def square(x):
    return x*x
print(square(5))


#to import date and time

import datetime
x= datetime.datetime.now()
print(x)

#math operations

import math
x=10.5

#it is used for getting number greater than float value eg. 2.5=3

print(math.ceil(x))
x=9

#it change the value negative to positive
print(math.fabs(x))
print(math.factorial(x))
x=45.3

#oppsite to ceil
print(math.floor(x))

l=[10,2,5,23,56]

#for sum all element of list

print(math.fsum(l))

#square root
print(math.sqrt(45444))



import random
l=["Rock","Scissor","Paper"]

#rock vs paper >paper wins
#rock vs scissor  >rock wins
#scissor vs paper >scissor wins

while True:
    ccount=0
    ucount=0
    uc = int(input('''
Game is started
1 for start
2 for exit
    '''))
    if uc ==1:
        for a in range(1,6):
            user_input=int(input('''
1 Rock
2 Paper
3 Scissor'''))
            if user_input==1:
                uchoice="Rock"
            elif user_input==2:
                uchoice="Paper"
            elif user_input==3:
                uchoice="Scissor"
            c_choice=random.choice(l)
            print(f'''
Computer Value is {c_choice}
User choice is {user_input}''')
            if c_choice==uchoice:
                print("Game draw")
                ucount+=1
                ccount+=1
            elif (uchoice=="Rock" and c_choice=="Scissor") or (uchoice=="Scissor" and c_choice=="Paper") or(uchoice=="Paper" and c_choice=="Rock"):
                print(f'''
You win
Computer Value is {c_choice}
User choice is {user_input}
                ''')
                ucount+=1
            else:
                print(f'''
You lose
Computer Value is {c_choice}
User choice is {user_input}
                ''')
                ccount+=1
        if ucount==ccount:
            print(f'''
Game is draw
your winning count is {ucount}
computer winning count is {ccount}''')
        elif ucount>ccount:
            print(f'''
User is winner
your winning count is {ucount}
computer winning count is {ccount}''')
        else:
            print(f'''
User is lose
your winning count is {ucount}
computer winning count is {ccount}''')

    else:
        break



#pickle is used for store all data
#load is for read the file
#dump is for save the file
#wb is wirte data

import pickle
l={10:"pic",2:"fjkd",5:"dhf"}
print(type(l))
file= open("writedata.txt","wb")
pickle.dump(l,file)
file.close()
files=open("writedata.txt","rb")
l=pickle.load(files)
file.close
print(l[2])

#json is generally used for api in web development and app development
#it is similar to dict but it is string '{}'
import json
d={
'course_name':"python",
'fees':15000,
}
f=json.dumps(d)
print(type(f),f)

class DemoClass:
    a=10
    #self.a is must to use varible in def
    def showvalue(self):
        print(self.a)
    def mult(self):
        self.c=self.a**self.a
        print(self.c)
    def ans(self):
        print("Hello")
    def sum(self,a,b):
        print(a+b)
    #constructer __init_ it does not need to call it already print it
    def __init__(self):
        print("aas")
        print(self.a+self.a)
b=DemoClass()
b.showvalue()
b.mult()
b.ans()
b.sum(10,20)


#inheritance is like a mixing two class
class A:
    def display(self):
        print("display 1")
class B(A):
    def display2(self):
        print('display 2')
obj=B()
obj.display2()
obj.display()


#encapsulation it kind of privatisation of code
#for this __varible it is method for enapsulation
class Student:
    __name="ravi"
    #it not give the output
    #__init__ constructer it give ans automatically
    def __init__(self):
        print(self.__name)
        self.__display()
    def __display(self):
        print("Welcome to wscube tech")


obj=Student()
print(Student.__name__)


#polymorphism, function is same but signature(data type) is change
#len function is used to get the number of chara in element
#l=[10,25,45,45] by len it will give ans as 4
#a='Welcome' by len it will give ans as 7


#overloading does job more than one
class Ws:
    def display(self,name=""):
        print("ws "+name)
obj=Ws()
obj.display("python")

#overridding using same varible in class function in inheritance
#by rule it print value which override the another value

class Ids(Ws):
    def display(self):
        print("kjklaj")
obj=Ids()
obj.display()

#for to takle above problem super fuction is used
#super is to call parent varible

class Ids(Ws):
    def display(self):
        super().display()
        print("kjklaj")
obj=Ids()
obj.display()

#overloading it nothing but a same function which uses different parameter
class Area:
    def find_area(self,a=None,b=None):
        if a!=None and b!=None:
            area=a*b
            print(f'Area of rectangle is {area}mm^2')
        elif a !=None:
            area=a*a
            print(f'Area of square is {area} mm^2')
        else:
            print("Unable to find area give parameter")
obj=Area()
obj.find_area(8,5)







