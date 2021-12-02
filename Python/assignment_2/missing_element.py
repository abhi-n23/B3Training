element_list = [1, 2, 3, 4, 7, 8, 10]
print("The List contains the elements = {}".format(element_list))
missing_elements = []

for element in list(range(1, 10)):
    if element not in element_list:
        missing_elements.append(element)
print("The missing elements are = {}".format(missing_elements))

# time complexity = O(n)
