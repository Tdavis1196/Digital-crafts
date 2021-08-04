# Conditionals

print("Welcome to this program")
firstName = input("Hey, what is your first name?")
length_of_first_name = len(firstName)
print(length_of_first_name)
if length_of_first_name <= 0:
    print("Please enter at least one character")
else:
    print(f"Hello {firstName}, welcome!")
    pass


    