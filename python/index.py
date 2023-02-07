from random import randint
print("nhap dam, la, keo:")
player = input()
computer = randint (0,2)

if computer == 0:
    computer = "dam"
if computer == 1:
    computer = "la"
if computer == 2:
    computer = "keo"

print("---")
print("ban chon:" + player)
print("may tinh chon:" + computer)
print("---")

if player == computer:
    print("hoa")
else:
    if player == "keo":
        if computer == "dam":
            print("thua")
        else:
            print("thang")

    elif player == "dam":
        if computer == "keo":
            print("thang")
        else:
            print("thua")


    elif player == "la":
        if computer == "keo":
            print("thua")
        else:
            print("thang")

    else: 
        print("nhap sai!!!")