function removeStyles(target){
    if(target !== 'left'){
        document.getElementById('left').removeAttribute("style");
    }
    if(target !== 'right'){
        document.getElementById('right').removeAttribute("style");
    }
    if(target !== 'center'){
        document.getElementById('center').removeAttribute("style");
    }
    if(target !== 'justify'){
        document.getElementById('justify').removeAttribute("style");
    }
}

function addStyle(event, position){
    text.style.textAlign = position;
    event.target.style.backgroundColor = 'blue';
    event.target.style.borderRadius = '5px';
}