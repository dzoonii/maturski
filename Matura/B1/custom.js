function changeImage(a,g) {
    document.getElementById("img").src=a;
    if(g==1){
        document.getElementById("tekst").innerHTML="Jedan";
    }
    else if(g==2){
        document.getElementById("tekst").innerHTML="Dva";
    }
    else if(g==3){
        document.getElementById("tekst")="Tri";
    }
    else if(g==4){
        document.getElementById("tekst")="Cetiri";
    }
    else if(g==5){
        document.getElementById("tekst")="Pet";
    }
    else if(g==6){
        document.getElementById("tekst")="Sest";
    }
    else if(g==7){
        document.getElementById("tekst")="Sedam";
    }
    else if(g==8){
        document.getElementById("tekst")="Osam";
    }
    else if(g==9){
        document.getElementById("tekst")="Devet";
    }
    else{
        document.getElementById("tekst")="Deset";
    }


}