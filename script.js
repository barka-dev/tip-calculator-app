const tips = document.querySelectorAll(".tip");

const removeSelectionStyle = ()=>{
    tips.forEach((tip)=>{
        tip.classList.remove('btnSelected')
    })
}

const handleStyleOnClick = (item, func)=>{
    item.addEventListener('click', (e)=>{
        func();
        e.target.classList.add('btnSelected');
    })
}
tips.forEach((tip)=>{
    handleStyleOnClick(tip, removeSelectionStyle);
});