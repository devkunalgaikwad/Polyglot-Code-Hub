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

