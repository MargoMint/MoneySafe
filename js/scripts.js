import { convertStringNumber } from './convertStringNumber.js';

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');

let amount = 0;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const typeOperetion = event.submitter.dataset.typeOperetion;
    
    /* обращаемся к инпуту, по его name financeForm.amount.value 
    мы создали отдельно функцию,чтобы точно проверять на то, число ли у нас в строке
    Math.abs используем чтобы привести число в натуральное*/
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

    if (typeOperetion === 'income') {
        amount += changeAmount;
    }
    if (typeOperetion === 'expenses') {
        amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()} zł`;
});