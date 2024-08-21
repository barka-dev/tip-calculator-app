const tips = document.querySelectorAll(".tip");
const cutomTip = document.querySelector(".cutomTip");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
const radios = document.querySelectorAll("input[type='radio']");

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
        func(items);
        item.classList.add('btnSelected');
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});

cutomTip.addEventListener('focus',()=>{
    removeSelectionStyle(tips);
    removeSelection(radios);
});

const handleFormData = (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, key)=>{
        console.log(key + ": " + value);
    })
    form.submit();
    event.preventDefault();
}

submitBtn.addEventListener('click',(event)=>{
    handleFormData(event);
});