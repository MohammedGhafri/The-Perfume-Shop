'use strict';


var Cart=function(a,b,d){
    this.name=a;
    this.quantity=b;
    this.price=`${d} $`;
    Cart.all.push(this);
}
Cart.all=[];
var MyCart=function(item){
    this.item=item;
    
}
var prefum=new MyCart([]);//iniat

document.getElementById('formOne').addEventListener('submit',handleFunction);

function handleFunction(event){
// event.preventDefault();
event.preventDefault();
var a=event.target.i1.value;
var b=parseInt(event.target.i2.value);
var c=Math.floor(Math.random() * (270 - 120) ) + 120;
var d=b*c;
new Cart(a,b,d);
// console.log(Cart.all);
toLocal();
doTable();
document.getElementById('formOne').reset();
}
function toLocal(){
    localStorage.setItem('storage',JSON.stringify(Cart.all));
}
function fromLocal(){
    var a=JSON.parse(localStorage.getItem('storage'));
    prefum=new MyCart(a);
    // console.log(prefum.item);
}
var table=document.getElementById('divtwo').childNodes[3].childNodes[3];
function doTable(){
    fromLocal();
    // var div=div.childNodes
    // console.log(table);
    table.textContent=null;//iniat the tables
    console.log(prefum.item);
    for(var i=0 ; i<prefum.item.length;i++){
        var tr=document.createElement('tr');
        table.appendChild(tr);
        var td=document.createElement('td');
        tr.appendChild(td);
        td.textContent=prefum.item[i].name;
        var td=document.createElement('td');
        tr.appendChild(td);
        td.textContent=prefum.item[i].quantity;
        var td=document.createElement('td');
        tr.appendChild(td);
        td.textContent=prefum.item[i].price;
        var td=document.createElement('td');
        td.addEventListener('click',delFunction);
        td.setAttribute('id',i);
        tr.appendChild(td);
        td.textContent='X';
        
    }
}
function delFunction(event){
// console.log(event);
if(event.target.textContent=='X'){
    event.target.parentNode.remove();
}
}
doTable();