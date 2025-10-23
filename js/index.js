// import datepicker from 'js-datepicker';
import { HitungIMT, HitungHPL, HitungAMB } from '../js/HealthController.js';
// import datepicker from 'js-datepicker'

// ! IMT Logic

let inputBeratIMT = document.getElementById("beratUserIMT");
let inputTinggiIMT = document.getElementById("tinggiUserIMT");
let btnSubmitIMT = document.getElementById("submitIMT");
let btnResetIMT = document.getElementById("resetIMT");
let formIMT = document.getElementById("formIMT");

let outputBeratIMT = document.getElementById("outputBeratIMT");
let outputTinggiIMT = document.getElementById("outputTinggiIMT");
let outputHasilIMT = document.getElementById("outputHasilIMT");
let outputKategoriIMT = document.getElementById("outputKategoriIMT");
let outputSaranIMT = document.getElementById("outputSaranIMT");
let outputCard = document.getElementById("card-output");

function ResetIMT(params) {
    inputBeratIMT.value = '';
    inputTinggiIMT.value = '';

    outputBeratIMT.innerHTML = '';
    outputTinggiIMT.innerHTML = '';
    outputHasilIMT.innerHTML = '';
    outputKategoriIMT.innerHTML = '';
    outputSaranIMT.innerHTML = '';
    outputCard.classList.add('hidden');

    btnSubmitIMT.classList.remove('disabled');
    btnSubmitIMT.classList.remove('btn--disabled');
    btnSubmitIMT.classList.add('btn--primary');
    btnSubmitIMT.removeAttribute('disabled');
}

let labelRekomendasi = document.createElement('strong');


if (formIMT && btnSubmitIMT && btnResetIMT && inputBeratIMT && inputTinggiIMT) {
    formIMT.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    inputBeratIMT.addEventListener('keydown', function (e) {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    })

    inputTinggiIMT.addEventListener('keydown', function (e) {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    })

    btnResetIMT.addEventListener('click', () => {
        ResetIMT();
    })

    btnSubmitIMT.addEventListener('click', () => {
        if (!inputBeratIMT.value || isNaN(inputBeratIMT.value) || parseFloat(inputBeratIMT.value) <= 0) {
            alert("Berat badan harus berupa angka positif.");
            return;
        }
        if (!inputTinggiIMT.value || isNaN(inputTinggiIMT.value) || parseFloat(inputTinggiIMT.value) <= 0) {
            alert("Tinggi badan harus berupa angka positif.");
            return;
        }

        inputTinggiIMT.addEventListener('input', () => {

        })
        const userIMT = HitungIMT(inputBeratIMT.value, inputTinggiIMT.value);
        console.log(inputBeratIMT.value + inputTinggiIMT.value);

        // console.log(userIMT);

        btnSubmitIMT.setAttribute('disabled', 'disabled');
        btnSubmitIMT.classList.remove('btn--primary');
        btnSubmitIMT.classList.add('btn--disabled');
        outputCard.classList.remove('hidden');
        outputBeratIMT.innerHTML = inputBeratIMT.value;
        outputTinggiIMT.innerHTML = inputTinggiIMT.value;
        outputHasilIMT.innerHTML = userIMT.userIMT.toFixed(2);
        outputKategoriIMT.innerHTML = userIMT.kategoriIMT;
        labelRekomendasi.textContent = 'Rekomendasi Saran: '
        outputSaranIMT.appendChild(labelRekomendasi);
        outputSaranIMT.append(userIMT.saranIMT);
        // outputSaranIMT.textContent = userIMT.saranIMT
    })
}

// ! HPL Logic

let inputDateHPL = document.getElementById("dateUser");
let formHPL = document.getElementById("formHPL");
let btnSubmitHPL = document.getElementById("submitHPL");
let btnResetHPL = document.getElementById("resetHPL");
let outputHPL = document.getElementById("outputHPL");
let outputCardHPL = document.getElementById("card-output-hpl");

function ResetHPL() {
    inputDateHPL.value = '';

    outputHPL.innerHTML = '';
    outputCardHPL.classList.add('hidden');

    btnSubmitHPL.classList.remove('disabled');
    btnSubmitHPL.classList.remove('btn--disabled');
    btnSubmitHPL.classList.add('btn--primary');
    btnSubmitHPL.removeAttribute('disabled');
}

