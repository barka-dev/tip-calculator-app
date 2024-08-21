const tips = document.querySelectorAll(".tip");
const customBtn = document.querySelector('.customBtn');
const customInput = document.querySelector('.customInput');

const hideCustomInput = (input)=>{
    input.classList.add('hidden');
}

const removeSelectionStyle = (items)=>{
    items.forEach((item)=>{
        item.classList.remove('btnSelected')
    })
}

const handleStyleOnClick = (item, func, items)=>{
    item.addEventListener('click', (e)=>{
        func(items);
        e.target.classList.add('btnSelected');
        if(e.target.textContent.toLowerCase()!='custom'){
            hideCustomInput(customInput);
        }
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});

customBtn.addEventListener('click',()=>{
    customInput.classList.toggle('hidden');
})