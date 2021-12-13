def ispalindrome(word: str) -> None:
    if len(word) < 1:
        print("It is a palindrome word.")
    else:
        if word[-1] == word[0]:
            ispalindrome(word[1:-1])
        else:
            print("It is not a palindrome word.")


ispalindrome("nitin")
ispalindrome("malayalam")
ispalindrome("abhi")
