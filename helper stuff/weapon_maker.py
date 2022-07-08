with open('catalysts_list.txt') as file:
    lines = file.readlines()
    lines = [line.rstrip() for line in lines]

print(lines)