# def calcex(str):
#     for i in range(len(str)):
#         if str[i] in


def calcExpr(str):
    opeartors = ''
    operands = ''
    for i in range(len(str)):
        if str[i] not in "1234567890":
            opeartors += str[i]
        else:
            operands += str[i]

    print(opeartors)
    print(operands)


calcExpr("2+((6/3)*5)-1")

# print(eval("2+(6/3)*5-1"))
