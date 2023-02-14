let isActiveBold = false;
let isActiveItalic = false;
let isActiveUnderline = false;
const text = document.getElementById('text');
document.getElementById('bold').addEventListener('click', function(event){
    if(isActiveBold){
        text.style.fontWeight = "400";
        event.target.removeAttribute("style");
        isActiveBold = false;
    }
    else{
        text.style.fontWeight = "900";
        event.target.style.backgroundColor = 'blue';
        event.target.style.borderRadius = '5px';
        isActiveBold = true;
    }
});
document.getElementById('italic').addEventListener('click', function(event){
    if(isActiveItalic){
        text.style.fontStyle = "normal";
        event.target.removeAttribute("style");
        isActiveItalic = false;
    }
    else{
        text.style.fontStyle = "italic";
        event.target.style.backgroundColor = 'blue';
        event.target.style.borderRadius = '5px';
        isActiveItalic = true;
    }
});
document.getElementById('underline').addEventListener('click', function(event){
    if(isActiveItalic){
        text.style.textDecoration = "none";
        event.target.removeAttribute("style");
        isActiveItalic = false;
    }
    else{
        text.style.textDecoration = "underline";
        event.target.style.backgroundColor = 'blue';
        event.target.style.borderRadius = '5px';
        isActiveItalic = true;
    }
});