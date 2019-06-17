var $mainimg = document.querySelector("#mainimg");
var $sandy = document.querySelector("#sandy");
var $korea = document.querySelector("#korea");

var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");

window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){
     console.log('move');
     var posX = e.clientX, posY=e.clientY;
     TweenMax.to($cursorBG, 0.2,{css : {top:posY,left:posX}});
     TweenMax.to($progress, 0.25,{css : {top:posY,left:posX}});
 }



$sandy.addEventListener('mouseenter',function(){
     console.log("enter");
     if(!$cursorBG.classList.contains('active')){
         $cursorBG.classList.add('active')
     }
     if(!$progress.classList.contains('active')){
         $progress.classList.add('active')
     }
})

$korea.addEventListener('mouseenter',function(){
     console.log("enter");
     if(!$cursorBG.classList.contains('active')){
         $cursorBG.classList.add('active')
     }
     if(!$progress.classList.contains('active')){
         $progress.classList.add('active')
     }
})


$sandy.addEventListener('mouseleave',function(){
     console.log("leave");
     if(!$cursorBG.classList.contains('remove')){
         $cursorBG.classList.remove('active')
     }
     if(!$progress.classList.contains('remove')){
         $progress.classList.remove('active')
     }
})

$korea.addEventListener('mouseleave',function(){
     console.log("leave");
     if(!$cursorBG.classList.contains('remove')){
         $cursorBG.classList.remove('active')
     }
     if(!$progress.classList.contains('remove')){
         $progress.classList.remove('active')
     }
})


function fnMove(seq){
    var offset = $("#div" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
    }