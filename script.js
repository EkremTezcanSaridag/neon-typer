/* ============================================================
   NEON TYPER - Vanilla JS oyun motoru
   ============================================================ */

// ---- INTERVAL YÖNETİMİ ----
var kelimeinterval = null;
var hareketinterval = null;
var sureInterval = null;

// ---- OYUN DURUMU ----
var oyunDurumu = "menu"; // menu | sayac | oyun | duraklat | bitti

var kombo = 0;
var maxCombo = 0;
var sonHizArtisi = 0;
var spawnHizi = 3000;
var baseSpawnHizi = 3000;
var fallspeed = 2;
var baseFallspeed = 2;
var maxCan = 5;
var maxKalkan = 3;

var secilenmod = "klasik";
var sureSecimi = 30;
var kalanSure = 0;

var toplamKelime = 0;
var oyunBaslangicZamani = 0;
var kalkan = 0;

var lives = 3;
var scores = 0;

var dogruHarf = 0;
var hataHarf = 0;
var oncekiDeger = "";

var aktifKelime = [];

// ---- SABİTLER ----
var LS_REKOR_KLASIK = "nt_rekor_klasik";
var LS_REKOR_HIZ = "nt_rekor_hiz";
var LS_REKORLAR = "nt_rekorlar";
var LS_SES = "nt_ses";

var kelimeTipleri = {
    normal: { sinif: "", ikon: "", renk: "#ff2a2a" },
    bomba: { sinif: "bomba", ikon: "💣 ", renk: "#ff6a00" },
    bonus: { sinif: "bonus", ikon: "⭐ ", renk: "#ffd700" },
    kalkan: { sinif: "kalkan", ikon: "🛡️ ", renk: "#00e5ff" },
    zaman: { sinif: "zaman", ikon: "⏱️ ", renk: "#00ff88" }
};

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
    "tiyatro", "stadyum", "havuz", "plaj", "pazar", "market", "bakkal", "kasap", "manav",
    "köprü", "tünel", "baraj", "kanal", "şelale", "volkan", "sel", "yangın", "fırtına", "kasırga",
    "savaş", "barış", "özgürlük", "adalet", "demokrasi", "cumhuriyet", "sağlık", "hastalık", "ilaç", "tedavi",
    "ameliyat", "aşı", "vitamin", "protein", "yağ", "şeker", "tuz", "yemek", "içecek", "kahvaltı",
    "tatlı", "meyve", "sebze", "et", "tavuk", "süt", "peynir", "yoğurt", "ekmek",
    "pilav", "makarna", "çorba", "salata", "zeytin", "bal", "reçel", "yumurta", "baharat", "turşu",
    "çikolata", "dondurma", "pasta", "kurabiye", "kek", "bisküvi", "simit", "poğaça", "börek", "pide",
    "lahmacun", "döner", "köfte", "kebap", "pizza", "hamburger", "sandviç"
];

// ---- DOM ----
var inputAlani = document.getElementById("input-area");
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start-btn");
var gameoverScreen = document.querySelector(".gameoverscreen");
var board = document.getElementById("game-board");

// ---- YARDIMCILAR ----
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seciliZorluk() {
    var aktif = document.querySelector(".zorluk-btn.active");
    return {
        speed: parseInt(aktif.dataset.speed),
        spawn: parseInt(aktif.dataset.spawn)
    };
}

// ---- REKOR & KAYIT SİSTEMİ ----
function rekorOku(mod) {
    var anahtar = mod === "hizli" ? LS_REKOR_HIZ : LS_REKOR_KLASIK;
    return parseInt(localStorage.getItem(anahtar) || "0", 10);
}

function rekorYaz(mod, deger) {
    var anahtar = mod === "hizli" ? LS_REKOR_HIZ : LS_REKOR_KLASIK;
    localStorage.setItem(anahtar, String(deger));
}

function rekorlariYukle() {
    try {
        var veri = JSON.parse(localStorage.getItem(LS_REKORLAR));
        return Array.isArray(veri) ? veri : [];
    } catch (e) {
        return [];
    }
}

function rekorEkle(kayit) {
    var liste = rekorlariYukle();
    liste.push(kayit);
    liste.sort(function (a, b) { return b.skor - a.skor; });
    liste = liste.slice(0, 10);
    localStorage.setItem(LS_REKORLAR, JSON.stringify(liste));
}

