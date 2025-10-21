import { HitungIMT, HitungHPL, HitungAMB } from '../js/HealthController.js';

// ! IMT Logic

let inputBerat = document.getElementById("beratUser");
let inputTinggi = document.getElementById("tinggiUser");
let btnSubmitIMT = document.getElementById("submitIMT");
let formIMT = document.getElementById("formIMT");

if (formIMT && btnSubmitIMT) {
    formIMT.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnSubmitIMT.addEventListener('click', () => {
        const userIMT = HitungIMT(inputBerat.value, inputTinggi.value);
        
        console.log(userIMT);

        // console.log(`${selectKelamin.value} ${inputBerat.value} ${inputTinggi.value}`);
    })
}

// ! HPL Logic

let inputDate = document.getElementById("dateUser");
let formHPL = document.getElementById("formHPL");
let btnSubmitHPL = document.getElementById("submitHPL");


if (formHPL) {
    formHPL.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    
    btnSubmitHPL.addEventListener('click', () => {
        const dateSelected = new Date(inputDate.value)
        const tanggal = dateSelected.getDate();
        const bulan = dateSelected.getMonth() + 1;
        const tahun = dateSelected.getFullYear();

        const dateHPL = HitungHPL(tanggal, bulan, tahun);

        console.log(dateHPL);


        // console.log(`${tanggal} + ${bulan} + ${tahun}`);
    })
}

// ! AMB Logic

