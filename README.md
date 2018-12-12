# type-of-a-triangle
App that determines the type of a triangle from the lengths of sides

## Install npm packages

Clone this repository and run 

```bash
npm install
```

## Run dev server

```bash
npm run dev
```

## Run tests

```bash
npm run test
```

## Build for production

> All tests need to be passed before build 

```bash
npm run build
```

## Usage

Type in the side's lengths of a triangle in SIDE A, SIDE B and SIDE C input fields. In the blue box appears the type of the triangle and a representation of triangle with the same triangle type. 

## Testing on the following browsers:

Google Chrome (latest, previous)

Mozilla Firefox (latest, previous)

Apple Safari (latest, previous)

Microsoft Edge (latest, previous)

IE11

## Design decisions

For the interface engine I used React, is the hotest tool for building user interfaces at the moment and it is really powerful and easy to use.
I wrote the code in ECMAScript 6 because that is the future of Javascript.
To ensure code readabilty and syntax ingegrity I used ESLint for linting.
I added Babel compiler so the ES6 is complied to ES5 for wider browser compatibility. For package management and building the project I used npm and webpack. For tesint I used jest 'zero-configuration' Javascript testing tool. I used Less instead of pure CSS, because Less > CSS.
> I chose the above described setup for the project because I work with similar setup everyday day and I think it makes easy and fast to build project and keeps the code future prof and easy to maintain

# I divided the structure of the app in 2:

1. Components - UI - React components

2. Classes - non UI - Calculation / helpers / formaters / data collectors

## Implementation

I styled the app to be the same as Tradeshift UI. I used components from Tradeshift UI. It's a rellay awesome tool.

I used Bootstrap for responsive grid.

React components:
1. Header - just UI
2. TriangleDraw - For showing result. By type of triangle draws an ilustration of the triangle with the type name
3. FormField - Input field with error handling
2. Form - Generating the form with the 3 input fiels and the triangle draw with the result and error handling

Classes:
1. Formatter - Just to make string / numbers nicer for UI
2. Triangle - Triangle calculation and side length validation

## Demo

https://zoli-fischer.github.io/type-of-a-triangle/
