var count = 1;
var pic = document.getElementById("pic");
var pre_botton = document.getElementById("front");
var next_botton = document.getElementById("next");
var page_number = document.getElementById("number");
var pic_name = '';

  
function init(){
    imgChange();
    page_name_change();
    pre_botton.addEventListener("click", function () 
    {
        count--;
        if (count < 1) 
        {
            count = 8;
        }
        imgChange();
    });
    next_botton.addEventListener("click", function () 
    {
        count++;
        if (count > 8) 
        {
            count = 1;
        }
        imgChange();
    });
}
  
function imgChange() {
    pic_name = '../img/' + count + ".jpg";
    pic.src = pic_name;
    page_name_change();
}

function page_name_change() {
    page_number.innerHTML = count + "/" + "8";
}

init()