function rekorGosteriminiGuncelle() {
    document.getElementById("rekor-klasik").textContent = rekorOku("klasik");
    document.getElementById("rekor-hiz").textContent = rekorOku("hizli");
}

function rekorlariCiz() {
    var liste = rekorlariYukle();
    var div = document.getElementById("rekor-listesi");
    if (liste.length === 0) {
        div.innerHTML = '<p class="bos-kayıt">Henüz kayıt yok, ilk rekoru sen kır!</p>';
        return;
    }
    var html = '<table class="rekor-tablo"><tr><th>#</th><th>Skor</th><th>Mod</th><th>WPM</th><th>Tarih</th></tr>';
    for (var i = 0; i < liste.length; i++) {
        var k = liste[i];
        var modIkono = k.mod === "hizli" ? "⏱️" : "🏁";
        html += "<tr><td>" + (i + 1) + "</td><td>" + k.skor + "</td><td>" + modIkono +
            "</td><td>" + k.wpm + "</td><td>" + k.tarih + "</td></tr>";
    }
    html += "</table>";
    div.innerHTML = html;
}

// ---- SES ----
var soundEnabled = localStorage.getItem(LS_SES) !== "0";

function playSes(audioEl) {
    if (!soundEnabled || !audioEl) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(function () { });
}

function sesIkonunuGuncelle() {
    var soundToggle = document.querySelector(".sound-toggle");
    soundToggle.classList.toggle("muted", !soundEnabled);
    soundToggle.innerHTML = soundEnabled
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
}

// ---- HUD ----
function cankismi() {
    var canKutusu = document.getElementById("can");
    canKutusu.innerHTML = "";
    for (var i = 0; i < lives; i++) {
        var kalp = document.createElement("span");
        kalp.classList.add("heart");
        kalp.textContent = "❤️";
        canKutusu.appendChild(kalp);
    }
}

function hudGuncelle() {
    document.getElementById("current-score").textContent = scores;
    document.getElementById("current-combo").textContent = kombo;
    document.getElementById("kalkan-sayi").textContent = kalkan;
    cankismi();
}

// ---- OYUN AKIŞI ----
function intervalTemizle() {
    if (kelimeinterval) { clearInterval(kelimeinterval); kelimeinterval = null; }
    if (hareketinterval) { clearInterval(hareketinterval); hareketinterval = null; }
    if (sureInterval) { clearInterval(sureInterval); sureInterval = null; }
}

function tahtayiTemizle() {
    var eski = board.querySelectorAll(".kelime, .parcacik, .kombo-mesaj");
    for (var i = 0; i < eski.length; i++) eski[i].remove();
    aktifKelime = [];
}

function sifirlaOyunDurumu() {
    intervalTemizle();
    tahtayiTemizle();

    var zorluk = seciliZorluk();
    baseFallspeed = zorluk.speed;
    baseSpawnHizi = zorluk.spawn;
    fallspeed = baseFallspeed;
    spawnHizi = baseSpawnHizi;

    scores = 0;
    lives = 3;
    kombo = 0;
    maxCombo = 0;
    sonHizArtisi = 0;
    toplamKelime = 0;
    kalkan = 0;
    dogruHarf = 0;
    hataHarf = 0;
    oncekiDeger = "";
    inputAlani.value = "";

    document.getElementById("sure-goster-wrapper").style.display = "none";
    document.querySelector(".status").style.display = "";
    document.getElementById("yeni-rekor").style.display = "none";
    gameoverScreen.style.display = "none";
    hudGuncelle();
}

function oyunuBaslat() {
    if (oyunDurumu === "sayac" || oyunDurumu === "oyun" || oyunDurumu === "duraklat") return;

    sifirlaOyunDurumu();
    oyunDurumu = "sayac";
    startScreen.style.display = "none";

    var sayac = 3;
    var countdownDiv = document.getElementById("countdown");
    var countdownSayi = document.getElementById("countdown-sayi");
    countdownDiv.style.display = "block";
    countdownSayi.textContent = sayac;

    var sayacInterval = setInterval(function () {
        sayac -= 1;
        if (sayac > 0) {
            countdownSayi.textContent = sayac;
            countdownDiv.classList.remove("countdown-animate");
            void countdownDiv.offsetWidth;
            countdownDiv.classList.add("countdown-animate");
        } else {
            countdownDiv.style.display = "none";
            clearInterval(sayacInterval);
            oyunuAslindaBaslat();
        }
    }, 1000);
}

