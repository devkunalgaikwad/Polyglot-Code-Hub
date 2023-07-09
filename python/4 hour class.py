#1.15 it is used fuction compare values of x and y

x=10
y=20
print (x==y)  #equal
print (x!=y)  #not equal
print (x>y)
print (x<y)


#1.28 it is used find char in string

a= "hello"

print("h" in a) #in true or false

b= [1,36,55]
print= (35 not in b)
#4.10 format function it used for add text in {} bracket

w = "welcome {} to {} bye".format("hello",20);
print(w)

w = "welcome {1:^10} to {0} bye".format("hello",20);
print(w)

l=[1,2,3,4,"hello"] #4.35 it used in to get interger or string from list
print(l, type(l))
print(l[2])
print(l[4])
t=len(l)
for n in range(t):
    print(l[n])
for a in l:
    print(a)