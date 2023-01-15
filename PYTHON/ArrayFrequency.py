from collections import Counter

def findFrequency(inputArr):
    countObject  = Counter(inputArr)
    return dict(countObject)


inputArr = ["a", "b", "c", "b", "b", "c", "c", "c", "a", "c"]
inputArr2 = [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 9, 6 , 6]

print(findFrequency(inputArr))
print(findFrequency(inputArr2))