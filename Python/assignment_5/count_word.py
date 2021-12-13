import PyPDF2

a = PyPDF2.PdfFileReader('Offer_Letter_Abhishek_Ninawe.pdf')
str = ''

length = a.getNumPages()  # to extract number of pages in that pdf

for i in range(length):
    str += (a.getPage(i).extractText())

with open("text.txt", "w", encoding='utf-8') as textfile:
    textfile.write(str)

with open("text.txt", "r") as countwords:
    count = 0
    line = countwords.readline()
    word_to_count = "Company"
    while line:
        if word_to_count in line or word_to_count.casefold() in line:
            count += 1
        line = countwords.readline()
    print('The count of word "{}" = {}'.format(word_to_count, count))
