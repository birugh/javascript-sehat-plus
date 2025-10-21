import { HitungIMT, HitungHPL, HitungAMB } from '../js/HealthController.js';

// ! IMT Logic

let selectKelamin = document.getElementById("kelaminUser");
let inputBerat = document.getElementById("beratUser");
let inputTinggi = document.getElementById("tinggiUser");
let btnSubmit = document.getElementById("submitIMT");
let formIMT = document.getElementById("formIMT");

formIMT.addEventListener('submit', (e) => {
    e.preventDefault();
})

btnSubmit.addEventListener('click', () => {
    console.log(HitungIMT(inputBerat.value, inputTinggi.value));
    
    // console.log(`${selectKelamin.value} ${inputBerat.value} ${inputTinggi.value}`);
})

