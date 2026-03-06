var words = [
    "ev", "elma", "evet", "araba", "masa", "kitap", "kalem", "defter", "bilgisayar", "telefon",
    "bardak", "sandalye", "kapı", "pencere", "oda", "mutfak", "banyo", "yatak", "koltuk", "sehpa",
    "halı", "perde", "ayna", "saat", "lamba", "çanta", "cüzdan", "anahtar", "gözlük", "şapka",
    "elbise", "pantolon", "gömlek", "tişört", "ayakkabı", "çorap", "kemer", "atkı", "eldiven", "şemsiye",
    "tabak", "çatal", "kaşık", "bıçak", "tencere", "tava", "fırın", "buzdolabı", "çamaşır", "bulaşık",
    "sabun", "şampuan", "diş", "fırça", "macun", "havlu", "tuvalet", "kağıt", "çöp", "kova",
    "süpürge", "faraş", "deterjan", "bez", "kova", "pas", "paspas", "ütü", "ütü", "masası",
    "çamaşır", "makinesi", "bulaşık", "makinesi", "kurutma", "makinesi", "elektrik", "süpürgesi", "mikrodalga", "fırın",
    "tost", "makinesi", "çay", "makinesi", "kahve", "makinesi", "blender", "robot", "süpürge", "drone", "kamera",
    "hoparlör", "kulaklık", "fare", "klavye", "monitör", "yazıcı", "tarayıcı", "projektör", "modem", "router",
    "harddisk", "usb", "bellek", "hafıza", "kartı", "pil", "şarj", "cihazı", "adaptör", "kablo",
    "uzatma", "kablosu", "priz", "anahtar", "sigorta", "ampul", "led", "ışık", "fener", "mum",
    "kibrit", "çakmak", "gazete", "dergi", "roman", "hikaye", "şiir", "mektup", "zarf", "pul",
    "kartpostal", "fotoğraf", "resim", "tablo", "heykel", "vazo", "çiçek", "bitki", "saksı", "toprak",
    "su", "hava", "güneş", "ay", "yıldız", "bulut", "yağmur", "kar", "dolu", "rüzgar",
    "şimşek", "gökkuşağı", "deniz", "göl", "nehir", "dağ", "orman", "ağaç", "yaprak", "çimen",
    "taş", "kaya", "kum", "toprak", "çamur", "yol", "cadde", "sokak", "meydan", "park",
    "bahçe", "tarla", "çiftlik", "köy", "şehir", "kasaba", "ülke", "kıta", "dünya", "evren",
    "insan", "kadın", "erkek", "çocuk", "bebek", "aile", "anne", "baba", "kardeş", "abi",
    "abla", "dede", "nine", "torun", "akraba", "arkadaş", "komşu", "öğrenci", "öğretmen", "doktor",
    "hemşire", "mühendis", "mimar", "işçi", "memur", "sanatçı", "sporcu", "şarkıcı", "oyuncu", "yazar",
    "gazeteci", "polis", "asker", "itfaiyeci", "pilot", "kaptan", "aşçı", "garson", "berber", "kuaför",
    "terzi", "ayakkabıcı", "tamirci", "temizlikçi", "bahçıvan", "çoban", "balıkçı", "avcı", "çiftçi", "madenci",
    "bankacı", "muhasebeci", "avukat", "hakim", "savcı", "noter", "eczacı", "veteriner", "dişçi", "psikolog",
    "sosyolog", "filozof", "tarihçi", "coğrafyacı", "matematikçi", "fizikçi", "kimyager", "biyolog", "astronom", "arkeolog",
    "antropolog", "ekonomist", "siyasetçi", "diplomat", "bakan", "başkan", "kral", "kraliçe", "prens", "prenses",
    "imparator", "imparatoriçe", "sultan", "halife", "papa", "rahip", "imam", "hoca", "şeyh", "derviş",
    "budist", "hindu", "yahudi", "hristiyan", "müslüman", "ateist", "deist", "agnostik", "spiritüalist", "mistik",
    "yoga", "meditasyon", "namaz", "oruç", "hac", "zekat", "sadaka", "dua", "ibadet", "tapınak",
    "cami", "kilise", "sinagog", "manastır", "türbe", "mezarlık", "kabir", "anıt", "heykel", "müze",
    "galeri", "kütüphane", "okul", "üniversite", "hastane", "klinik", "eczane", "banka", "postane", "otel",
    "restoran", "kafe", "bar", "disko", "sinema", "tiyatro", "konser", "stadyum", "spor", "salonu",
    "havuz", "plaj", "piknik", "alanı", "kamp", "alanı", "orman", "parkı", "hayvanat", "bahçesi",
    "akvaryum", "lunapark", "alışveriş", "merkezi", "çarşı", "pazar", "market", "bakkal", "kasap", "manav",
    "fırın", "pastane", "kuruyemişçi", "aktar", "eczane", "optik", "saatçi", "kuyumcu", "terzi", "kuru",
    "temizlemeci", "ayakkabıcı", "tamirci", "oto", "servis", "benzin", "istasyonu", "otogar", "havalimanı", "liman",
    "tren", "garı", "metro", "istasyonu", "tramvay", "durağı", "otobüs", "durağı", "taksi", "durağı",
    "vapur", "iskelesi", "köprü", "tünel", "viyadük", "baraj", "gölet", "kanal", "kuyu", "çeşme",
    "şelale", "volkan", "deprem", "tsunami", "sel", "yangın", "fırtına", "kasırga", "hortum", "çığ",
    "heyelan", "erozyon", "kuraklık", "salgın", "hastalık", "kaza", "felaket", "savaş", "barış", "özgürlük",
    "adalet", "eşitlik", "demokrasi", "cumhuriyet", "monarşi", "diktatörlük", "sosyalizm", "kapitalizm", "komünizm", "faşizm",
    "milliyetçilik", "ırkçılık", "feminizm", "çevrecilik", "veganizm", "vejetaryenlik", "sağlık", "hastalık", "ilaç", "tedavi",
    "ameliyat", "aşı", "vitamin", "mineral", "protein", "karbonhidrat", "yağ", "şeker", "tuz", "su",
    "yemek", "içecek", "kahvaltı", "öğle", "yemeği", "akşam", "yemeği", "tatlı", "meyve", "sebze",
    "et", "tavuk", "balık", "süt", "peynir", "yoğurt", "ekmek", "pilav", "makarna", "çorba",
    "salata", "zeytin", "bal", "reçel", "tereyağı", "yumurta", "baharat", "sos", "turşu", "cips",
    "çikolata", "şekerleme", "dondurma", "pasta", "kurabiye", "kek", "bisküvi", "gofret", "kraker", "simit",
    "poğaça", "börek", "pide", "lahmacun", "döner", "köfte", "kebap", "pizza", "hamburger", "sandviç"
];

