import numpy as np 

matrix = np.arange(36.).reshape((6,6))
print(matrix)
rows, cols = matrix.shape
dictionary = [ {'x':j, 'y':i, 'value':matrix[j,i]}for j in range(rows) for i in range(cols) ]
print(dictionary)

import json
import sys

sys.stdout = open('declare.js','w')

jsonobj = json.dumps(dictionary)

#var jsonstr = [{x: y: val: }]

print("var jsonstr = '{}' ".format(jsonobj) )