/* CO TO JEST ZMIENNA */
// Zmienne to sposób na zapisanie danych w pamięci, tak by móc te dane wykorzystać w programie.


/*  ATRYBUTY ZMIENNEJ W JS */
// - nazwa
// - miejsce w pamięci (prowadzi do niego identyfikator, którym jest nazwa)
// - wartość
// Możemy jeszcze dodać jeden atrybut, którym jest czas życia, który jest zależny od miejsca gdzie stworzona jest dana zmienna (globalna i lokalna)


/* CZY ZMIENNA MA TYP? Cze zmienna jest string, number, itd?*/
// W wielu językach tak, ale nie w JavaScript. W JavaScript typ ma wartość, któa jest przechowywana w zmiennej. Wraz z deklaracją nie podajemy typu zmiennej. Gdyby JS upodobnić do innych popularnych języków programowania to mogłoby to wyglądać tak:
// let float idUser = 76.2;
// Ale tak nie jest, a wygląda tak
let idUser = 76;
// Przy czym TYPY ISTNIEJĄ, ale są nadawane dynamicznie, czyli przez interpreter podczas wykonywania programu (mówimy o typowaniu dynamicznym). Pamiętajmy jednak, że to nie zmienna ma typ number tutaj a wartość. Zmienna tylko przechowuje wartośc.
// Operator typeof zwraca nam informacje o typie wartości przechowywanej w zmiennej

/* NAZWA ZMIENNEJ */
// - po angielsku
// - niech oznacza to czym jest / do czego jest / czym się zajmuje
// - notacja wielbłądzia (rekomendowane) notacjaWielbladzie
// - słowa zarezerowane (jedno słowo - lista poniżej)
// - brak spacji, brak myślnika, cyfra nie może być na początku (moze być dalej)
// - może z duzej litery (wielkość liter znaczenie), podkreślenia, znaku $

/* DEKLARACJA ZMIENNEJ I PRZYPISANIE WARTOŚCI (DWIE INSTRUKCJE) */

// Deklaracja - sama deklaracja oznacza przypisania do zmiennej undefined
let firstLetterUserName;
// Przypisania wartości do zmiennej
firstLetterUserName = "J";
// Najczęściej jednocześnie deklarujemy i przypisujemy (tworzymy) wartość
let userSurname = "Smith";
// dekracja i przypisanie podczas, której tworzymy funkcję
// let showUserName = function () { console.log(userSurname) };

// DEKLAROWANIE WIELU ZMIENNYCH
let name, age, address;
let position = [200, 100],
    score = null,
    time = 20.2,
    ipAddress;
const firstUser = "Ania",
    secondUser = "Tomasz";

/* ZMIENNE STAŁE I ZMIENNE ZMIENNE */

// const - zmienna stała (stała)
// let - zmienna
// var - zmienna przed ES6 (ciągle można używać)

// Tworząć zmienną wybierz const, chyba, że zawartosć (wartość przypisana), będzie w trakcie działania programu zamienniona inną wartością.
// Różnice
//  - let i const można zadeklarować tylko raz, var (bez sensu) pozawala deklarować wielokrotnie
//  - do "const" nie mozna przypisać nowej wartości (można modyfikować obiekty, które są przypisane)

let example1 = 200;
example1 = example1 + 1;
example1++;

const example2 = 200;
// example2 = example2 + 1;
// example2++;
// Kopiowana wartość. Tworzy się nowa, to nie jest ta sama wartość mimo, że jest identyczna.
// let example3 = example2;

// CONST
const arrayExample = [1];
// Przypisanie nowego obiektu! - nie jest możliwe
// arrayExample = [1, 2];
// Modyfikacje w obiekcie juz przypisanym - jak najbardziej są możliwe
arrayExample[1] = 2;
// console.log(arrayExample);

// Bardzo ważny jest zakres (scope) zmiennych, ale o tym sobie jeszcze powiemy.

// Obiekt globalny (window) z var. Z let i const nie
var globalProperty1 = "za pomocą var";
let globalProperty2 = "za pomocą let";
const globalProperty3 = "za pomocą const";
// console.log(window.globalProperty1);

// Hoistowana var, let i const
// console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);
// var varVariable = 1;
// let letVariable = 1;
// const constVariable = 1;

// Jeśli program nie będzie zmieniać imienia użytkownika
const userName = "Adam";
// Jeśli program będzie zmieniał wynik
let points = 200;
// Zmiennej var możemy używać, ale bardzo rzadko ma to sens
var userLastLoginDate = "15.10.2018";

// LISTA SŁÓW ZAREZERWOWANYCH
/* 
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
 */