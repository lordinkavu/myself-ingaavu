---
title: sorting in c++
tags: programming
---
## Sorting algorithms
### cpp  sort
```
sort(array,array+size_of_array);
sort(vector.begin(),vector.end());
```

 Sorting based on built - in comparator 

```
// sort in reverse order
sort(vector.begin(),vector.end(),greater<int>());
```

Sorting based on custom comparator

```
// comparator function to sort in descending order
bool comparator(int a,int b){
	return a > b;
}

int main(){
....
....
sort(vector.begin(),vector.end(),comparator);
return 0;
}
```

### stability in sorting algorithms
Consider an array of objects. If two or more elements have identical values for sorting parameter then they should maintain the same relative order in the sorted array as in input array. 
one possible use case is for first sorting based on one parameter and then based on another parameter. Stability ensures that the second sorting routine doesn't undo the first sorting.

### sorting algorithms
Bubble sort ->  
```
void bubbleSort(int arr[],int n){
	for(int i=0;i<n-1;i++){
		for(int j=0;j<n-1-i;j++){
			if(arr[j]>arr[j+1]) swap(arr[j],arr[j+1]);
		}
	}
}

```

Selection sort -> 
```
void selectionSort(int arr[], int n){
	for(int i=0;i<n-1;i++){
		int min = i;
		for(int j=i+1;j<n;j++){
			if(arr[j]<arr[min]) min=j;
		}
		swap(arr[min],arr[i]);
	}
}

```

Insertion sort ->
```

```