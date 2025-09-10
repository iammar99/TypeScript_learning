# Welcome to Typescript Repo !

## Table of Contents

- [Welcome to Typescript Repo !](#welcome-to-typescript-repo-)
  - [Table of Contents](#table-of-contents)
  - [What is TypeScript ?](#what-is-typescript-)
  - [Setting up environment ?](#setting-up-environment-)
  - [First typescript project](#first-typescript-project)
  - [Configuring typescript project](#configuring-typescript-project)
  - [Built-in Data types](#built-in-data-types)
  - [Type Aliases](#type-aliases)
  - [Union Type](#union-type)
    - [Narrowing](#narrowing)
  - [Intersection Type](#intersection-type)
  - [Literal Type](#literal-type)
  - [Nullable Type](#nullable-type)
  - [Optional Chaining](#optional-chaining)

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

## Type Aliases
It help to avoid repeatdly defining type while creating objects. It is some thing similar to Class  

## Union Type
It helps when value can be of different type we can use "|" opertaor for it

### Narrowing 
It is a concept when we narrow down the code you may have a look at code to understand this


## Intersection Type
It is used to combine to types. Look code for better understanding.

## Literal Type
It is when we define specific value to a variable.

## Nullable Type
It is a concept when we create a function and take argument which should not be null it would  be give an error so we narrow it down to avoid error

## Optional Chaining

It uses **?.** operator to make our code efficient instead of writting if condition when we don't know the type