if (formHPL && btnSubmitHPL && btnResetHPL && inputDateHPL) {
    const today = new Date()

    const picker = datepicker('#dateUser', {
        startDay: 1,
        maxDate: today,
        customDays: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
        customMonths: [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],

        formatter: (input, date) => {
            const hari = date.toLocaleDateString('id-ID', { weekday: 'long' })
            const bulanText = date.toLocaleDateString('id-ID', { month: 'long' })
            const tanggal = date.getDate()
            const bulan = date.getMonth() + 1
            const tahun = date.getFullYear()

            input.value = `${hari}, ${bulanText} ${tanggal}, ${tahun}`

            input.dataset.tanggal = tanggal
            input.dataset.bulan = bulan
            input.dataset.tahun = tahun
            input.dataset.fullDate = input.value
        },
    })

    // const now = new Date();
    // const tanggalNow = now.getDate();
    // const bulanNow = now.getMonth();
    // const tahunNow = now.getFullYear();
    // let bulanStr;
    // if (bulanNow < 10) {
    //     bulanStr = `0${bulanNow}`
    // }

    // const getMaxDate = (`${tahunNow}-${bulanStr}-${tanggalNow}`)

    // inputDateHPL.max = getMaxDate;

    formHPL.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnResetHPL.addEventListener('click', () => {
        ResetHPL();
    })

    btnSubmitHPL.addEventListener('click', () => {
        if (!inputDateHPL.value) {
            alert("Tanggal harus dipilih.");
            return;
        }
        const dateSelected = new Date(inputDateHPL.value);
        const now = new Date();
        const tanggal = inputDateHPL.dataset.tanggal;
        const bulan = inputDateHPL.dataset.bulan;
        const tahun = inputDateHPL.dataset.tahun;

        if (dateSelected > now) {
            alert("Tanggal HPHT tidak boleh di masa depan.");
            return;
        }
        if (dateSelected.getFullYear() < 1900) {
            alert("Tanggal HPHT tidak boleh sebelum tahun 1900.");
            return;
        }

        const dateHPL = HitungHPL(tanggal, bulan, tahun);

        console.log(dateHPL);

        btnSubmitHPL.setAttribute('disabled', 'disabled');
        btnSubmitHPL.classList.remove('btn--primary');
        btnSubmitHPL.classList.add('btn--disabled');
        outputCardHPL.classList.remove('hidden');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        outputHPL.innerHTML = dateHPL.toLocaleDateString('id-ID', options);
    })
}

// ! AMB Logic

let optionKelamin = document.getElementById("kelaminUserAMB");
let inputBeratAMB = document.getElementById("beratUserAMB");
let inputTinggiAMB = document.getElementById("tinggiUserAMB");
let inputUmurAMB = document.getElementById("umurUserAMB");
let formAMB = document.getElementById("formAMB");
let btnSubmitAMB = document.getElementById("submitAMB");
let btnResetAMB = document.getElementById("resetAMB");

let outputKelaminAMB = document.getElementById("outputKelaminAMB");
let outputBeratAMB = document.getElementById("outputBeratAMB");
let outputTinggiAMB = document.getElementById("outputTinggiAMB");
let outputUmurAMB = document.getElementById("outputUmurAMB");
let outputAMB = document.getElementById("outputAMB");
let outputCardAMB = document.getElementById("card-output-amb");

function ResetAMB() {
    optionKelamin.selectedIndex = 0;
    inputBeratAMB.value = '';
    inputTinggiAMB.value = '';
    inputUmurAMB.value = '';

    outputKelaminAMB.innerHTML = '';
    outputBeratAMB.innerHTML = '';
    outputTinggiAMB.innerHTML = '';
    outputUmurAMB.innerHTML = '';
    outputAMB.innerHTML = '';
    outputCardAMB.classList.add('hidden');

    btnSubmitAMB.classList.remove('disabled');
    btnSubmitAMB.classList.remove('btn--disabled');
    btnSubmitAMB.classList.add('btn--primary');
    btnSubmitAMB.removeAttribute('disabled');
}

if (formAMB && btnSubmitAMB && btnResetAMB && inputBeratAMB && inputTinggiAMB && inputUmurAMB) {
    formAMB.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnResetAMB.addEventListener('click', () => {
        ResetAMB();
    })

    inputBeratAMB.addEventListener('keydown', function (e) {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    })

    inputTinggiAMB.addEventListener('keydown', function (e) {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    })

    inputUmurAMB.addEventListener('keydown', function (e) {
        if (['0', 'e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    })

    btnSubmitAMB.addEventListener('click', () => {
        console.log('test');

        if (!optionKelamin.value) {
            alert("Kelamin harus dipilih.");
            return;
        }
        if (!inputBeratAMB.value || isNaN(inputBeratAMB.value) || parseFloat(inputBeratAMB.value) <= 0) {
            alert("Berat badan harus berupa angka positif.");
            return;
        }
        if (!inputTinggiAMB.value || isNaN(inputTinggiAMB.value) || parseFloat(inputTinggiAMB.value) <= 0) {
            alert("Tinggi badan harus berupa angka positif.");
            return;
        }
        if (!inputUmurAMB.value || isNaN(inputUmurAMB.value) || parseFloat(inputUmurAMB.value) <= 0) {
            alert("Umur harus berupa angka positif.");
            return;
        }
        const kelamin = optionKelamin.value;
        const berat = inputBeratAMB.value;
        const tinggi = inputTinggiAMB.value;
        const umur = inputUmurAMB.value;

        const caloryUser = HitungAMB(kelamin, berat, tinggi, umur);

        console.log(caloryUser);

        btnSubmitAMB.setAttribute('disabled', 'disabled');
        btnSubmitAMB.classList.remove('btn--primary');
        btnSubmitAMB.classList.add('btn--disabled');
        outputCardAMB.classList.remove('hidden');
        outputKelaminAMB.innerHTML = kelamin.charAt(0).toUpperCase() + kelamin.slice(1);
        outputBeratAMB.innerHTML = berat;
        outputTinggiAMB.innerHTML = tinggi;
        outputUmurAMB.innerHTML = umur;
        outputAMB.innerHTML = caloryUser.toFixed(2) + ' kalori/hari';
    })
}
