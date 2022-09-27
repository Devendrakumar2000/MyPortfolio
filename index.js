const x = document.getElementsByClassName("hidemenu");
const y = document.getElementsByClassName("cross");


function Hide (){
    x[0].style.display = "none";
    y[0].style.display = "none";   
}
const Show=()=>{
    x[0].style.display = "flex";
    y[0].style.display = "inline";
}