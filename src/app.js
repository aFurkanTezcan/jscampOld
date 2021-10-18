console.log("Merhaba Kodlama.io");
//JS type safe değildir

let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
    

}
console.log(dolarDun)

const euroDun = 11.2

//constant belirtildiği için tekrar tanımlanamaz hata verir
console.log(euroDun)

//array dizi
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi","anan","baban"]

console.log(konutKredileri)
console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")