---
title: Pointers and memory
tags: programming
---
## Pointers & Memory.

### Pointers

Variables that store address of another variable.

```cpp
int a;
int* p;
p = &a;
// Here p = address and *p is value at address.

```

Now the value of _a_ can be modified using _\*p_.

Pointers can be integer pointers, char pointers, etc. This type specification is necessary since pointers support de referencing.

### Memory

1. Code - instructions
2. Static/Global - global variables outside all functions.
3. Stack - local variables, function calls, fixed size.
4. Heap - free store of memory , dynamic memory.



### Dynamic memory allocation in C++

_malloc , free_ - used for dyn. mem. allocation in C. Valid in C++ also as it is backward compatible with C. _malloc_ returns _null_  if it isn't able to allocate memory.

_new, delete -_  used in C++.

```cpp
// In C :
int* p = (int*)malloc(sizeof(int)); 
// Reserves 4 bytes in heap and 
// returns the pointer to that reserved space.
*p = 10;
free(p);

//In C++ :
p = new int;
*p = 10;
delete p;
```