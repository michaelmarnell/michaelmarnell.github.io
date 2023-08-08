import numpy as np 

matrix = np.arange(36.).reshape((6,6))
print(matrix)
rows, cols = matrix.shape
# dictionary = [ {'x':j, 'y':i, 'value':matrix[j,i]}for j in range(rows) for i in range(cols) ]
dictionary = movies = [
    {
        "poster": "https://m.media-amazon.com/images/M/MV5BZTVhYzgwYTctMGVjZi00MjBmLTlkYzAtYjdlMzdmYjMzYmQ5XkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
        "title": "The Atomic Submarine",
        "director": "Spencer Gordon Bennet",
        "rating": "5.1",
        "plot": "Ships mysteriously disappear on route across the Arctic Sea, and a specially-equipped submarine is sent to investigate."
    },
    {
        "poster": "https://m.media-amazon.com/images/M/MV5BMzM0MzE2ZTAtZTBjZS00MTk5LTg5OTEtNjNmYmQ5NzU2OTUyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "title": "Anatomy of a Murder",
        "director": "Otto Preminger",
        "rating": "8.0",
        "plot": "An upstate Michigan lawyer defends a soldier who claims he killed an innkeeper due to temporary insanity after the victim raped his wife. What is the truth, and will he win his case?"
    },
    {
        "poster": "https://m.media-amazon.com/images/M/MV5BM2QwMmQxOGYtMGFjNy00ODdhLTlkOGYtYjNjNjgwY2UyZTI0XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX190_CR0,3,190,281_.jpg",
        "title": "Sunday Bloody Sunday",
        "director": "John Schlesinger",
        "rating": "7.0",
        "plot": "The emotional intricacies of a polyamorous relationship between young artist Bob and his two lovers: a lonely male doctor and a frustrated female office worker."
    },
    {
        "poster": "https://m.media-amazon.com/images/M/MV5BMTFlYjgyMjUtNmJhZS00MDY2LTg0ZmMtNTVlNDA2NTUwYTRjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
        "title": "Being John Malkovich",
        "director": "Spike Jonze",
        "rating": "7.7",
        "plot": "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich."
    },
    {
        "poster": "https://m.media-amazon.com/images/M/MV5BMjE4MTk3MDY5MV5BMl5BanBnXkFtZTgwOTA0NzM3NDE@._V1_SX300.jpg",
        "title": "French Cancan",
        "director": "Jean Renoir",
        "rating": "7.3",
        "plot": "This comedy drama from Jean Renoir chronicles the revival of Paris' most notorious dance as it tells the story of a theater producer who turns a humble washerwoman into a star at the Moulin Rouge."
    }
]
print(dictionary)

import json
import sys

sys.stdout = open('declare.js','w')

jsonobj = json.dumps(dictionary)
