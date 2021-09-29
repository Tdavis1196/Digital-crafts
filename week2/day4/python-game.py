class character:
    def __init__(self,Name,HP,ATK):
        self.Name = Name
        self.HP= HP
        self.ATK = ATK
    def takedamage(self,damage_amount):
        self.HP -= damage_amount
# I created my class and named it character and gave it parameters.
# I had to define a function within the class so that it applies to all characters
name = input("Enter your character's name:")
Hero = character(name,120,40)
Villain = character("Zaboomafoo",135,45)
# I created a variable to take input from user and replace it as the name for the Hero.
# I also assigned the hero and Villain HP and Atk power.
print({"Hero Name"},Hero.Name,{"Hero HP"},Hero.HP,{"Hero Attack Power"},Hero.ATK)
print({"Villain Name"},Villain.Name,{"Villain HP"},Villain.HP,{"Villain Attack Power"},Villain.ATK)

# I used while true here so that my game will continuosly run these actions after the user's input until it breaks.
# I used choice = int(input())to have a number given back for my options below
print("""The evildoer, Zaboomafoo, has terminated the last of the heroes! 
You are the sole survivor and must defeat this Villain to save the planet.
""")
while True:
    choice = int(input("""What do you want to do?
1. Strike
2. Defend/Counter
3. Flee
4. Quit
"""))

    if choice == 1:
        print(f"You have struck Zaboomafoo, great job! But it looks like you took damage as well")
        print(f"the Villain's remaining HP is {Villain.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Villain.takedamage(Hero.ATK)
        Hero.takedamage(Villain.ATK*.65) 
        # I took my function from above and invoked it with the parameters from my class to determine how much damage the characters take.
        # if/elif statements to break the loop
        if Hero.HP <= 0:
           print("game over")
        elif Villain.HP <= 0:
            print("Zaboomafoo's health has reach 0. You are the victor!")
            break

    elif choice == 2:
        print(f"You managed to partially negate Zaboomafoo's ATK and counter, stay focused!")
        print(f"the Villain's remaining HP is {Villain.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(Villain.ATK/2)
        Villain.takedamage(Hero.ATK*.80)
        if Hero.HP <= 0:
            print("game over")
        elif Villain.HP <= 0:
            print("Zaboomafoo's health has reach 0. You are the victor!")
            break

    elif choice == 3:
        print(f"the Villain's remaining HP is {Villain.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(120)
        if Hero.HP <= 0:
            print(name,", you have been OUTMATCHED! Game Over")
            break
    elif choice == 4:
        break
    