# You must create a class for your characters
#  You will have a good character and a bad character
#  Please write out any actions as functions/methods
#  The game will loop until a victor is chosen, that victor is chosen when either one of you loses all your health
#  You must be able to attack the opposing character (Knight attacks Goblin for 10 damage)
#  Write a medium article explaining your logic and code
#  Right a readme doc for your github repo and please link your repo in your medium article as well
#  Submit this as a issue following our current issue format.

# As a user, I should be able to choose a Hero and give it a name
# As a user, I should be able to choose a Hero and see my stats (health,attack, etc)
# As a user, I should be able to immediately fight a villain
# As a user, I should be able to choose an action from a menu that isprinted
# As a user, I should be able to view this menu by calling a function
# As a user, I should be able to have the game quit if I reach 0 health or the enemy reaches 0 health



class character:
    def __init__(self,Name,HP,ATK):
        self.Name = Name
        self.HP= HP
        self.ATK = ATK
        # created function inside of class to apply to all characters using the self. method
    def takedamage(self,damage_amount):
        self.HP -= damage_amount

# created variable to take input from user to take place as the name for the Hero.
# I also assigned the hero and villian HP and Atk power.
name = input("Enter your character's name:")
Hero = character(name,120,25)
Villian = character("Zaboomafoo",135,30)


# I used while true here so that my game will continuosly run these actions after the user's input.
while True:
    choice = int(input("""The evildoer, Zaboomafoo, has terminated the last of the heroes! 
You are the sole survivor and must defeat this villian to save the planet.
What do you want to do?
1. Strike
2. Defend
3. Flee
"""))
        # I recalled certain parameters from the class to create a function for the characters to take damage.
    if choice == 1:
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Villian.takedamage(Hero.ATK)
        Hero.takedamage(Villian.ATK*.70)
        if Hero.HP <= 0:
            print("game over")
            break

    elif choice == 2:
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(Villian.ATK/2)
        if Hero.HP <= 0:
            print("game over")
            break

    elif choice == 3:
        print(f"the villian's remaining HP is {Villian.HP}")
        print(f"the hero's remaining HP is {Hero.HP}")
        Hero.takedamage(120)
        if Hero.HP <= 0:
            print(name,", you have been DEFEATED!")
            break

        



    
    
            

    
        




    
        

