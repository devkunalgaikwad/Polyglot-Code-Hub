 #project on random guess game

import random
cnumber= random.randrange(1,101)
while True:
    try:
        user=int(input("Enter your guess in between 1 and 100 : "))
    except ValueError:
        print("Invalid error try again")
    else:
        print(f"Computer generated guess is {cnumber}")
        break
if user >cnumber:
    print("Your guess is too high")
elif user ==cnumber:
    print("Your guess is correct")
else :
    print("your guess is too low")

#game rock paper scissor

import random
l=["Rock","Scissor","Paper"]

#rock vs paper >paper wins
#rock vs scissor  >rock wins
#scissor vs paper >scissor wins

while True:
    ccount=0
    ucount=0
    while True:
        try:

            uc = int(input('''
Game is started
1 for start
2 for exit
    '''))
        except (NameError,ValueError):
            print("Enter correct in input")
        else:
            break
    if uc ==1:
        for a in range(1,6):
            while True:
                try:
                    user_input=int(input('''
1 Rock
2 Paper
3 Scissor'''))
                except(ValueError,NameError):
                    print("Incorrect choice")
                    pass
                if user_input!=1!=2!=3:
                    pass

                else:
                    break
            if user_input==1:
                    uchoice="Rock"
                    break
            elif user_input==2:
                    uchoice="Paper"
                    break
            elif user_input==3:
                    uchoice="Scissor"
                    break
            elif user_input!=1 or user_input!=2 or user_input!=3:
                    print("Enter correct input")
            else:
                break

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

    elif uc==2:
        break
    else:
        print("Enter correct input")
        pass

#project a bike rental system
class BikeRentalService:
    def __init__(self,stock):
        self.stock=stock
    def rentforbike(self,q,price):
        self.price=price
        if q<=0:
            print('Please enter number of bike more than zero')
        elif q>self.stock:
            print('Sorry we not have that quantity which you want')
        else:
            self.stock=self.stock-q
            print("Your total order price is ", price*q)
            print("Total bikes ",self.stock)
    def displaystock(self):
        print("Total bikes in stock is ", self.stock)
while True:
    obj=BikeRentalService(100)
    uc=int(input('''
1 Display stock
2 Rent a bike
3 exit
    '''))
    if uc==1:
        obj.displaystock()
    elif uc==2:
        q=int(input('Enter qunatity of bike you want'))
        obj.rentforbike(q,100)
    elif uc==3:
        break
    else:
        print("Enter correct input")
        pass


#email validation
email=input("Enter your email : ")
#12kunalgaikwad@gamil.com
#a@gamil.com
#a@g.in
if len(email)>=6:
    if email[0].isalpha():
        if ("@" in email) and (email.count("@")==1):
            if email.count(".")==1:
                if (email[-4]==".")^(email[-3]=="."):
                    for i in email:
                        if i==i.isspace():
                            print("Email must not contain space")
                        elif i.isalpha():
                            if i.isupper():
                                print("Email does not contain upper case letter")
                        elif i.isdigit():
                            continue
#coninue is used to break the loop it can be for or while
                        elif i=="_" or i=="@" or i ==".":
                            continue
                    else:
                        print("Correct email")
                else:
                    print("Email must contain '.' before com or in")
            else:
                print("Email must not contain '.' not more than one")
        else:
            print("Email must contain @ not more than 1")
    else:
        print("Email must contain first alphabet")
else:
    print("Email must contain more tha 6 chara")

#system off panel


from tkinter import *
import os
def restart():
    os.system("shutdown /r /t 1")
def restart_time():
    os.system("shutdown /r /t 20")
def logout():
    os.system("shutdown -1")
def shutdown():
    os.system("shutdown /s /t 1")


st= Tk()
st.title("Shutdown App")
st.geometry("500x500")
st.config(bg="White")

restart= Button(st,text="Restart",font=("Time New Roman",15,"bold"),relief=RAISED,cursor="plus",command="restart")
restart.place(x=20,y=20,height=40,width=150)

