const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const btnEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
let num = 0;

btnEl.addEventListener("click", function() {
    num = inputEl.value;
    lengthConverter(num);
    volumeConverter(num);
    massConverter(num);
})

function lengthConverter() {
    let metresToFeet = (num * 0.3048).toFixed(3);
    let feetToMetres = (num * 3.28084).toFixed(3);
    if (num > 1) {
        lengthEl.textContent = `${num} meters = ${metresToFeet} feet | ${num} feet = ${feetToMetres}`;
    } else {
        lengthEl.textContent = `${num} meter = ${metresToFeet} foot | ${num} foot = ${feetToMetres}`;
    }
};

function volumeConverter() {
    let litersToGallons = (num * 0.264).toFixed(3);
    let gallonsToLiters = (num * 3.78541).toFixed(3);
    if (num > 1) {
        volumeEl.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`;
    } else {
        volumeEl.textContent = `${num} liter = ${litersToGallons} gallon | ${num} gallon = ${gallonsToLiters} liter`;
    }
};

function massConverter() {
    let kilosToPounds = (num * 2.204).toFixed(3);
    let poundsToKilos = (num * 0.453592).toFixed(3);
    if (num > 1) {
        massEl.textContent = `${num} kilograms = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilograms`;
    } else {
        massEl.textContent = `${num} kilogram = ${kilosToPounds} pounds | ${num} pound = ${poundsToKilos} kilogram`
    }
};