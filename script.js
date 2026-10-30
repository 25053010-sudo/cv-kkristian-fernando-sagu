function gantiTab(namaTab) {
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('aktif'));
    event.currentTarget.classList.add('aktif');

    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('aktif'));
    document.getElementById(namaTab).classList.add('aktif');

    let pertama = document.getElementById(namaTab).querySelector('.sub-item');
    if (pertama) pertama.click();
}

function tampilKonten(namaIsi) {
    let parent = event.currentTarget.parentElement;
    parent.querySelectorAll('.sub-item').forEach(i => i.classList.remove('aktif'));
    event.currentTarget.classList.add('aktif');

    document.querySelectorAll('.isi').forEach(i => i.classList.remove('aktif'));
    document.getElementById(namaIsi).classList.add('aktif');
}

function kembaliKeAtas() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

// Muncul saat di-scroll ke bawah, hilang di atas
window.onscroll = function () {
    let tombol = document.getElementById('btnKembali');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        tombol.style.display = 'block';
    } else {
        tombol.style.display = 'none';
    }
};