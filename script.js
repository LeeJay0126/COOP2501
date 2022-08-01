
let sidebarFlag = 0;

function menu(){
    if(sidebarFlag == 0 ){
    document.getElementsByClassName("sideBar")[0].style.transform = "translate(0px,0)";
    sidebarFlag = 1;
    }else{
        document.getElementsByClassName("sideBar")[0].style.transform = "translate(800px,0)";
        sidebarFlag = 0;
    }
}