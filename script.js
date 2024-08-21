const tips = document.querySelectorAll(".tip");
const cutomTip = document.querySelector(".cutomTip");


const removeSelectionStyle = (items)=>{
    items.forEach((item)=>{
        item.classList.remove('btnSelected')
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
})