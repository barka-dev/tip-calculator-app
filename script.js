const tips = document.querySelectorAll(".tip");

const removeSelectionStyle = (items)=>{
    items.forEach((item)=>{
        item.classList.remove('btnSelected')
    })
}

const handleStyleOnClick = (item, func, items)=>{
    item.addEventListener('click', (e)=>{
        func(items);
        e.target.classList.add('btnSelected');
    })
}

tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle, tips);
});