    var body = document.querySelector('description');
    var increase = document.querySelector('.increase');

    var decrease =document.querySelector(".decrease");
    var textSize=25;
     increase.addEventListener('click',() => {
        textSize = textSize + 2 ;
        description.style.fontSize = textSize + 'px';
     })
     decrease.addEventListener('click',() => {
        textSize = textSize - 2 ;
        description.style.fontSize = textSize + 'px';
     })

     const colorPicker = document.getElementById("colorpicker");
colorPicker.addEventListener("input",() => {
    document.body.style.backgroundColor = colorPicker.value;
})

function changecolors(event)
{
    var color = event.value;
    document.getElementsByTagName('BODY')
    [0].style.backgroundColor= color;
}

