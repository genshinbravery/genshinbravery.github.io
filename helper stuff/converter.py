with open('characters.txt') as file:
    lines = file.readlines()
    lines = [line.rstrip() for line in lines]

for i in range(len(lines)):
    lines[i] = "<li> <input type=\"checkbox\" id=\"" + str(lines[i]) + "\" value = \"" + str(lines[i]) + "\"> " + lines[i] 
    print(lines[i])