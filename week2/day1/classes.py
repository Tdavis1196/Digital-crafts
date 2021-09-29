# Activity - User and Address
# Create a class called User which consists of (first_name, last_name) properties. Create a class name Address which consists of (street, city, state, zip_code) properties.

# Create a relationship between User and Address in a way that a single user can have multiple addresses.

# Add a new method/function to User class called add_address(self, address) which would take an address as an argument and add it to a list/array of addresses.

# Add another method to the User class called display_addresses(self) which would display all the addresss of that user.


class User:
    def __init__(self, first_name,last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address = []
    def add_address(self, address):
        self.address.append(address)

    # def display_address(self):
    #     self.address

        
        


user1 = User("timothy", "davis")
user1.add_address("503 detroit st")
print(user1.address)

    

        
#class Address(User):
#     def __init__(self,street, city, state, zip_code, first_name, last_name):
#         super().__init__(first_name,last_name)
#         self.street = street
#         self.city = city
#         self.state = state
#         self.zip_code = zip_code
        





# Activity Table Class
# In this activity, you will create a class to represent a Table. What properties you will add to the table?

# Also, go ahead and create 2 objects using the Table blueprint to represent a particular table.

# Activity 2 - Bank Account
# In this activity, you are going to model a bank account.

# Create a class called BankAccount.
# Add properties for balance and account_number
# Allow the user to deposit funds to the account. This can be accomplished by adding a deposit function to the BankAccount class.
# Allow the user to withdraw funds from the account. This can be accomplished by adding a withdraw function to the BankAccount class.
# Allow the user to transfer funds between two accounts. This can be accomplished by adding a transfer_funds function to the BankAccount class.
# After creating the BankAccount class, along with all the functions make sure to create instance of BankAccount and perform actions.