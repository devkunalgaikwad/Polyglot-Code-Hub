'''it excerise about encrpting the message in such a way that
 if text is 'A' then it will be move the alphabet ahead according to integer given
eg. text is A and integer is 2 then A will move ahead C
And it Same for string'''

import pdb

class Encreption:
    def __init__():
        pass

        
    def help():
        print('''it excerise about encrpting the message in such a way that
if text is 'A' then it will be move the alphabet ahead according to integer given
eg. text is A and integer is 2 then A will move ahead C
And it Same for string''')
        
    def interger_encrept(text, integer):
        global alphabets
        output = '' 
        if integer >=26:
            integer = integer%26
        for char in text:
            char_index = alphabets.find(char)
            if (char_index + integer) >26:
                char_index = char_index%26
                integer = 0
            output = output + alphabets[char_index+integer]
            #pdb.set_trace()
            #pdb is for debugging the code it used ot get values of variable at each step(line of code)
        return output
    def decrept(encrepted_message, integer):
        pass
        
            
text = input('Enter text to encrept :')
integer = int(input('Enter integer :'))
alphabets = ('abcdefghijklmnopqrstuvxyz')

encrepted_message = Encreption.interger_encrept(text,integer)
print(encrepted_message)
