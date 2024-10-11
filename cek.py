fruits = [
    {
        'fruitId': 1,
        'fruitName': 'Apel',
        'fruitType': 'IMPORT',
        'stock': 10
    },
    {
        'fruitId': 2,
        'fruitName': 'Kurma',
        'fruitType': 'IMPORT',
        'stock': 20
    },
    {
        'fruitId': 3,
        'fruitName': 'Salak',
        'fruitType': 'LOCAL',
        'stock': 15
    },
    {
        'fruitId': 4,
        'fruitName': 'Mangga',
        'fruitType': 'LOCAL',
        'stock': 25
    },
    {
        'fruitId': 5,
        'fruitName': 'Jeruk Bali',
        'fruitType': 'LOCAL',
        'stock': 5
    },
    {
        'fruitId': 6,
        'fruitName': 'Pisang',
        'fruitType': 'IMPORT',
        'stock': 30
    },
    {
        'fruitId': 7,
        'fruitName': 'Kiwi',
        'fruitType': 'IMPORT',
        'stock': 12
    },
    {
        'fruitId': 8,
        'fruitName': 'Nanas',
        'fruitType': 'LOCAL',
        'stock': 18
    },
    {
        'fruitId': 9,
        'fruitName': 'Anggur',
        'fruitType': 'IMPORT',
        'stock': 22
    },
    {
        'fruitId': 10,
        'fruitName': 'Buah Naga',
        'fruitType': 'LOCAL',
        'stock': 14
    }
]


for i in fruits:
    # print(i)
    for key,value in i.items():
        print(key,value)
    
arr = []
arr2= []
for i in fruits:
    if i['fruitType'] == 'LOCAL':
        arr.append(i['fruitName'])
    if i['fruitType'] == 'IMPORT':
        arr2.append(i['fruitName'])
    
print(arr)
print(arr2)


dict = {}
for i in fruits:
    fruit_type = i['fruitType']
    if fruit_type not in dict:
        dict[fruit_type] = []
    dict[fruit_type].append(i['fruitName'])

print(dict)
