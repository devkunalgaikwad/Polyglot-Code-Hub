while True:
    try:
        v1 = float(input("Enter value of velocity V1: "))
        v2 = float(input("Enter value of velocity V2: "))
        t1 = float(input("Enter value of Time T1: "))
        t2 = float(input("Enter value of Time T2: "))
        t3 = float(input("Enter value of desired tool life T3 (min): "))
    except ValueError:
        print ("Incorrect input, try again")
    else :
        break
import math
n= math.log(v2/v1)/(math.log(t1/t2))
C= v1*t1**n
v=C/(t3**n)
v="{:.2f}".format(v)
print(f"Hence recommend the cutting speed for desired tool of {t3} min of life is {v} m/min.")



import random
l=["Rock","Scissor","Paper"]

#rock vs paper >paper wins
#rock vs scissor  >rock wins
#scissor vs paper >scissor wins


def Result(user_input,com_input):
    return  if (user_input==1 and com_input=="scissor") or (user_input==2 and com_input=="paper") or (user_input==3 and com_input=="rock")
while True:
    try:
            u_choice=int(input('''
Rock paper sissor game
To start the game press 1
To exit 2 : '''))
    except(ValueError):
            print("Please enter command 1 or 2")
    else:
        break
if u_choice==1:
    for a in range(1,6):
        while True:
            try:
                user_input=int(input('''
For rock 1
scissor 2
paper 3 : '''))
            except(ValueError):
                print("Please enter command 1,2,3 among these")
            else:
                break
        com_input=random.choice(l)
        se=Result(user_input,com_input)
        print(Re)


else:
    print("Game is ended")


