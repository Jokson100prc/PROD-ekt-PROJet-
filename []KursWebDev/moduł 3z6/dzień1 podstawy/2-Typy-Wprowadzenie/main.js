// Typy danych - wprowadzenie
// Mamy 7 typów wbudowanych

// Typy proste
// string, number, boolean, undefined, null, symbol

// Typy referencyjne (obiekty)
// Obiekty: obiekt, funkcja, tablica ...

// Typ czyli co? Zbiór cech i zachowań przypisany do wartości zaliczanej do danego typu. Z punktu widzenia języka JS wartość "100" i 100 czy "true" i true, to zupełnie coś innego.

// typeof - operator, który zwraca informacje o typie
2 + 2
// String - łańcuch znaków
typeof "tekst";
typeof '222.222';
typeof `grawis`;
let userName = "Tymoteusz"
typeof userName;

// Number - liczba (bez podziału na integer, float, decimal)
typeof 222.222;
typeof 1000;
typeof 3.2e10;
typeof NaN;
typeof (2.2 * "a")

// Boolean - wartość logiczna
typeof true;
typeof false;
typeof (2 == 3);

// Undefined - niezdefiniowany (jedna wartość)
//najczesciej tworzone przez język 
typeof undefined;
let dateFirstLogin;
typeof dateFirstLogin;

// Null - nie posiada (jedna wartość)
// Najczęściej przez programistę
let userSecondName = null;
typeof null;

// Symbol (nowy typ w ES6)
typeof Symbol();

// Typ referencyjny - Obiekty
typeof {};
typeof [];
typeof
function () {};


// Przypisanie wartości i przypisanie referencji do obiektu

let primitiveType1 = 20;
let primitiveType2 = primitiveType1; //20

//Dwie zmienne które mają 20. Dwie wartości 20

primitiveType1 = 30;
console.log(primitiveType2);
// Ponieważ wartość zostałą skopiowana i jest nową wartością


let referenceValue1 = [1, 2, 3];
let referenceValue2 = referenceValue1;
//Tylko jeden obiekt

referenceValue1[3] = 4;
referenceValue2[4] = 10;

// console.log(referenceValue2);
//Obiekt nie została skopiowany a został przypisany jedynie link do miejsca w pamięci, w którym się znajduje.