from tkinter import *
import random
from time import*


def inputt():
    pass

def text():
    text_sample = ["Stimulate your mind as you test your typing speed with this standard English paragraph typing test.",
    "Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.",
    "If you don't like a test prompt, you can get a different (random) prompt with the 'change test' button - or select a specific paragraph to type from the list below.",
    "To find out how fast you type, just start typing in the blank textbox on the right of the test prompt.",
    "You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy.",
    "You can fix errors as you go, or correct them at the end with the help of the spell checker."]
    textt= random.choice(text_sample)
    return textt

sp=Tk()

sp.title("Typing speed")
sp.geometry("1400x700")

lab= Label(sp,text="Welcome to typing test", font=("Time New Roman",25,"bold"))
lab.place(x=475,y=30,height=40,width=450)

button= Button(sp,text="To start the test", font=("Time New Roman",25,"bold"),relief=RAISED,command=inputt)
button.place(x=10,y=90,height=40,width=300)

button= Button(sp,text="Type text here", font=("Time New Roman",25,"bold"),relief=RAISED,command=text)
button.place(x=10,y=140,height=40,width=300)


sp.mainloop()


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