function oyunuAslindaBaslat() {
    oyunDurumu = "oyun";
    inputAlani.disabled = false;
    inputAlani.focus();
    oyunBaslangicZamani = Date.now();

    generateRandomWord();

    if (secilenmod === "hizli") {
        hizTestiBaslat();
    }

    kelimeinterval = setInterval(generateRandomWord, spawnHizi);
    hareketinterval = setInterval(hareket, 30);
}

function hizTestiBaslat() {
    kalanSure = sureSecimi;
    document.getElementById("sure-goster-wrapper").style.display = "block";
    sureGosterimiGuncelle();
    sureInterval = setInterval(function () {
        kalanSure -= 1;
        sureGosterimiGuncelle();
        if (kalanSure <= 0) oyunBitti();
    }, 1000);
}

function sureGosterimiGuncelle() {
    document.getElementById("sure-goster").textContent = Math.max(0, kalanSure) + " sn";
}

// ---- DURAKLAT / DEVAM ----
function duraklat() {
    if (oyunDurumu !== "oyun") return;
    oyunDurumu = "duraklat";
    intervalTemizle();
    document.getElementById("pause-screen").style.display = "flex";
    inputAlani.blur();
}

function devamEt() {
    if (oyunDurumu !== "duraklat") return;
    oyunDurumu = "oyun";
    document.getElementById("pause-screen").style.display = "none";
    inputAlani.focus();

    kelimeinterval = setInterval(generateRandomWord, spawnHizi);
    hareketinterval = setInterval(hareket, 30);
    if (secilenmod === "hizli") {
        sureInterval = setInterval(function () {
            kalanSure -= 1;
            sureGosterimiGuncelle();
            if (kalanSure <= 0) oyunBitti();
        }, 1000);
    }
}

// ---- GAME OVER ----
function oyunBitti() {
    if (oyunDurumu === "bitti") return;
    oyunDurumu = "bitti";
    intervalTemizle();
    inputAlani.disabled = true;

    var gecenDk = (Date.now() - oyunBaslangicZamani) / 60000;
    var wpm = gecenDk > 0.001 ? Math.round(toplamKelime / gecenDk) : 0;
    var toplamHarf = dogruHarf + hataHarf;
    var dogruluk = toplamHarf > 0 ? Math.round((dogruHarf / toplamHarf) * 100) : 100;

    document.getElementById("final-kelime").textContent = toplamKelime;
    document.getElementById("final-kombo").textContent = maxCombo;
    document.getElementById("final-wpm").textContent = wpm;
    document.getElementById("final-dogruluk").textContent = "%" + dogruluk;

    var eskiRekor = rekorOku(secilenmod);
    var yeniRekor = scores > eskiRekor && scores > 0;
    if (yeniRekor) rekorYaz(secilenmod, scores);

    rekorEkle({
        skor: scores,
        mod: secilenmod,
        wpm: wpm,
        tarih: new Date().toLocaleDateString("tr-TR")
    });

    playSes(document.getElementById("gameover"));

    setTimeout(function () {
        document.getElementById("final-score").textContent = scores;
        document.getElementById("yeni-rekor").style.display = yeniRekor ? "block" : "none";
        gameoverScreen.style.display = "flex";
        document.querySelector(".status").style.display = "none";
        document.getElementById("sure-goster-wrapper").style.display = "none";
        rekorGosteriminiGuncelle();
    }, 300);
}

function tekrarOyna() {
    if (oyunDurumu !== "bitti") return;
    oyunuBaslat();
}

function menuyeDon() {
    if (oyunDurumu !== "bitti") return;
    sifirlaOyunDurumu();
    oyunDurumu = "menu";
    inputAlani.disabled = false;
    startScreen.style.display = "flex";
    rekorGosteriminiGuncelle();
    rekorlariCiz();
    document.getElementById("rekor-listesi").style.display = "none";
}

// ---- KELİME ÜRETİMİ ----
function kelimeTipiSec() {
    var oran = Math.random();
    if (oran < 0.14) return "bomba";
    if (oran < 0.21) return "bonus";
    if (oran < 0.26) return "kalkan";
    if (oran < 0.30) return "zaman";
    return "normal";
}

