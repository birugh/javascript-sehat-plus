import { HitungIMT, HitungHPL, HitungAMB } from '../js/HealthController.js';

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
}

let labelRekomendasi = document.createElement('strong');

if (formIMT && btnSubmitIMT && btnResetIMT) {
    formIMT.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnResetIMT.addEventListener('click', () => {
        ResetIMT();
    })

    btnSubmitIMT.addEventListener('click', () => {
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



if (formHPL) {
    formHPL.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnSubmitHPL.addEventListener('click', () => {
        const dateSelected = new Date(inputDateHPL.value)
        const tanggal = dateSelected.getDate();
        const bulan = dateSelected.getMonth() + 1;
        const tahun = dateSelected.getFullYear();

        const dateHPL = HitungHPL(tanggal, bulan, tahun);

        console.log(dateHPL);


        // console.log(`${tanggal} + ${bulan} + ${tahun}`);
    })
}

// ! AMB Logic

let optionKelamin = document.getElementById("kelaminUserAMB");
let inputBeratAMB = document.getElementById("beratUserAMB");
let inputTinggiAMB = document.getElementById("tinggiUserAMB");
let inputUmurAMB = document.getElementById("umurUserAMB");
let formAMB = document.getElementById("formAMB");
let btnSubmitAMB = document.getElementById("submitAMB");


if (formAMB) {
    formAMB.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnSubmitAMB.addEventListener('click', () => {
        const kelamin = optionKelamin.value;
        const berat = inputBeratAMB.value;
        const tinggi = inputTinggiAMB.value;
        const umur = inputUmurAMB.value;

        const caloryUser = HitungAMB(kelamin, berat, tinggi, umur);

        console.log(caloryUser);

    })
}
