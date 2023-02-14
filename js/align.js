let isActiveLeft = false;
let isActiveRight = false;
let isActiveCenter = false;
let isActiveJustify = false;
document.getElementById('left').addEventListener('click', function (event) {
    if (isActiveLeft) {
        event.target.removeAttribute("style");
        isActiveLeft = false;
    }
    else {
        removeStyles('left');
        isActiveJustify = isActiveRight = isActiveCenter = false;
        event.target.removeAttribute("style");
        addStyle(event, 'left');
        isActiveLeft = true;
    }
});
document.getElementById('right').addEventListener('click', function (event) {
    if (isActiveRight) {
        event.target.removeAttribute("style");
        text.style.textAlign = "left";
        isActiveRight = false;
    }
    else {
        removeStyles('right');
        isActiveLeft = isActiveJustify = isActiveCenter = false;
        addStyle(event, 'right');
        isActiveRight = true;
    }
});
document.getElementById('center').addEventListener('click', function (event) {
    if (isActiveCenter) {
        addStyle(event, 'center');
    }
    else {
        removeStyles('center');
        isActiveLeft = isActiveRight = isActiveJustify = false;
        text.style.textAlign = "center";
        event.target.style.backgroundColor = 'blue';
        event.target.style.borderRadius = '5px';
        isActiveCenter = true;
    }
});

document.getElementById('justify').addEventListener('click', function (event) {
    if (isActiveJustify) {
        event.target.removeAttribute("style");
        text.style.textAlign = "left";
        isActiveJustify = false;
    }
    else {
        removeStyles('justify');
        isActiveLeft = isActiveRight = isActiveCenter = false;
        addStyle(event, 'justify');
        isActiveJustify = true;
    }
});