function uygunXGetir(tahminiGenislik) {
    var maxSol = board.clientWidth - tahminiGenislik - 10;
    if (maxSol < 10) maxSol = 10;

    for (var deneme = 0; deneme < 30; deneme++) {
        var x = getRandomNumber(10, Math.max(10, maxSol));
        var cakisan = false;
        var mevcut = board.querySelectorAll(".kelime");
        for (var i = 0; i < mevcut.length; i++) {
            var m = mevcut[i];
            var mt = parseInt(m.style.top, 10) || 0;
            if (mt > 70) continue;
            var mx = parseInt(m.style.left, 10) || 0;
            var mw = m.offsetWidth || 100;
            if (Math.abs(mx - x) < (mw + tahminiGenislik) / 2 + 12) {
                cakisan = true;
                break;
            }
        }
        if (!cakisan) return x;
    }
    return getRandomNumber(10, Math.max(10, maxSol));
}

function kelimeCiz(div, vurgu) {
    var tip = div.dataset.tip || "normal";
    var cfg = kelimeTipleri[tip];
    var kelime = div.dataset.kelime;
    var govde = kelime;
    if (vurgu && vurgu.length > 0 && kelime.indexOf(vurgu) === 0) {
        govde = '<span class="yazilan">' + kelime.slice(0, vurgu.length) + "</span>" + kelime.slice(vurgu.length);
    }
    div.innerHTML = cfg.ikon + govde;
}

function generateRandomWord() {
    if (oyunDurumu !== "oyun") return;

    var secilenkelime = words[getRandomNumber(0, words.length - 1)];
    var tip = kelimeTipiSec();
    var cfg = kelimeTipleri[tip];

    var yeniDiv = document.createElement("div");
    yeniDiv.classList.add("kelime");
    if (cfg.sinif) yeniDiv.classList.add(cfg.sinif);
    yeniDiv.dataset.kelime = secilenkelime;
    yeniDiv.dataset.tip = tip;
    yeniDiv.style.top = "0px";

    var tahminiGenislik = secilenkelime.length * 13 + 60;
    yeniDiv.style.left = uygunXGetir(tahminiGenislik) + "px";

    kelimeCiz(yeniDiv, "");

    board.appendChild(yeniDiv);
    aktifKelime.push(yeniDiv);
}

// ---- HAREKET ----
function komboSifirla() {
    if (kombo > 0) komboMesajiGoster("💔 KOMBO BOZULDU!");
    kombo = 0;
    document.getElementById("current-combo").textContent = kombo;
}

function ekranSarsintisi() {
    board.classList.add("shake");
    setTimeout(function () { board.classList.remove("shake"); }, 400);
}

function hareket() {
    if (oyunDurumu !== "oyun") return;

    var boardYukseklik = board.clientHeight;
    var silinecekler = [];

    for (var i = 0; i < aktifKelime.length; i++) {
        var yeniDiv = aktifKelime[i];
        var yukseklik = (parseInt(yeniDiv.style.top, 10) || 0) + fallspeed;
        yeniDiv.style.top = yukseklik + "px";

        if (yukseklik <= boardYukseklik - 34) continue;

        silinecekler.push(i);
        var tip = yeniDiv.dataset.tip || "normal";

        if (tip === "normal") {
            if (kalkan > 0) {
                kalkan -= 1;
                document.getElementById("kalkan-sayi").textContent = kalkan;
                komboMesajiGoster("🛡️ KALKAN KORUDU!");
            } else {
                lives -= 1;
                cankismi();
                komboSifirla();
                ekranSarsintisi();
                playSes(new Audio("sounds/fallsound.mp3"));

                if (lives <= 0) {
                    yeniDiv.remove();
                    oyunBitti();
                    return;
                }
            }
        }

        // Düşen kelime input'taki yazıyı karşılıyorsa temizle
        var yazilanSuAn = inputAlani.value;
        if (yazilanSuAn !== "") {
            var halaVarMi = false;
            for (var k = 0; k < aktifKelime.length; k++) {
                if (aktifKelime[k] !== yeniDiv && aktifKelime[k].dataset.kelime.indexOf(yazilanSuAn) === 0) {
                    halaVarMi = true;
                    break;
                }
            }
            if (!halaVarMi) {
                inputAlani.value = "";
                oncekiDeger = "";
            }
        }

        yeniDiv.remove();
    }

    for (var j = silinecekler.length - 1; j >= 0; j--) {
        aktifKelime.splice(silinecekler[j], 1);
    }
}

