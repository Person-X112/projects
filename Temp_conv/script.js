window.onload=function(){
    var k=document.getElementById("kel");
    var c=document.getElementById("cel");
    var f=document.getElementById("far");
    f.oninput=function(){
        c.value=parseFloat((parseInt(f.value)-32)*5/9).toFixed(2);
        k.value=parseFloat((parseInt(f.value)-32)*5/9+273.15).toFixed(2);
    }
    c.oninput=function(){
        f.value=parseFloat((parseInt(c.value)*9/5)+32).toFixed(2);
        k.value=parseInt(c.value)+273.15;
    }
    k.oninput=function(){
        f.value=parseFloat((parseInt(k.value)-273.15)*9/5+32).toFixed(2);
        c.value=parseFloat(parseInt(k.value)-273.15).toFixed(2);
    }
    
}
