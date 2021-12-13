# ----------way 1----------
lst = [3, 200, 1, 2, 2, 3, 7, 8, 6, 9, 12122, 1000,
       2, 5, 33, 66, 88852, 445, 2, 0, 66, 55, 0]
max_num = lst[0]
min_num = lst[0]

j = len(lst)-1
print("j=", j)
count = 0

for i in range(len(lst)):
    if max_num < lst[i]:
        max_num = lst[i]

    if max_num < lst[j]:
        max_num = lst[j]

    if min_num > lst[i]:
        min_num = lst[i]

    if min_num > lst[j]:
        min_num = lst[j]

    if i == j or i > j:
        break
    j -= 1
    count += 1
    print("count=", count)

print("Min = {}\nMax = {}".format(min_num, max_num))
# time complexity = O(n)


# ----------way 2----------
# lst = [3, 2, 1, 2, 2, 3]
# print("Min = {}\nMax = {}".format(min(lst), max(lst)))
# time complexity = O(1)
