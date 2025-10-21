import { HitungIMT, HitungHPL, HitungAMB } from '../js/HealthController.js';

// ! IMT Logic

let inputBeratIMT = document.getElementById("beratUserIMT");
let inputTinggiIMT = document.getElementById("tinggiUserIMT");
let btnSubmitIMT = document.getElementById("submitIMT");
let formIMT = document.getElementById("formIMT");

if (formIMT && btnSubmitIMT) {
    formIMT.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnSubmitIMT.addEventListener('click', () => {
        const userIMT = HitungIMT(inputBeratIMT.value, inputTinggiIMT.value);
        
        console.log(userIMT);
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
