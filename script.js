var kelimeinterval;
var hareketinterval;

var kombo = 0;
var maxCombo = 0;

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
    startScreen.style.display = "none";
    İnputAlani.focus();
    generateRandomWord();
    kelimeinterval = setInterval(generateRandomWord, 3000);
    hareketinterval = setInterval(hareket, 30);
}

window.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && startScreen.style.display !== "none") {
        oyunuBaslat();
    }
});

function generateRandomWord() {
    var randomSayi = getRandomNumber(0, words.length) - 1;
    var secilenkelime = words[randomSayi];
    const yeniDiv = document.createElement("div");
    yeniDiv.classList.add("kelime");
    yeniDiv.style.left = getRandomNumber(0, 500) + "px";
    yeniDiv.style.top = "0px";
    yeniDiv.dataset.kelime = secilenkelime;

    if (Math.random() < 0.2) {
        yeniDiv.classList.add("bomba");
        yeniDiv.innerText = "💣 " + secilenkelime;
    } else {
        yeniDiv.innerText = secilenkelime;
    }

    var gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(yeniDiv);
    aktifKelime.push(yeniDiv);
}

function cankismi() {
    var cankutusu = document.getElementById("can");
    cankutusu.innerHTML = "";
    for (var i = 0; i < lives; i++) {
        var yenikalp = document.createElement("span");
        yenikalp.classList.add("heart");
        yenikalp.innerText = "❤️";
        cankutusu.appendChild(yenikalp);
    }
}

cankismi();

function oyunBitti() {
    clearInterval(kelimeinterval);
    clearInterval(hareketinterval);

    var gameoverAudio = document.getElementById("gameover");
    if (gameoverAudio) playSes(gameoverAudio);

    setTimeout(function () {
        var gameoverScreen = document.querySelector(".gameoverscreen");
        gameoverScreen.style.display = "flex";
        document.getElementById("final-score").innerText = scores;
        document.querySelector(".status").style.display = "none";
        document.getElementById("restart-btn").addEventListener("click", function () {
            location.reload();
        });
    }, 300);
}

function hareket() {
    aktifKelime.forEach(function (yeniDiv, index) {
        var asilYükseklik = parseInt(yeniDiv.style.top) || 0;
        asilYükseklik = asilYükseklik + fallspeed;
        yeniDiv.style.top = asilYükseklik + "px";

        if (asilYükseklik > 580) {
            if (!yeniDiv.classList.contains("bomba")) {
                lives -= 1;
            }
            cankismi();

            if (kombo > 0) {
                komboMesajiGoster("💔 KOMBO BOZULDU!");
            }
            kombo = 0;
            document.getElementById("current-combo").innerText = kombo;

            var gameBoard = document.getElementById("game-board");
            gameBoard.classList.add("shake");
            setTimeout(function () {
                gameBoard.classList.remove("shake");
            }, 400);

            var düsses = new Audio('sounds/fallsound.mp3');
            playSes(düsses);

            İnputAlani.value = "";
            yeniDiv.remove();
            aktifKelime.splice(index, 1);

            if (lives <= 0) {
                oyunBitti();
            }
        }
    });
}

İnputAlani.addEventListener("input", function () {
    var yazilanKelime = İnputAlani.value.trim();

    for (var i = 0; i < aktifKelime.length; i++) {
        var kontrolKelime = aktifKelime[i].dataset.kelime || aktifKelime[i].innerText;

        if (kontrolKelime === yazilanKelime) {
            var rect = aktifKelime[i].getBoundingClientRect();
            var boardRect = document.getElementById("game-board").getBoundingClientRect();
            var x = rect.left - boardRect.left + rect.width / 2;
            var y = rect.top - boardRect.top + rect.height / 2;

            var bombaMi = aktifKelime[i].classList.contains("bomba");

            particleEfekti(x, y);
            aktifKelime[i].remove();
            aktifKelime.splice(i, 1);
            İnputAlani.value = "";

            if (bombaMi) {
                lives -= 1;
                cankismi();
                scores = Math.max(0, scores - 20);
                kombo = 0;
                document.getElementById("current-combo").innerText = kombo;
                document.getElementById("current-score").innerText = scores;
                komboMesajiGoster("💣 BOMBA PATLADI! -20 PUAN!");

                var gameBoard = document.getElementById("game-board");
                gameBoard.classList.add("shake");
                setTimeout(function () { gameBoard.classList.remove("shake"); }, 400);

                if (lives <= 0) oyunBitti();
                break;
            }

            var kombocarpan = 1;
            if (kombo >= 5) kombocarpan = 2;
            else if (kombo >= 3) kombocarpan = 1.5;

            kombo += 1;

            if (kombo === 3) komboMesajiGoster("🔥 KOMBO x3!");
            else if (kombo === 5) komboMesajiGoster("⚡ KOMBO x5! 2X PUAN!");

            scores += Math.floor(10 * kombocarpan);

            document.getElementById("current-combo").innerText = kombo;
            if (kombo > maxCombo) maxCombo = kombo;
            document.getElementById("current-score").innerText = scores;

            var vurmeefekti = document.getElementById("shoot");
            playSes(vurmeefekti);

            if (scores % 50 === 0) fallspeed += 2;

            break;
        }
    }
});

// ---- AYARLAR ----
var soundEnabled = true;
var settingsOpen = false;

var settingsIcon = document.querySelector("#settings i");
var settingsPanel = document.querySelector(".settingspanel");
var soundToggle = document.querySelector(".sound-toggle");
var diffBtns = document.querySelectorAll(".farklibut");

settingsIcon.addEventListener("click", function () {
    settingsOpen = !settingsOpen;
    settingsPanel.style.display = settingsOpen ? "block" : "none";
    settingsIcon.classList.toggle("open", settingsOpen);
});

document.addEventListener("click", function (e) {
    if (settingsOpen && !settingsPanel.contains(e.target) && !e.target.closest("#settings")) {
        settingsOpen = false;
        settingsPanel.style.display = "none";
        settingsIcon.classList.remove("open");
    }
});

diffBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        diffBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        fallspeed = parseInt(btn.dataset.speed);
    });
});

soundToggle.addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    soundToggle.classList.toggle("muted", !soundEnabled);
    soundToggle.innerHTML = soundEnabled
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
});

function playSes(audioEl) {
    if (!soundEnabled) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(e => console.log("ses hatası:", e));
}

function particleEfekti(x, y) {
    for (var i = 0; i < 12; i++) {
        var parcacik = document.createElement("div");
        parcacik.classList.add("parcacik");

        var angle = Math.random() * 360;
        var distance = Math.random() * 80 + 30;
        var dx = Math.cos(angle) * distance;
        var dy = Math.sin(angle) * distance;

        parcacik.style.left = x + "px";
        parcacik.style.top = y + "px";
        parcacik.style.setProperty("--dx", dx + "px");
        parcacik.style.setProperty("--dy", dy + "px");

        document.getElementById("game-board").appendChild(parcacik);

        setTimeout(function () {
            parcacik.remove();
        }, 600);
    }
}

function komboMesajiGoster(mesaj) {
    var div = document.createElement("div");
    div.classList.add("kombo-mesaj");
    div.innerText = mesaj;
    document.getElementById("game-board").appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 1500);
}