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

