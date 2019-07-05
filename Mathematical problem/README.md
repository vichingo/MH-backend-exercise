# Mathematical problem

You are given the task to create an API that is meant to solve a mathematical problem.

The API path will be given 2 inputs. The first input is an array of N digits, where the second input is a single digit. The array should be converted to a 2-dimensional array, where the second input represents the length of a row. You can assume that the length of the array will always be a multiple of the row length.

E.g. for the input `[0, -2, -7, 0, 9, 2, -6, 2, -4, 1, -4, 1, -1, 8, 0, -2]` and `4`, your 2-dimensional array will be:

```js
0 -2 -7 0
9 2 -6 2
-4 1 -4 1
-1 8 0 -2
```

The purpose of your API is to find the sub-rectangle with the largest sum. A sub-rectangle is a sub-array of size MxN located within the whole array.

Your API should return the sum of this largest sub-rectangle.

In the given example, the maximal sub-rectangle is the lower-left-hand corner

```js
9 2
-4 1
-1 8
```

which has a sum of 15, thus your API should return 15.

## Solution

I have the solution for the 1D array, and found somecodeto make it works for a 2D, but cpp code did not convert that easy :(

```cpp
#include<bits/stdc++.h>
using namespace std;
int kadane(int arr[],int n)
{
    int max_ending_here=0;
    int max_so_far=0;
    int i,j,k,count=0,min=INT_MAX;
    for(i=0;i<n;i++)
    {   if(arr[i]<0)
        count++;
        if(arr[i]<min)
        min=arr[i];
        max_ending_here+=arr[i];
        if(max_ending_here<0)
        max_ending_here=0;
        if(max_so_far<max_ending_here)
        max_so_far=max_ending_here;
    }
    if(count==n)
    return min;
    else
    return max_so_far;
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int rows,columns,ans=INT_MIN;
        int i,j,k,l,r;
        cin>>rows>>columns;
        int mat[rows][columns];
        for(i=0;i<rows;i++)
        {
            for(j=0;j<columns;j++)
            cin>>mat[i][j];
        }
        int arr[rows];
        for(l=0;l<columns;l++)
        {
            memset(arr,0,sizeof(arr));
            for(r=l;r<columns;r++)
            {
                for(i=0;i<rows;i++)
                arr[i]+=mat[i][r];
                ans=max(ans,kadane(arr,rows));
            }
        }
        cout<<ans<<endl;
    }
}
```
