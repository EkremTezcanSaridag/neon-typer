var words = ["ev","elma" ,"evet", "araba", "masa", "kitap", "kalem", "defter", "bilgisayar", "telefon", "bardak", "sandalye", "kapı"]

function rastgele(min, max) {
    var rastgelesayi = Math.floor(Math.random() * (max-min) + min);
    
    console.log(rastgelesayi);
    return rastgelesayi;
}
rastgele(5, 10);


// words dizisinden rastgele kelime seç 
function KelimeYarat(){

}