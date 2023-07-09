import random

questions = (('Who is prime minister of India', 'Modi', 'Yogi', 'Rahul', 'Eknath', 'Modi'),
    ('Capital of India', 'Dehli', 'Mumbai', 'Pune', 'Bengluru', 'Dehli'),
    ('Nation Animal of India', 'Lion', 'Tiger', 'Peacock', 'Sanke', 'Lion'),
    ('What is known as red plane', 'Earth','Mars','Venus','Jupiter', 'Mars'),
    ('Who was the first woman Prime Minister of India?','Indira Gandhi',' Sonia Gandhi', 'Pratibha Gandhi', 'Sushma Swaraj', 'Indira Gandhi'),
    ('What is the currency of Brazil?','Real', 'Pesos', 'Rupees', 'Bhat', 'Real'),
    ('Who directed the movie "The Shawshank Redemption"?'))
levels = (1000,2000,3000,5000,10000,20000,40000,80000,160000,320000,640000,1250000,2500000,5000000,7500000,10000000,75000000)
def greeting():
    print('Welcome to KBC')
    while True:
        try:
            start = int(input('''
To start game press 1
or to exit press any key
To get gamepaly press 2
To get level info press 3

Enter input in numberical value: '''))
        except ValueError:
            print('Enter valid input')
            continue
        break
    return start


start = greeting()

if start == 1:
    win_price = 0
    while True:
        result = random.choice(questions)
        print(f'''
Your question is {result[0]}
Price of question is {result[1]}
Your option 1 is {result[2]}    Your option 3 is {result[4]}
Your option 2 is {result[3]}    Your option 4 is {result[5]}
''')
        answer = input('Enter your Answer : ')
        correct_ans = result[5]
        winning_amount = result[1]
        if answer.lower() == correct_ans.lower():
            print('You won')
            win_price += winning_amount
            print(win_price)
            continue
        else:
            print('You Lose')
            break
elif start == 2:
    print('''
Welcome to Kaun Banega Crorepati (KBC), the most popular quiz show in India!

The gameplay of KBC is quite simple. The contestant is asked a series of multiple-choice questions,with each
question being worth a certain amount of money. The questions increase in difficulty as the game progresses,
with the first few questions being relatively easy and the later ones being much more challenging.
The contestant has four lifelines that they can use if they are unsure of the answer to a question. The first
lifeline is 50:50, which eliminates two of the four answer choices, leaving the contestant with a 50/50 chance
of selecting the correct answer. The second lifeline is Ask the Audience, which allows the contestant to ask the
studio audience for their opinion on the answer. The third lifeline is Phone a Friend, which lets the contestant
call a pre-selected friend or family member for help. The fourth and final lifeline is Flip the Question, which
allows the contestant to skip the current question and move on to the next one.

If the contestant answers all the questions correctly, they win the grand prize of one crore rupees. If they are
unsure of an answer or give an incorrect answer, they risk losing some of the money they have already won.

So, are you ready to play KBC and become a crorepati? Let's get started!

''')
elif start == 3:
    print('''
Each question has a specific cash prize associated with it, and the amount increases with each correct answer.The first
five questions are relatively easy and are worth Rs. 1000, Rs. 2000, Rs. 3000, Rs. 5000, and Rs. 10,000 respectively.

After successfully answering the fifth question, the contestant advances to the next level, where the difficulty level
increases,but so do the prize amounts. The prize money for the next five questions is Rs. 20,000, Rs. 40,000, Rs. 80,000,
Rs. 1,60,000, and Rs. 3,20,000, respectively.

If the contestant successfully answers the tenth question, they reach the "Double Dip" level, where they can use two lifelines
instead of one. The prize money for the next five questions is Rs. 6,40,000, Rs. 12,50,000, Rs. 25,00,000, Rs. 50,00,000, and
Rs. 1 crore, respectively.

The final level is the "Jackpot" level, where the contestant has the chance to win a prize of Rs. 7 crore by answering a
difficult question correctly.''')
else:
    print('Game is ended')
    game = False

