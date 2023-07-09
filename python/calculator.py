oi = float(input("Enter your inner tyre angle : "))
wheel_base = float(input("Enter your wheelbase : "))
track_width = float(input("Enter your track width : "))
import math
cot_oo = (track_width/wheel_base)+ 1/math.tan(oi)
print(1/math.tan(oi))
print(cot_oo)                                        #ackerman law
oo = math.degrees(math.atan(cot_oo))
print(f"Outer angle of tire : {oo}" )
p_to_p= float(input("Enter your value of p to p: "))
turing_angle =(wheel_base/math.sin(oi))-(track_width-p_to_p)/2
print (turing_angle)