var aktifKelime = [];

var scores = 0;
var lives = 3;

var fallspeed = 2;
var İnputAlani = document.getElementById("input-area");
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", oyunuBaslat);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function oyunuBaslat() {
    // 1. Giriş ekranını gizle
    startScreen.style.display = "none";

    // 2. Input'a odaklan (Kullanıcı direkt yazabilsin)
    İnputAlani.focus();

    // 3. İlk kelimeyi oluştur
    generateRandomWord();

    // 4. Döngüleri Başlat (Motorları Çalıştır)
    setInterval(generateRandomWord, 3000);
    setInterval(hareket, 30);
}


// Enter tuşuna basınca da başlasın (Opsiyonel)
window.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && startScreen.style.display !== "none") {
        oyunuBaslat();
    }
});

function generateRandomWord() {
    var randomSayi = getRandomNumber(0, words.length) - 1;

    var secilenkelime = words[randomSayi];

    const yeniDiv = document.createElement("div");

    yeniDiv.innerText = secilenkelime;
    yeniDiv.classList.add("kelime");// css'de stil vermek için bunu ekliyoruz 

    yeniDiv.style.left = getRandomNumber(0, 500) + "px";

    yeniDiv.style.top = "0px"

    var gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(yeniDiv);
    aktifKelime.push(yeniDiv);


}


