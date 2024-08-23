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


// Enable or disable the submit button based on whether the inputs are filled or empty
const enableDisableSubmit = ()=>{
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
    input.addEventListener('focus', enableDisableSubmit);
    input.addEventListener('input', enableDisableSubmit);
});
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------


// Handle Data

const checkData = (bill, tip, customTip, nbPeople)=>{
    const _bill = parseFloat(bill);
    const _tip = parseFloat(tip);
    const _customTip = parseFloat(customTip);
    const _nbPeople = parseInt(nbPeople);
    const _finalTip = 0;

    if(_bill > 0 && _nbPeople > 0){
        if(_tip !== undefined){
            _finalTip = _tip;
        }else if(_customTip !== ''){
            _finalTip = _customTip;
        }
    }

}

const handleFormData = ()=>{
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(typeof(data.tip));
  
}

submitBtn.addEventListener('click',()=>{
    handleFormData();
});