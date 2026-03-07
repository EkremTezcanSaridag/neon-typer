var kelimeinterval;
var hareketinterval;

var kombo = 0;
var maxCombo = 0;
var sonHizArtisi = 0;
var spawnHizi = 3000;
var maxCan = 5;

var words = [
    "ev", "elma", "evet", "araba", "masa", "kitap", "kalem", "defter", "bilgisayar", "telefon",
    "bardak", "sandalye", "kapı", "pencere", "oda", "mutfak", "banyo", "yatak", "koltuk", "sehpa",
    "halı", "perde", "ayna", "saat", "lamba", "çanta", "cüzdan", "anahtar", "gözlük", "şapka",
    "elbise", "pantolon", "gömlek", "tişört", "ayakkabı", "çorap", "kemer", "atkı", "eldiven", "şemsiye",
    "tabak", "çatal", "kaşık", "bıçak", "tencere", "tava", "fırın", "buzdolabı", "çamaşır", "bulaşık",
    "sabun", "şampuan", "diş", "fırça", "macun", "havlu", "tuvalet", "kağıt", "çöp", "kova",
    "süpürge", "faraş", "deterjan", "bez", "pas", "paspas", "ütü", "mikrodalga", "kamera",
    "hoparlör", "kulaklık", "fare", "klavye", "monitör", "yazıcı", "tarayıcı", "projektör", "modem", "router",
    "harddisk", "usb", "bellek", "pil", "şarj", "adaptör", "kablo", "priz", "ampul", "led",
    "fener", "mum", "kibrit", "çakmak", "gazete", "dergi", "roman", "hikaye", "şiir", "mektup",
    "zarf", "pul", "fotoğraf", "resim", "tablo", "heykel", "vazo", "çiçek", "bitki", "saksı",
    "su", "hava", "güneş", "ay", "yıldız", "bulut", "yağmur", "kar", "rüzgar", "şimşek",
    "deniz", "göl", "nehir", "dağ", "orman", "ağaç", "yaprak", "çimen", "taş", "kaya",
    "kum", "toprak", "yol", "cadde", "sokak", "meydan", "park", "bahçe", "tarla", "köy",
    "şehir", "ülke", "dünya", "insan", "kadın", "erkek", "çocuk", "bebek", "aile", "anne",
    "baba", "kardeş", "dede", "nine", "arkadaş", "komşu", "öğrenci", "öğretmen", "doktor", "hemşire",
    "mühendis", "mimar", "işçi", "sanatçı", "sporcu", "şarkıcı", "oyuncu", "yazar", "gazeteci", "polis",
    "asker", "pilot", "kaptan", "aşçı", "garson", "berber", "terzi", "tamirci", "bahçıvan", "balıkçı",
    "avukat", "hakim", "eczacı", "veteriner", "dişçi", "psikolog", "ekonomist", "diplomat", "bakan", "başkan",
    "yoga", "meditasyon", "namaz", "oruç", "dua", "ibadet", "cami", "kilise", "müze", "galeri",
    "kütüphane", "okul", "üniversite", "hastane", "eczane", "banka", "otel", "restoran", "kafe", "sinema",
    "tiyatro", "stadyum", "havuz", "plaj", "pazar", "market", "bakkal", "kasap", "manav", "fırın",
    "köprü", "tünel", "baraj", "kanal", "şelale", "volkan", "sel", "yangın", "fırtına", "kasırga",
    "savaş", "barış", "özgürlük", "adalet", "demokrasi", "cumhuriyet", "sağlık", "hastalık", "ilaç", "tedavi",
    "ameliyat", "aşı", "vitamin", "protein", "yağ", "şeker", "tuz", "yemek", "içecek", "kahvaltı",
    "tatlı", "meyve", "sebze", "et", "tavuk", "balık", "süt", "peynir", "yoğurt", "ekmek",
    "pilav", "makarna", "çorba", "salata", "zeytin", "bal", "reçel", "yumurta", "baharat", "turşu",
    "çikolata", "dondurma", "pasta", "kurabiye", "kek", "bisküvi", "simit", "poğaça", "börek", "pide",
    "lahmacun", "döner", "köfte", "kebap", "pizza", "hamburger", "sandviç"
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
    kelimeinterval = setInterval(generateRandomWord, spawnHizi);
    hareketinterval = setInterval(hareket, 30);
}

window.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && startScreen.style.display !== "none") {
        oyunuBaslat();
    }
});

