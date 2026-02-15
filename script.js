// Roller: Kabileye sızan Tarikat Lideri dahil
const roller = ["Şifacı", "Bekçi", "Avcı", "İzci", "Fitneci", "Meczup", "Tarikat Lideri"];

let oyuncular = [
    { id: 1, nick: "Alp", baloncuk: "???" },
    { id: 2, nick: "Börü", baloncuk: "???" },
    { id: 3, nick: "Asena", baloncuk: "???" },
    { id: 4, nick: "Tunga", baloncuk: "???" }
];

function obayiKur() {
    const meydan = document.getElementById('oba-meydani');
    meydan.innerHTML = '';
    oyuncular.forEach(o => {
        meydan.innerHTML += `
            <div class="cadir-alani">
                <div class="baloncuk" id="balon-${o.id}">${o.baloncuk}</div>
                <div class="cadir-ikonu">⛺</div>
                <div class="nick">${o.nick}</div>
            </div>`;
    });
}

function oyunuBaslat() {
    // Rastgele Lider Seçimi
    const lider = oyuncular[Math.floor(Math.random() * oyuncular.length)];
    document.getElementById('lider-ismi').innerText = lider.nick;
    
    document.getElementById('olay-gunlugu').innerHTML = 
        "<p style='color: #ff4d4d;'>Oyun başladı! Dikkat edin, Tarikat Lideri aranızda...</p>";
    document.getElementById('start-btn').style.display = 'none';
}

function baloncukGuncelle() {
    const val = document.getElementById('baloncuk-input').value.toUpperCase();
    if(val.length <= 3) {
        // Örnek olarak 1. oyuncunun balonunu günceller
        document.getElementById('balon-1').innerText = val || "???";
    }
}

// Oyunu başlatmak için meydanı çiz
obayiKur();