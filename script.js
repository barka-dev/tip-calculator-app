const tips = document.querySelectorAll(".tip");
const cutomTip = document.querySelector(".cutomTip");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
const radios = document.querySelectorAll("input[type='radio']");
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const inputs = document.querySelectorAll(".inputs");
const bill = document.querySelector("#bill");
const nbPeople = document.querySelector("#nbPeople");
// const isChecked = document.querySelector("input[type='radio']:checked");

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
        cutomTip.value = '';
        func(items);
        item.classList.add('btnSelected');
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});

// tips.forEach((tip)=>{
//     tip.addEventListener('click', ()=>{
//         removeSelectionStyle(tips);
//         tip.classList.add('btnSelected');
//     })
// });

cutomTip.addEventListener('focus',()=>{
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


inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        const isChecked = document.querySelector("input[type='radio']:checked");
        if (nbPeople.value !== '' && (isChecked || cutomTip.value !== '') && bill.value !== '' ) {
            console.log("OK");
        } else {
            console.log("Missing or invalid input.");
        }
    });
});