restart_time= Button(st,text="Restart Time",font=("Time New Roman",15,"bold"),relief=RAISED,cursor="plus",command="restart_time")
restart_time.place(x=20,y=80,height=40,width=150)

logout= Button(st,text="Logout",font=("Time New Roman",15,"bold"),relief=RAISED,cursor="plus",command="logout")
logout.place(x=20,y=140,height=40,width=150)

shutdown= Button(st,text="Restart Time",font=("Time New Roman",15,"bold"),relief=RAISED,cursor="plus",command="shutdown")
shutdown.place(x=20,y=200,height=40,width=150)

st.mainloop()


#for to use all fuction in module
import random
from time import*

def mistake(c_text, u_text):
    error=0
    for i in range(len(c_text)):
        try:
            if c_text[i] != u_text[i] :
                error+=1
        except:
            error+=1
    return error

def speed(before_text, after_text,user_text):
    t_time=a_time-b_time
    total_time=len(u_text)/t_time
    return round(total_time,2)

#it is used for to create a module like random
if __name__ == '__main__':
    text = ["Stimulate your mind as you test your typing speed with this standard English paragraph typing test.",
    "Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.",
    "If you don't like a test prompt, you can get a different (random) prompt with the 'change test' button - or select a specific paragraph to type from the list below.",
    "To find out how fast you type, just start typing in the blank textbox on the right of the test prompt.",
    "You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy.",
    "You can fix errors as you go, or correct them at the end with the help of the spell checker."]
    print("Welcome to typing test")
    while True:
        uc= input("To start typing test enter yes or no")
        if uc == "yes":
            c_text= random.choice(text)
            b_time=time()
            u_text = input("Type your text:")
            a_time=time()
            t_mis= mistake(c_text, u_text)
            s_speed= speed(b_time, a_time, u_text)
            print(f'You have made {t_mis} mistake in typing')
            print(f'You net typing speed is {s_speed} word per sec')
        elif uc== "no":
            print("Thank you")
            break
        else:
            print("Enter correct input")
            continue



from tkinter import *
import speedtest


#get servers is for to access the internet
def speedcheck():
    sp= speedtest.Speedtest()
    sp.get_servers()
    down=str(round(sp.download()/(10**6))+" Mbps")
    up=str(round(sp.upload()/(10**6))+" Mbps")
    lab_down.config(text=down)
    lab_up.config(text=up)


sp = Tk()
#first it must to enter parameters of window

sp.title("Internet speed")

# x it is not multiply sign geometry is size of window
sp.geometry("500x450")

#config is used to change colour of window
sp.config(bg="White")

#label is used to create a tab
#bg is background and fg is font colour
#format is follow Lable(<obj>,text="Internet speed test", font=("<font name>", font size , "<bold>")bg ="<colour>", fg="<colour>")
#place is used to do coordinate1 and height width is for box
print(len("Internet speed test"))
lab= Label(sp,text="Internet speed test", font=("Time New Roman",25,"bold"),bg="White",fg="Black")
lab.place(x=100,y=40,height=40,width=300)

lab= Label(sp,text="Download speed", font=("Time New Roman",25,"bold"),bg="White",fg="Black")
lab.place(x=100,y=100,height=40,width=300)

lab_down= Label(sp,text="00", font=("Time New Roman",25,"bold"),bg="White",fg="Black")
lab_down.place(x=100,y=160,height=40,width=300)

lab= Label(sp,text="Upload speed", font=("Time New Roman",25,"bold"),bg="White",fg="Black")
lab.place(x=100,y=220,height=40,width=300)

lab_up= Label(sp,text="00", font=("Time New Roman",25,"bold"),bg="White",fg="Black")
lab_up.place(x=100,y=280,height=40,width=300)


button= Button(sp,text="Check Speed", font=("Time New Roman",25,"bold"),bg="white",fg="Black",relief=RAISED, command=speedcheck)
button.place(x=100,y=320,height=40,width=300)




#mainloop is used for create a window

sp.mainloop()

