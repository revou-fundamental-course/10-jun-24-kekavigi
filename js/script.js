function init_page() {
    // set tampilan awal situs: hide info konversi suhu f ke c
    document.getElementById("info_f_ke_c").style = "display:none"
}
function hitung() {
    // konversi suhu asal dari ke suhu tuju
    var value = document.getElementById('asal').value;
    if (value == null || value == "") {
        // jangan tampilkan saat input kosong
        document.getElementById("tuju").textContent = '...';
        document.getElementById("langkah").textContent = '...';
        return
    }
    // hitung hasil konversi
    var unit = document.getElementById('unit-asal').textContent;
    result = unit == '\u00B0C' ? (value * 9 / 5) + 32 : (value - 32) * 5 / 9;
    result = Math.round((result + Number.EPSILON) * 1000) / 1000;
    // teks yang perlu ditampilkan di perhitungan
    if (unit == '\u00B0C') {
        langkah = `${value}${unit} * 9/5 + 32 = ${result}\u00B0F`
    }
    else {
        langkah = `(${value}${unit} - 32) * 5/9 = ${result}\u00B0C`
    }
    // tulis hasil
    document.getElementById("tuju").textContent = result
    document.getElementById("langkah").textContent = langkah
}
function tukar() {
    // tukar unit konversi
    var tmp = document.getElementById("unit-tuju").textContent
    document.getElementById('asal').value = document.getElementById("tuju").textContent;
    document.getElementById('unit-asal').textContent = tmp;
    document.getElementById("unit-tuju").textContent = tmp == '\u00B0C' ? '\u00B0F' : '\u00B0C';
    // tukar info yang perlu disampaikan dan disembunyikan
    document.getElementById("info_c_ke_f").style = tmp == '\u00B0C' ? '' : 'display:none'
    document.getElementById("info_f_ke_c").style = tmp == '\u00B0C' ? 'display:none' : ''
    hitung()
}
function hapus() {
    // hapus input
    document.getElementById('asal').value = null;
    hitung()
}