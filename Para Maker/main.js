//variables
var para1=[];
var para2=[];
var para3=[];
//functions
   //para1
function para1make(){
    for(var i = 1; i <= 10; i++){
        para1.push(document.getElementById("p1line" + i).value);
    }
    var finalpara1=para1.join(". ");
    document.getElementById("para1_display").innerText=finalpara1;
    var p1color=document.getElementById("p1color").value;
    var p1bgcolor=document.getElementById("p1bgcolor").value;
    var p1tsize=document.getElementById("p1tsize").value;
    document.getElementById("para1_display").style.color=p1color;
    document.getElementById("para1_display").style.backgroundColor=p1bgcolor;
    document.getElementById("para1_display").style.fontSize=p1tsize + "px";
}
    //para2
function para2make(){
    for(var i = 1; i <= 10; i++){
        para2.push(document.getElementById("p1line" + i).value);
    }
    var finalpara2=para2.join(". ");
    document.getElementById("para2_display").innerText=finalpara2;
    var p2color=document.getElementById("p2color").value;
    var p2bgcolor=document.getElementById("p2bgcolor").value;
    var p2tsize=document.getElementById("p2tsize").value;
    document.getElementById("para2_display").style.color=p2color;
    document.getElementById("para2_display").style.backgroundColor=p2bgcolor;
    document.getElementById("para2_display").style.fontSize=p2tsize + "px";
    
} 
     //para3
function para3make(){
    for(var i = 1; i <= 10; i++){
        para3.push(document.getElementById("p1line" + i).value);
    }
    var finalpara3=para3.join(". ");
    document.getElementById("para3_display").innerText=finalpara3;
    var p3color=document.getElementById("p3color").value;
    var p3bgcolor=document.getElementById("p3bgcolor").value;
    var p3tsize=document.getElementById("p3tsize").value;
    document.getElementById("para3_display").style.color=p3color;
    document.getElementById("para3_display").style.backgroundColor=p3bgcolor;
    document.getElementById("para3_display").style.fontSize=p3tsize + "px";
}
