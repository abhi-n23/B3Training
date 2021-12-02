# ----------way 1----------
repeated_list = [3, 2, 1, 2, 2, 3]
unique_list = []
for element in repeated_list:
    if element not in unique_list:
        unique_list.append(element)
print(unique_list)
# time complexity = O(n)


# ----------way 2----------
repeated_list = [3, 2, 1, 2, 2, 3]
repeated_list = list(set(repeated_list))
print(repeated_list)
# time complexity = O(1)
