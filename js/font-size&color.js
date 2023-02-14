document.getElementById('font-size').value = "16";
document.getElementById('font-size').addEventListener('input', function(event){
    text.style.fontSize = `${event.target.value}px`;
    
});
document.getElementById('color').addEventListener('input', function(event){
    // const value = parseInt(event.target.value);
    text.style.color = `${event.target.value}`;
    
});