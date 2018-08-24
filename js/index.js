
let img=document.querySelectorAll("img");
let pointny=document.querySelectorAll("pointny");
let left=document.querySelector(".left");
let right=document.querySelector(".right");
let banner=document.querySelector(".banner");
console.log(banner,pointny);

let t=setInterval(move,2000);

let now=0;
let next=0;
function move() {
   next++;
   if (next==img.length){
       next=0;
   }
    img[next].style.left="1226px";
    animate(img[now],{left:-1226});
    animate(img[next],{left:0});
    pointny[now].className="";
    pointny[next].className="pointny";
    now=next;
}
function move1() {
    next--;
    if (next<0){
        next=img.length-1;
    }
    img[next].style.left="-1226px";
    animate(img[now],{left:1226});
    animate(img[next],{left:0});
    pointny[now].className="";
    pointny[next].className="pointny";
    now=next;
}
banner.onmouseenter=function(){
    clearInterval(t);
}
banner.onmouseleave=function(){
    t=setInterval(move,2000);
}
left.onclick=function(){
    move();
}
right.onclick=function(){
    move1();
}

    ////圆点
 for (let i=0;i<pointny.length;i++){
    pointny[i].onclick=function () {
         if (now==i){
             return;
         }
         else if (now<i){
             img[i].style.left="1226px";
             animate(img[now],{left:-1226});
             animate(img[i],{left:0});
             pointny[now].className="";
             pointny[i].className="pointny";
         }
         else {
             img[i].style.left="-1226px";
             animate(img[now],{left:1226});
             animate(img[i],{left:0});
             pointny[now].className="";
             pointny[i].className="pointny";
         }
         next=now;
         now=i;
     }
 }