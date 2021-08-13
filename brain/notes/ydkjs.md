---
title: You Don't Know JS - Notes
tags: programming,javascript
---
 ## You Don't Know JS - Notes
 
 Javascript is  fully parsed and compiled before execution.
 
 ### Hoisting
 mechanism by which variables and function declarations are moved to top of their scope before code execution ( happens during compile phase ). Enables variables / functions to be accessed before their initialisation.
 
 #### Variable hoisting ->
 
 At the time of declaration the variable is of type `undefined`
 
 ES6 `let` and `const` needs to be declared before it is used. A `const` variable must  also be assigned a value at declaration.
 
JavaScript hoists variables declared with es6 `let` and `const`. The difference in this case is how it initialises them. Variables declared with `let` and `const` remain uninitialised at the beginning of execution whilst variables declared with `var` are initialised with a value of undefined.
 
 `let`, `const` -> block scoped      
 `var` -> function scoped
 
 #### Function hoisting ->
 
```
hoisted();

function hoisted(){
...
}
```
 
 Here, a variable hoisted is declared at the top of the scope and assigned a function value at the same time ->
 ```
var hoisted = function(){
....
}

hoisted();
``` 
 
 The same doesn't hold true for function expressons though.
 
 ```
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};
 ```
 
Compiation doesn't reserve memory space or anything for the variables / functions. It just creates a map with details of all the scopes and the variables associated with it.  


 
 
 
 
 


 
 
 
 
 
 