function cankismi() {
    var cankutusu = document.getElementById("can")

    cankutusu.innerHTML = "";


    for (var i = 0; i < lives; i++) {
        var yenikalp = document.createElement("span");
        yenikalp.classList.add("heart");
        yenikalp.innerText = "❤️";
        cankutusu.appendChild(yenikalp);
    }
}


cankismi();




function hareket() {
    aktifKelime.forEach(function (yeniDiv, index) {

        var asilYükseklik = parseInt(yeniDiv.style.top) || 0;


        asilYükseklik = asilYükseklik + fallspeed;
        yeniDiv.style.top = asilYükseklik + "px";


        if (asilYükseklik > 580) {
            lives -= 1;
            cankismi();


            var gameBoard = document.getElementById("game-board");
            gameBoard.classList.add("shake");
            setTimeout(function () {
                gameBoard.classList.remove("shake");
            }, 400);

            var düsses = new Audio('/sounds/fallsound.mp3')

            playSes(düsses)

            İnputAlani.value = "";

            // var canKutusu = document.getElementById("can");
            // if (canKutusu) {
            //     canKutusu.innerText = lives;
            // }



            yeniDiv.remove();
            aktifKelime.splice(index, 1);




            if (lives <= 0) {
                // 1. Önce sesi çal (ID'ye dikkat: gameover-sound)
                var gameoverAudio = document.getElementById("gameover");
                if (gameoverAudio) {
                    playSes(gameoverAudio);
                }

                // 2. Alert ve Yenilemeyi GECİKTİR (Ses duyulsun diye)
                setTimeout(function () {
                    alert("OYUN BİTTİ! Skorun: " + scores);
                    location.reload();
                }, 500); // 500ms bekle sonra yenile
            }
        }
    });
}






İnputAlani.addEventListener("input", function () {

    var yazilanKelime = İnputAlani.value.trim();

    for (var i = 0; i < aktifKelime.length; i++) {
        if (aktifKelime[i].innerText === yazilanKelime) {
            aktifKelime[i].remove(); // Remove the div from the DOM
            aktifKelime.splice(i, 1); // Remove the element from the array
            İnputAlani.value = ""; // Clear the input field

            scores += 10;
            document.getElementById("current-score").innerText = scores;
            var vurmeefekti = document.getElementById("shoot");
            playSes(vurmeefekti)


            if (scores % 50 === 0) {
                fallspeed += 2;
            }



            break;

        }
    }
})


// ---- AYARLAR ----
var soundEnabled = true;
var settingsOpen = false;

var settingsIcon = document.querySelector("#settings i");
var settingsPanel = document.querySelector(".settingspanel");
var soundToggle = document.querySelector(".sound-toggle");
var diffBtns = document.querySelectorAll(".farklibut");

// Panel aç/kapat
settingsIcon.addEventListener("click", function () {
    settingsOpen = !settingsOpen;
    settingsPanel.style.display = settingsOpen ? "block" : "none";
    settingsIcon.classList.toggle("open", settingsOpen);
});

// Panel dışına tıklayınca kapat
document.addEventListener("click", function (e) {
    if (settingsOpen && !settingsPanel.contains(e.target) && !e.target.closest("#settings")) {
        settingsOpen = false;
        settingsPanel.style.display = "none";
        settingsIcon.classList.remove("open");
    }
});

// Zorluk butonları
diffBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        diffBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        fallspeed = parseInt(btn.dataset.speed);
    });
});

// Ses toggle
soundToggle.addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    soundToggle.classList.toggle("muted", !soundEnabled);
    soundToggle.innerHTML = soundEnabled
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
});

// Ses çalma fonksiyonu
function playSes(audioEl) {
    if (!soundEnabled) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(e => console.log("ses hatası:", e));
}