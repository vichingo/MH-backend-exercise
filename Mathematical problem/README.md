## Mathematical problem

You are given the task to create an API that is meant to solve a mathematical problem.

The API path will be given 2 inputs. The first input is an array of N digits, where the second input is a single digit. The array should be converted to a 2-dimensional array, where the second input represents the length of a row. You can assume that the length of the array will always be a multiple of the row length.

E.g. for the input `[0, -2, -7, 0, 9, 2, -6, 2, -4, 1, -4, 1, -1, 8, 0, -2]` and `4`, your 2-dimensional array will be:

```
0 -2 -7 0
9 2 -6 2
-4 1 -4 1
-1 8 0 -2
```

The purpose of your API is to find the sub-rectangle with the largest sum. A sub-rectangle is a sub-array of size MxN located within the whole array.

Your API should return the sum of this largest sub-rectangle.

In the given example, the maximal sub-rectangle is the lower-left-hand corner
```
9 2
-4 1
-1 8
```
which has a sum of 15, thus your API should return 15.
