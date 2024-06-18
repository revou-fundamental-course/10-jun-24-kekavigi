function init_page() {
    document.getElementById("info_f_ke_c").style = "display:none"
}
function hitung() {
    var value = document.getElementById('asal').value;
    if (value == null || value == "") {
        document.getElementById("tuju").textContent = '...';
        document.getElementById("langkah").textContent = '...';
        return
    }
    var unit = document.getElementById('unit-asal').textContent;
    result = unit == '\u00B0C' ? (value * 9 / 5) + 32 : (value - 32) * 5 / 9;
    result = Math.round((result + Number.EPSILON) * 1000) / 1000;
    if (unit == '\u00B0C') {
        langkah = `${value}${unit} * 9/5 + 32 = ${result}\u00B0F`
    }
    else {
        langkah = `(${value}${unit} - 32) * 5/9 = ${result}\u00B0C`
    }
    document.getElementById("tuju").textContent = result
    document.getElementById("langkah").textContent = langkah
}
function tukar() {
    var tmp = document.getElementById("unit-tuju").textContent
    document.getElementById('asal').value = document.getElementById("tuju").textContent;
    document.getElementById('unit-asal').textContent = tmp;
    document.getElementById("unit-tuju").textContent = tmp == '\u00B0C' ? '\u00B0F' : '\u00B0C';
    document.getElementById("info_c_ke_f").style = tmp == '\u00B0C' ? '' : 'display:none'
    document.getElementById("info_f_ke_c").style = tmp == '\u00B0C' ? 'display:none' : ''
    hitung()
}
function hapus() {
    document.getElementById('asal').value = null;
    hitung()
}