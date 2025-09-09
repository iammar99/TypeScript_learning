# Welcome to Typescript Repo !

## Table of Contents

- [Welcome to Typescript Repo !](#welcome-to-typescript-repo-)
  - [Table of Contents](#table-of-contents)
  - [What is TypeScript ?](#what-is-typescript-)
  - [Setting up environment ?](#setting-up-environment-)
  - [First typescript project](#first-typescript-project)
  - [Configuring typescript project](#configuring-typescript-project)
  - [Built-in Data types](#built-in-data-types)

## What is TypeScript ?

Typescript is a sibbling of JavaScript, it's a superset of JavaScript, it means that it has all the features of JavaScript and more. It's a statically typed language, which means that it checks the types of the variables at compile time, not at runtime. This makes it easier to catch type-related errors early in the development process. It helps to improve the maintainability and scalability of the codebase. 

- Basically It is static typed programming language like Java, C# etc.
- You have to bit more disciplined writing code in typescript 
- Typescript is a good choice for large applications



## Setting up environment ?

run the command 

```
npm install -g typescript
```

to install typescript globally on your system.


run the command

```
tsc -v or npx tsc -v
```

to verify installation


## First typescript project

Whenever you compile a typescript file , it gets converted into a javascript file.
Extension to typescript file is **.ts**


You may look code to uderstand better



## Configuring typescript project

You may use following command to configure typescript project

```
npx tsc --init
```
There will be tsconfig.json


## Built-in Data types

- Boolean
    - Same as javascript
- Number
    - Same As javascript
- String
    - Same As javascript
- Array
    - Same As javascript
- Any
    - A variable with this data type can have any kind of data but this is main reason we are using typescript to make it type strict
- Unknown
    - It is similar to Any but it is safest way to deal when you don't know the data type
- enum
    - An enum (short for enumeration) is a data type that consists of a set of named values, which are typically used to represent a collection of related constants. Enums are used to define a variable that can only take one of a set of predefined values, making the code more readable and reducing errors.
- tuple
    - It is a limited array in which data type of every element in the array has been defined.
- Functions
    - It is similar to javascript
- Objects
    - It is similar to javascript Objects but with strict type checking

