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
void insertionSort(int arr[], int n)
    {
        for(int i=1;i<n;++i){
            int k=i;
            int temp = arr[i];
            while(k>0 && temp<arr[k-1]){
                arr[k]=arr[k-1];
                k--;
            }
            arr[k]=temp;
            
        }
    }

```

merge sort ->
```
 vector<int> merge(vector<int>& nums, int beg, int end){
        
        vector<int> vec;
        for(int i=beg;i<=end;++i) vec.push_back(nums[i]);
        if(vec.size()==1) return vec;
        int m = (vec.size()-1)/2;
        vector<int> left = merge(vec,0,m);
        vector<int> right = merge(vec,m+1,vec.size()-1);
        int li=0,ri=0,p=0;
        while(li<left.size() && ri<right.size()){
            if (left[li] <= right[ri]){
                vec[p++]=left[li++];
            }else if(right[ri]<left[li]){
                vec[p++]=right[ri++];
            }
        }
        while(li<left.size()){
            vec[p++]=left[li++];
        }
        while(ri<right.size()){
            vec[p++]=right[ri++];
        }
        return vec;
    }
```