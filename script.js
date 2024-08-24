const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector(".customTip");
const submitBtn = document.querySelector("#submitBtn");
const radios = document.querySelectorAll("input[type='radio']");
const numberInputs = document.querySelectorAll("input[type='number']");
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const inputs = document.querySelectorAll(".inputs");
const bill = document.querySelector("#bill");
const nbPeople = document.querySelector("#nbPeople");
const errorText = document.querySelector("#errorText");


// Handle inputs style on selection
const removeSelection = (items)=>{
    items.forEach((item)=>{
        item.checked = false;
    })
}

const removeSelectionStyle = (items)=>{
    items.forEach((item)=>{
        item.classList.remove('tipSelected');
        
    })
}

const handleStyleOnClick = (item, func, items)=>{
    item.addEventListener('click', ()=>{
        customTip.value = '';
        func(items);
        item.classList.add('tipSelected');
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});

customTip.addEventListener('focus',()=>{
    removeSelectionStyle(tips);
    removeSelection(radios);
});


// Change number of people input style if the value entered is not valid
const checkPeopleValue = ()=>{
    const nbPeopleValue = parseInt(nbPeople.value);
    if (nbPeopleValue <= 0) {
        errorText.classList.remove('hidden');
        nbPeople.classList.add('errorStyle');
    } else{
        errorText.classList.add('hidden');
        nbPeople.classList.remove('errorStyle');
    }
}


// Handle Data
const calculateTipAmount = (bill, tip, nbPeople)=>{
    const formula = (bill*(tip/100))/nbPeople;
    const result = Math.trunc(formula*100)/100;
    return {'formula':formula,'result':result};
}

const calculateTotal = (bill, nbPeople, tipAmount)=>{
    const formula = bill/nbPeople+tipAmount;
    const result = parseFloat(formula.toFixed(2));
    return result;
}

const handleFormData = ()=>{
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const billValue = parseFloat(data.bill)>0 ? parseFloat(data.bill) : 0;
    const nbPeopleValue = parseInt(data.nbPeople)>0 ? parseInt(data.nbPeople) : 1 ;
    const tipValue = parseFloat(data.tip) > 0 ? parseFloat(data.tip) : 0 ;
    const customTipValue = parseFloat(data.customTip) > 0 ? parseFloat(data.customTip) : 0;
    if (billValue>=0 && (tipValue>=0 || customTipValue>=0) && nbPeopleValue>0){
        let finalTip = 0;
        if(customTipValue>0){
            finalTip = customTipValue;
        }else{
            finalTip = tipValue;
        }
        const tipAmountResult = calculateTipAmount(billValue, finalTip, nbPeopleValue);
        const totalResult = calculateTotal(billValue, nbPeopleValue, tipAmountResult.formula);
        tipAmount.textContent = `$${tipAmountResult.result}`;
        total.textContent = `$${totalResult}`;
    }else{
        alert("Invalid data provided");
    } 
}

const enableResetBtn = () =>{
    const isChecked = document.querySelector("input[type='radio']:checked");
    if (bill.value !== '' || isChecked || customTip.value !== '' || nbPeople.value !== '') {
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', checkPeopleValue);
    input.addEventListener('input', checkPeopleValue);
    input.addEventListener('focus', handleFormData);
    input.addEventListener('input', handleFormData);
    input.addEventListener('focus', enableResetBtn);
    input.addEventListener('input', enableResetBtn);
});

submitBtn.addEventListener('click',()=>{
    removeSelectionStyle(tips);
    removeSelection(radios);
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
    errorText.classList.add('hidden');
    nbPeople.classList.remove('errorStyle');
    numberInputs.forEach((input)=>{
        input.value = "";
    });
});