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

const handleFormData = ()=>{
    const formData = new FormData(form);
    formData.forEach((value, key)=>{
        console.log(key + ": " + value);
    })
    return false;
}

submitBtn.addEventListener('click',()=>{
    handleFormData();
});

// Enable or disable the submit button based on whether the inputs are filled or empty

const enableDisableSubmit = ()=>{
    const isChecked = document.querySelector("input[type='radio']:checked");
    if (bill.value !== '' && (isChecked || customTip.value !== '') && nbPeople.value !== '') {
        submitBtn.disabled = false;
        console.log("OK");
    } else {
        submitBtn.disabled = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', enableDisableSubmit);
    input.addEventListener('input', enableDisableSubmit);
});

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------