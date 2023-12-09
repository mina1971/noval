let stars=document.getElementById('stars');
let moon2=document.getElementById('moon2');
let mount3=document.getElementById('mount3');
let mount4=document.getElementById('mount4');
let river5=document.getElementById('river5');
let boat6=document.getElementById('boat6');
let noval=document.querySelector('.noval');

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value + "px";
    moon2.style.top=value * 4 + "px";
    mount3.style.top=value * 2 + "px";
    mount4.style.top=value * 1.5 + "px";
    river5.style.top=value  + "px";
    boat6.style.top=value  + "px";
    boat6.style.left=value *3 + "px";
    noval.style.fontSize=value  + "px";
    if (scrollY > 67) {
        noval.style.fontSize=67  + "px";
        noval.style.position='fixed';

        if(scrollY >= 346){
            noval.style.display='none';
        }else{
            noval.style.display='block';
        }
        if (scrollY >= 120) {
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
        }
    }
}

