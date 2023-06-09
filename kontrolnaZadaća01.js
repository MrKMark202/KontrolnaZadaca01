
//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100

function neprarni () {
    for(let i = 0; i <= 100; i++) {
        if(i%2!=0) {
            console.log(i);
        }
    }

};
neprarni();


//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 

function doba (broj) {
    switch(broj) {
        case 1:
            console.log("Jesen");
            break;
        case 2:
            console.log("Zima")
            break;
        case 3:
            console.log("Prolječe")
            break;
        case 4: 
            console.log("Ljeto");
            break;
    }
};

console.log(doba(2));


//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)

function strig (string) {
    let temp_string = "";
    let broj=0;
    for(let i=string.length -1; i >= 0; i--) {
        temp_string += string[i];
        broj++;
    }
    console.log("Broj karaktera skupa sa razlomkom iznosi: ",broj);
    return temp_string;
}

console.log(strig("JavaScript je dobar jezik"));


//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu

const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
//INPUT: somePeople
//OUTPUT: "Stroustrup"
/*
function vrati (peopleYouShouldKnow) {
    let broj=0;
    peopleYouShouldKnow.forEach(e => {
        broj = e.Donald.lenght;
        if(broj < e.Bjarne.lenght)
        console.log(broj);
    });
};

vrati();
*/

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]
/*
let brojevi = [2, 6, 345, 74, 3, 16, 15];

function neprost (brojevi) {
    for(let i=0; i=brojevi.length; i++) {
        
    }
};
*/
//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]

function velikaslova (string) {
    for(let i=0; i<string.length; i++) {
        tempi_string = "";
        tempi_string = string.toUpperCase();
        console.log(tempi_string);
    }
};

velikaslova("Banana");



//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];

function vrati (someEvents,broj) {
    someEvents.forEach(e => {
        if(e.measuredTemperature < broj) {
            return true;
        }
        else {
            return false;
        }
    });
}

console.log(vrati(45.0));

//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
