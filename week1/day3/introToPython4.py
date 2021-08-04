firstresponse = int(input("what is your number?"))
if (firstresponse % 3) == 0:
    print("Fizz")
if (firstresponse % 5) == 0:
    print("Buzz")
if (firstresponse % 3 and 5) == 0:
    print("Fizz Buzz")
