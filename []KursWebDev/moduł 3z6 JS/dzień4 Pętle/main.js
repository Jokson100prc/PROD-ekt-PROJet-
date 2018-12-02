// Pętla w pętli
const trzy = 3;
for (let i = 0; i < trzy; i++) {
    const ten = 10;
    for (let ii = 0; ii < ten; ii++) {
        console.log(`w grawis wrzucam ${i} oraz ${ii}, mnożę je przez siebie a tosięrówna ${i*ii}`)
    }
};


// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`zmienna i czyli ${i} pomnożona przezzmienną j czyli ${j} da wynik ${i*j}`)
//     }
// };



// Pętla na tablicy

const arr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Przykład1 wyświetlamy wiek użytkownika

const usersAge = [19, 18, 45, 32, 48, 57, 23, 99, 101];

for (let i = 0; i < usersAge.length; i++) {
    console.log(`Urzytkownik o indeksie ${i} jest w wieku ${usersAge[i]}`)
}


//  Przykład2 - obliczmy wiek użytkownika

// const usersDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
// const currentYear = 2018;

// for (let i = 0; i < usersDateBirth.length; i++) {
//     const age = currentYear - usersDateBirth[i];
//     console.log(age);
// }


// for (let i = 0; i < usersDateBirth.length; i++) {
//  const userAge = currentYear - usersDateBirth[i];
//  // console.log(userAge);
//  console.log(`wiek użytkownika numer ${i + 1} to ${userAge}`);
// }

//  Przykład3 - for + instrukcja warunkowe alert

const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];


for (let i = 0; i < guest.length; i++) {
    if (guest[i] === 'programista') {
        console.log("siema Panie kochany, witamy w boordeloo, nie gadamy o kodzie z hostessami(bo się nauczą i oddejdą z pracy)");
    } else if (guest[i] === 'polityk') {
        console.log('spiepszaj dziadu');
    } else {
        console.log(`Witamy szanowanego Pana ${guest[i]} w naszych skromnych progach`);
    }
};

// for (let i = 0; i < guest.length; i++) {

//     if (guest[i] === "programista") {
//         console.log("przepraszam nie ma już miejsce (nie wpuszczać, (programiści to nudziarze - tylko nie mówić) ")
//     } else if (guest[i] === "polityk") {
//         console.log("Ojej jaka szkoda, nie ma już miejsc (po żadnym pozorem nie wpuszczać! Zepsują każdą imprezę)");
//     } else {
//         console.log("witamy Panie " + guest[i] + ", zapraszamy!");
//     }

// }

// PĘTLA FOR - OF (ES6)


const mestres = ["Pastinha", "Bimba", "João Grande", "João Pqueno", "Itapua", "Acordeon", "Boca Rica"]

for (const mestre of mestres) {
    console.log(mestre);
};

// const colors = ["red", "green", "black", "yellow", "white", "gold", "silver", "brown"]

// for (const color of colors) {
//     console.log("mój ulubiony kolor to: " + i);
// }