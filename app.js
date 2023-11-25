
/* 1ci verilenler */
//nihadin verilenleri
let nc=78;
let nb=169;
//ayxanin verilenleri
let ac=92;
let ab=195;
//nihadin boy kutle indeksi
let nbk=nc/(nb*nb);
console.log(nbk);
//ayxanin boy kutle indeksi
let abk=ac/(ab*ab);
console.log(abk);
// nihadin ve ayxanin boy kutle indekslerinin muqayisesi
let comparison=(nbk>abk);
console.log(typeof comparison)
if(comparison){
    console.log("nihadin b-k indeksi ayxanin b-k indeksindan boyukdur")
} else{
    console.log("ayxanin b-k indeksi nihadin b-k indeksindan boyukdur")
}
/* ikinci verilenler */
// ramilin verilenleri
let rc=95;
let rb=188;
//turkanin verilenleri
let tc=85;
let tb=176;
// raminin boy kutle indeksi
let rbk=rc/(rb*rb);
console.log(rbk);
//turkanin boy kutle indeksi
let tbk=tc/(tb*tb);
console.log(tbk);
//boy kutle indekslerinin muqayisesi
let comparison1=(rbk>tbk);

console.log(typeof comparison1)
if(comparison1){
    console.log("raminin bk indeksi turkanin bk indeksinden boyukdur")
} 
else{
    console.log("turkanin bk indeksi raminin bk indeksinden boyukdur")
}

function tap(){

    
    var boy=document.getElementById("boy").value;
    var kilo=document.getElementById("kilo").value;

    var b = Number(boy);
    var k = Number(kilo);

    var ind = k / (b*b);

    if(ind<18)
        alert("ariq" + " " + ind.toFixed(2));
    else if(ind>=18 && ind<25)
        alert("orta" + " " +  ind.toFixed(2));
    else if(ind>=25 && ind<30)
        alert("kok" + " " + ind.toFixed(2));
    else if(ind>=30 && ind<40)
        alert("gombul" + " " +  ind.toFixed(2));
    else
        alert("sen gombulsan" + " " +  ind.toFixed(2));
}