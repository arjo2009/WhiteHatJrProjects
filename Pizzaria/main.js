var menu=["Pepperoni","Supreme Chicken","Meat Lovers","Margherita","Vegetarian","Hawaiian","Double Cheese","Italian Sausage","BBQ Chicken","Mexican"]
var displayMenu=[];
var recommendPizza;
menuStore=[];
var decide=0;
function getmenu(){
    if(decide==0){
        document.getElementById("display_menu").style.display="inline-block";
        document.getElementById("menu_list").innerHTML="HIDE MENU";
        decide=1;
    }
    else if(decide==1){
        document.getElementById("display_menu").style.display="none";
        document.getElementById("menu_list").innerHTML="SHOW MENU";
        decide=0;
    }
    
}
function add_item(){
    
    recommendPizza=document.getElementById("add_item").value;
    rplenght=recommendPizza.length;
    for(var k=0; k <= rplenght; k++){
        menuGet=recommendPizza;
        menuStore.push(menuGet);
    }
    for(var k=0; k < rplenght; k++ ){
        displayMenu.push("<img src=https://www.flaticon.com/svg/static/icons/svg/3132/3132693.svg style=width:50px; height:50px;><h4>PIZZA-"+recommendPizza+"</h4>");
    }
    
    var finalMenu=displayMenu.join(" ");
    document.getElementById("display_addedmenu").innerHTML=finalMenu;
    
}