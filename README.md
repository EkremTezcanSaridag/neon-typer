# 🎹 Neon Typer

**Neon Typer**, HTML, CSS ve Vanilla JavaScript kullanılarak geliştirilen, refleks ve klavye hızı odaklı bir tarayıcı oyunudur. Herhangi bir framework kullanılmadan, tamamen DOM manipülasyonu mantığını kavramak amacıyla geliştirilmektedir.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

---

## 🚀 Özellikler

### Oyun Modları
- **🏁 Klasik Mod:** Sonsuz mod. 3 can biterse oyun sona erer.
- **⏱️ Hız Modu:** 30 sn / 1 dk / 2 dk süreli mod. Süre bitince oyun biter.

### Kelime Tipleri
- **💣 Bomba Kelime (%14):** Yazarsan -1 can ve -20 puan cezası alırsın.
- **⭐ Altın Kelime (%7):** Yazarsan +1 can kazanırsın, can doluysa +50 puan verir.
- **🛡️ Kalkan (%5):** Maksimum 3 adet biriktirilir. Düşen bir kelime canını götürüyorsa kalkan onu korur.
- **⏱️ Zaman (%4):** Hız Modunda +5 saniye, Klasik Modda +30 puan verir.

### Mekanikler
- **🔥 Kombo Sistemi:** Üst üste kelime vuruldukça kombo artar. x3 komboda 1.5x, x5 komboda 2x puan çarpanı devreye girer.
- **📈 Dinamik Zorluk:** Her 50 puanda kelimeler hızlanır ve daha sık gelir.
- **⌨️ Akıllı Input:** Yazdığın kelime hala ekrandaysa input temizlenmez, kelime harf harf yeşile döner.
- **❤️ Can Sistemi:** 3 canla başlanır, maksimum 5 cana çıkılabilir (altın kelimelerle).
- **🎯 Doğruluk İstatistiği:** Doğru/yanlış harf takibi ile oyun sonunda doğruluk yüzdesi gösterilir.

### İstatistik & Rekorlar
- **🏆 Mod Bazlı Rekor:** Klasik ve Hız modu için ayrı rekorlar localStorage'da saklanır.
- **📊 Skor Tablosu:** Son 10 oyunun skoru, modu, WPM'i ve tarihi tutulur.
- **🏆 Yeni Rekor Rozeti:** Rekor kırıldığında game over ekranında altın rozet gösterilir.

### Kontroller
- **ESC:** Oyunu duraklat / devam ettir
- **ENTER:** Menüde oyunu başlat, game over ekranında tekrar oyna

### Diğer
- **⚙️ Ayarlar Menüsü:** Ses açma/kapatma (tercih hatırlanır).
- **💥 Juice Efektleri:** Kelime tipine göre renkli parçacık patlaması, can düşünce ekran sarsıntısı.
- **📱 Responsive:** Mobil ve tablet ekranlarına uyumlu düzen.
- **🔒 Kelime Çakışması Önleme:** Aynı yatay alanda üst üste kelime spawn edilmez.

---

## 🎮 Nasıl Oynanır?

1. **OYUNA BAŞLA** butonuna bas (veya ENTER'a bas).
2. Mod, süre ve zorluk seç.
3. Ekranda yukarıdan aşağıya düşen kelimeleri gör.
4. Kelimeyi klavyeyle yaz, otomatik algılanır.
5. 💣 **Bomba kelimeleri yazmaktan kaçın!**
6. ⭐ **Altın kelimeleri vurarak can kazan!**
7. 🛡️ **Kalkan biriktir, düşen kelimelerden korun!**
8. Kombo yaparak puan çarpanını artır.
9. 3 can biterse veya süre dolarsa oyun sona erer.

---

## 🛠️ Teknolojiler

Bu projede **hiçbir kütüphane veya framework kullanılmamıştır.**

- **HTML5:** Semantik yapı.
- **CSS3:** Flexbox, Grid, Animasyonlar, Neon Glow efektleri, Media Query.
- **Vanilla JavaScript (ES6+):** DOM Manipülasyonu, Event Listener, setInterval, localStorage.

---

## 💻 Kurulum ve Çalıştırma

```bash
git clone https://github.com/EkremTezcanSaridag/neon-typer.git
cd neon-typer
# index.html dosyasını tarayıcıda aç
```

---

## 📁 Proje Yapısı

```
neon-typer/
├── index.html    # Arayüz
├── style.css     # Neon temalı stil dosyası
├── script.js     # Oyun motoru
└── sounds/       # Ses efektleri
```