// ---- INPUT ----
inputAlani.addEventListener("input", function () {
    if (oyunDurumu !== "oyun") {
        inputAlani.value = "";
        oncekiDeger = "";
        return;
    }

    var yazilanKelime = inputAlani.value;
    var yeniUzunluk = yazilanKelime.length;
    var eskiUzunluk = oncekiDeger.length;

    // Doğruluk takibi (sadece ekleme yapıldığında)
    if (yeniUzunluk > eskiUzunluk) {
        var uygun = false;
        for (var p = 0; p < aktifKelime.length; p++) {
            if (aktifKelime[p].dataset.kelime.indexOf(yazilanKelime) === 0) {
                uygun = true;
                break;
            }
        }
        if (uygun) dogruHarf += yeniUzunluk - eskiUzunluk;
        else hataHarf += yeniUzunluk - eskiUzunluk;
    }
    oncekiDeger = yazilanKelime;

    // Renklendirme
    for (var r = 0; r < aktifKelime.length; r++) {
        kelimeCiz(aktifKelime[r], yazilanKelime);
    }

    // Eşleşme kontrolü
    for (var i = 0; i < aktifKelime.length; i++) {
        if (aktifKelime[i].dataset.kelime !== yazilanKelime) continue;

        kelimeVuruldu(i, yazilanKelime);
        break;
    }
});

function kelimeVuruldu(index, yazilanKelime) {
    var hedef = aktifKelime[index];
    var tip = hedef.dataset.tip || "normal";
    var cfg = kelimeTipleri[tip];

    var rect = hedef.getBoundingClientRect();
    var boardRect = board.getBoundingClientRect();
    var x = rect.left - boardRect.left + rect.width / 2;
    var y = rect.top - boardRect.top + rect.height / 2;

    particleEfekti(x, y, cfg.renk);
    hedef.remove();
    aktifKelime.splice(index, 1);
    inputAlani.value = "";
    oncekiDeger = "";

    if (tip === "bomba") {
        lives = Math.max(0, lives - 1);
        scores = Math.max(0, scores - 20);
        kombo = 0;
        ekranSarsintisi();
        komboMesajiGoster("💣 BOMBA PATLADI! -20 PUAN!");
        hudGuncelle();
        if (lives <= 0) oyunBitti();
        return;
    }

    if (tip === "bonus") {
        if (lives < maxCan) {
            lives += 1;
            komboMesajiGoster("⭐ ALTIN KELİME! +1 CAN!");
        } else {
            scores += 50;
            komboMesajiGoster("⭐ ALTIN KELİME! +50 PUAN!");
        }
        playSes(document.getElementById("bonus"));
        hudGuncelle();
        return;
    }

    if (tip === "kalkan") {
        if (kalkan < maxKalkan) {
            kalkan += 1;
            komboMesajiGoster("🛡️ KALKAN KAZANILDI! (" + kalkan + "/" + maxKalkan + ")");
        } else {
            scores += 30;
            komboMesajiGoster("🛡️ KALKAN DOLU! +30 PUAN!");
        }
        scores += 10;
        playSes(document.getElementById("bonus"));
        hudGuncelle();
        return;
    }

    if (tip === "zaman") {
        if (secilenmod === "hizli") {
            kalanSure += 5;
            sureGosterimiGuncelle();
            komboMesajiGoster("⏱️ +5 SANİYE!");
        } else {
            scores += 30;
            komboMesajiGoster("⏱️ ZAMAN BONUSU! +30 PUAN!");
        }
        scores += 10;
        playSes(document.getElementById("bonus"));
        hudGuncelle();
        return;
    }

    // NORMAL KELİME
    var kombocarpan = 1;
    if (kombo >= 5) kombocarpan = 2;
    else if (kombo >= 3) kombocarpan = 1.5;

    kombo += 1;
    toplamKelime += 1;

    if (kombo === 3) komboMesajiGoster("🔥 KOMBO x3!");
    else if (kombo === 5) komboMesajiGoster("⚡ KOMBO x5! 2X PUAN!");
    else if (kombo === 10) komboMesajiGoster("💥 KOMBO x10! SEN ATEŞTENSİN!");
    else if (kombo === 25) komboMesajiGoster("👑 KOMBO x25! EFSANE!");

    scores += Math.floor(10 * kombocarpan);
    if (kombo > maxCombo) maxCombo = kombo;

    playSes(document.getElementById("shoot"));
    hudGuncelle();

    // Dinamik zorluk
    if (scores - sonHizArtisi >= 50) {
        sonHizArtisi = scores;
        fallspeed = Math.min(14, fallspeed + 1);
        spawnHizi = Math.max(700, spawnHizi - 250);
        if (kelimeinterval) clearInterval(kelimeinterval);
        kelimeinterval = setInterval(generateRandomWord, spawnHizi);
        komboMesajiGoster("⚡ HIZ ARTTI!");
    }
}

