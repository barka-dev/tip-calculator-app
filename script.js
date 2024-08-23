const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector(".customTip");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
const radios = document.querySelectorAll("input[type='radio']");
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
        item.classList.remove('btnSelected');
        
    })
}

const handleStyleOnClick = (item, func, items)=>{
    item.addEventListener('click', ()=>{
        customTip.value = '';
        func(items);
        item.classList.add('btnSelected');
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});

customTip.addEventListener('focus',()=>{
    removeSelectionStyle(tips);
    removeSelection(radios);
});
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------


// Check data entered and enable/disable the submit button based on whether the inputs are correctly filled or empty
const checkData = ()=>{
    const isChecked = document.querySelector("input[type='radio']:checked");
    const nbPeopleValue = parseInt(nbPeople.value);
    if (bill.value !== '' && (isChecked || customTip.value !== '') && nbPeopleValue > 0) {
        submitBtn.disabled = false;
        errorText.classList.add('hidden');
        nbPeople.classList.remove('errorStyle');
    } else if(nbPeopleValue <= 0){
        submitBtn.disabled = true;
        errorText.classList.remove('hidden');
        nbPeople.classList.add('errorStyle');
    } else {
        submitBtn.disabled = true;
        errorText.classList.add('hidden');
        nbPeople.classList.remove('errorStyle');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', checkData);
    input.addEventListener('input', checkData);
});
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------


// Handle Data
const calculateTipAmount = (bill, tip, nbPeople)=>{
    return (bill*(tip/100))/nbPeople;
}

const calculateTotal = (bill, nbPeople, tipAmount)=>{
    return bill/nbPeople+tipAmount;
}

const handleFormData = ()=>{
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const billValue = parseFloat(data.bill);
    const nbPeopleValue = parseInt(data.nbPeople);
    let finalTip = 0;
    if(data.customTip !== ''){
        finalTip = parseFloat(data.customTip);
    }else{
        finalTip = parseFloat(data.tip);
    }

    const tipAmountResult = calculateTipAmount(billValue, finalTip, nbPeopleValue);
    const totalResult = calculateTotal(billValue, nbPeopleValue, tipAmountResult);
    tipAmount.textContent = `$${parseFloat(tipAmountResult.toFixed(2))}`;
    total.textContent = `$${parseFloat(totalResult.toFixed(2))}`;
  
}

submitBtn.addEventListener('click',()=>{
    handleFormData();
});