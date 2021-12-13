lst = [1, 2, 52, 9, 6, 8, 7, 54, 23, 10, 5, 3, 18, 25,
       36, 5, 4, 558, 69, 44, 223, 6, 55, 4785, 12012, 5]
# lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 15, 14, 16, 18, 17, 19, 20]

j = len(lst)-1
i = 0

temp = 0
while i <= j:
    # to check if 1st is even and 2nd is odd
    if lst[i] % 2 == 0 and lst[j] % 2 != 0:
        temp = lst[i]
        lst[i] = lst[j]
        lst[j] = temp

    # to check if 1st is odd and 2nd is even
    if lst[i] % 2 != 0 and lst[j] % 2 == 0:
        temp = lst[i]
        lst[i] = lst[j]
        lst[j] = temp

    # to check if both are odd
    if lst[i] % 2 != 0 and lst[j] % 2 != 0:
        lst.insert(j, lst[i])
        del lst[i]
        i = i-1

    i += 1
    j -= 1

print(lst)