// ---- EFEKTLER ----
function particleEfekti(x, y, renk) {
    for (var i = 0; i < 12; i++) {
        var parcacik = document.createElement("div");
        parcacik.classList.add("parcacik");

        var angle = Math.random() * Math.PI * 2;
        var distance = Math.random() * 80 + 30;
        var dx = Math.cos(angle) * distance;
        var dy = Math.sin(angle) * distance;

        parcacik.style.left = x + "px";
        parcacik.style.top = y + "px";
        parcacik.style.background = renk;
        parcacik.style.boxShadow = "0 0 6px " + renk;
        parcacik.style.setProperty("--dx", dx + "px");
        parcacik.style.setProperty("--dy", dy + "px");

        board.appendChild(parcacik);

        setTimeout(function (el) {
            return function () { el.remove(); };
        }(parcacik), 600);
    }
}

function komboMesajiGoster(mesaj) {
    var div = document.createElement("div");
    div.classList.add("kombo-mesaj");
    div.textContent = mesaj;
    board.appendChild(div);
    setTimeout(function () { div.remove(); }, 1500);
}

// ---- AYARLAR ----
var settingsOpen = false;
var settingsIcon = document.querySelector("#settings i");
var settingsPanel = document.querySelector(".settingspanel");
var soundToggle = document.querySelector(".sound-toggle");

settingsIcon.addEventListener("click", function (e) {
    e.stopPropagation();
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

soundToggle.addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    localStorage.setItem(LS_SES, soundEnabled ? "1" : "0");
    sesIkonunuGuncelle();
});

// ---- ZORLUK / MOD / SÜRE SEÇİMİ ----
document.querySelectorAll(".zorluk-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".zorluk-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        fallspeed = parseInt(btn.dataset.speed);
        spawnHizi = parseInt(btn.dataset.spawn);
        baseFallspeed = fallspeed;
        baseSpawnHizi = spawnHizi;
    });
});

var modBtnlari = document.querySelectorAll(".klasik, .hizmodu");
modBtnlari.forEach(function (btn) {
    btn.addEventListener("click", function () {
        modBtnlari.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        if (btn.classList.contains("klasik")) {
            secilenmod = "klasik";
            document.querySelector(".suresecim").style.display = "none";
        } else {
            secilenmod = "hizli";
            document.querySelector(".suresecim").style.display = "flex";
        }
    });
});

document.querySelectorAll(".sure-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".sure-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        sureSecimi = parseInt(btn.dataset.sure);
    });
});

// ---- REKORLAR PANELİ ----
document.getElementById("rekorlar-btn").addEventListener("click", function () {
    var liste = document.getElementById("rekor-listesi");
    var acik = liste.style.display === "block";
    if (!acik) rekorlariCiz();
    liste.style.display = acik ? "none" : "block";
});

// ---- BUTONLAR ----
startBtn.addEventListener("click", oyunuBaslat);
document.getElementById("restart-btn").addEventListener("click", tekrarOyna);
document.getElementById("menu-btn").addEventListener("click", menuyeDon);

// ---- KLAVYE ----
window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (oyunDurumu === "oyun") duraklat();
        else if (oyunDurumu === "duraklat") devamEt();
        return;
    }

    if (e.key === "Enter") {
        if (oyunDurumu === "menu") oyunuBaslat();
        else if (oyunDurumu === "bitti") tekrarOyna();
        return;
    }

    // Oyun dışındayken yazılan harfler input'a düşmesin
    if (oyunDurumu !== "oyun" && oyunDurumu !== "duraklat") {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            var hedef = document.activeElement;
            if (hedef !== inputAlani && hedef !== startBtn && !(hedef && hedef.tagName === "BUTTON")) {
                inputAlani.focus();
            }
        }
    }
});

// ---- BAŞLANGIÇ ----
sesIkonunuGuncelle();
rekorGosteriminiGuncelle();
cankismi();
inputAlani.disabled = false;