function generateRandomWord() {
    var randomSayi = getRandomNumber(0, words.length - 1);
    var secilenkelime = words[randomSayi];
    var yeniDiv = document.createElement("div");
    yeniDiv.classList.add("kelime");
    yeniDiv.style.left = getRandomNumber(0, 500) + "px";
    yeniDiv.style.top = "0px";
    yeniDiv.dataset.kelime = secilenkelime;

    var oran = Math.random();
    if (oran < 0.2) {
        yeniDiv.classList.add("bomba");
        yeniDiv.innerText = "💣 " + secilenkelime;
    } else if (oran < 0.3) {
        yeniDiv.classList.add("bonus");
        yeniDiv.innerText = "⭐ " + secilenkelime;
    } else {
        yeniDiv.innerText = secilenkelime;
    }

    document.getElementById("game-board").appendChild(yeniDiv);
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
    var silinecekler = [];

    for (var i = 0; i < aktifKelime.length; i++) {
        var yeniDiv = aktifKelime[i];
        var asilYükseklik = parseInt(yeniDiv.style.top) || 0;
        asilYükseklik += fallspeed;
        yeniDiv.style.top = asilYükseklik + "px";

        if (asilYükseklik > 580) {
            silinecekler.push(i);

            if (!yeniDiv.classList.contains("bomba")) {
                lives -= 1;
                cankismi();

                if (kombo > 0) {
                    komboMesajiGoster("💔 KOMBO BOZULDU!");
                }
                kombo = 0;
                document.getElementById("current-combo").innerText = kombo;

                document.getElementById("game-board").classList.add("shake");
                setTimeout(function () {
                    document.getElementById("game-board").classList.remove("shake");
                }, 400);

                playSes(new Audio('sounds/fallsound.mp3'));

                if (lives <= 0) {
                    oyunBitti();
                    return;
                }
            }

            var yazilanSuAn = İnputAlani.value.trim();
            if (yazilanSuAn !== "") {
                var halaVarMi = false;
                for (var k = 0; k < aktifKelime.length; k++) {
                    if (aktifKelime[k] !== yeniDiv && aktifKelime[k].dataset.kelime.startsWith(yazilanSuAn)) {
                        halaVarMi = true;
                        break;
                    }
                }
                if (!halaVarMi) İnputAlani.value = "";
            }

            yeniDiv.remove();
        }
    }

    for (var j = silinecekler.length - 1; j >= 0; j--) {
        aktifKelime.splice(silinecekler[j], 1);
    }
}

İnputAlani.addEventListener("input", function () {
    var yazilanKelime = İnputAlani.value.trim();

    for (var i = 0; i < aktifKelime.length; i++) {
        var kontrolKelime = aktifKelime[i].dataset.kelime;

        if (kontrolKelime === yazilanKelime) {
            var rect = aktifKelime[i].getBoundingClientRect();
            var boardRect = document.getElementById("game-board").getBoundingClientRect();
            var x = rect.left - boardRect.left + rect.width / 2;
            var y = rect.top - boardRect.top + rect.height / 2;

            var bombaMi = aktifKelime[i].classList.contains("bomba");
            var altinMi = aktifKelime[i].classList.contains("bonus");

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

                document.getElementById("game-board").classList.add("shake");
                setTimeout(function () {
                    document.getElementById("game-board").classList.remove("shake");
                }, 400);

                if (lives <= 0) oyunBitti();
                break;
            }

            if (altinMi) {
                if (lives < maxCan) {
                    lives += 1;
                    cankismi();
                    komboMesajiGoster("⭐ ALTIN KELİME! +1 CAN!");
                } else {
                    scores += 50;
                    document.getElementById("current-score").innerText = scores;
                    komboMesajiGoster("⭐ ALTIN KELİME! +50 PUAN!");
                }
                var bonusAudio = document.getElementById("bonus");
                if (bonusAudio) playSes(bonusAudio);
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

            playSes(document.getElementById("shoot"));

            if (scores - sonHizArtisi >= 50) {
                fallspeed += 1;
                spawnHizi = Math.max(800, spawnHizi - 300);
                clearInterval(kelimeinterval);
                kelimeinterval = setInterval(generateRandomWord, spawnHizi);
                sonHizArtisi = scores;
                komboMesajiGoster("⚡ HIZ ARTTI!");
            }

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
    audioEl.play().catch(function (e) { console.log("ses hatası:", e); });
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