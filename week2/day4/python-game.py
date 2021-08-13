class character:
    def __init__(self,Name,HP,ATK):
        self.Name = Name
        self.HP= HP
        self.ATK = ATK
        # created function inside of class to apply to all characters
    def takedamage(self,damage_amount):
        self.HP -= damage_amount

# created variable to take input from user to take place as the name for the Hero.
# I also assigned the hero and villian HP and Atk power.
name = input("Enter your character's name:")
Hero = character(name,120,40)
Villian = character("Zaboomafoo",135,45)
print({"Hero Name"},Hero.Name,{"Hero HP"},Hero.HP,{"Hero Attack Power"},Hero.ATK)
print({"Villian Name"},Villian.Name,{"Villian HP"},Villian.HP,{"Villian Attack Power"},Villian.ATK)

# I used while true here so that my game will continuosly run these actions after the user's input.
# I choice = int(input())to set how many options will be given to the user.
print("""The evildoer, Zaboomafoo, has terminated the last of the heroes! 
You are the sole survivor and must defeat this villian to save the planet.
""")
while True:
    choice = int(input("""What do you want to do?
1. Strike
2. Defend/Counter
3. Flee
4. Quit
"""))
        
        #I recalled certain parameters from the class to create a function for the characters to take damage
    if choice == 1:
        print(f"You have struck Zaboomafoo, great job! But it looks like you took damage as well")
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Villian.takedamage(Hero.ATK)
        Hero.takedamage(Villian.ATK*.65) 
        # the villian and hero takes damage in this instance
        if Hero.HP <= 0:
            # if/elif statement to break the loop
            print("game over")
        elif Villian.HP <= 0:
            print("Zaboomafoo's health has reach 0. You are the victor!")
            break

    elif choice == 2:
        print(f"You managed to partially negate Zaboomafoo's ATK and counter, stay focused!")
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(Villian.ATK/2)
        Villian.takedamage(Hero.ATK*.80)
        if Hero.HP <= 0:
            print("game over")
        elif Villian.HP <= 0:
            print("Zaboomafoo's health has reach 0. You are the victor!")
            break

    elif choice == 3:
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(120)
        if Hero.HP <= 0:
            print(name,", you have been OUTMATCHED! Game Over")
            break
    elif choice == 4:
        break

        



    
    
            

    
        




    
        

