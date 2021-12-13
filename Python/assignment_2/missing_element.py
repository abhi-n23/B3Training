# ----------way 1----------
element_list = [1, 2, 4, 7, 8, 10]
print("The List contains the elements = {}".format(element_list))
missing_elements = []

for element in list(range(11)):
    if element not in element_list:
        missing_elements.append(element)
print("The missing elements are = {}".format(missing_elements))

# time complexity = O(n)

# ----------way 2----------
element_list = [1, 2, 4, 7, 8, 10]
print("The List contains the elements = {}".format(element_list))
missing_elements = list(set(range(11)) - set(element_list))
# missing_elements=",".join(element if element not in missing_list)
print(missing_elements)

# time complexity = O(1)
