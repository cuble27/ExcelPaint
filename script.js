
var mouseClickDown= 0;
var colorSelected = "purple";
var cells = document.getElementsByClassName('cell');

function changeColor(e){
   e = e || window.event;
   if (mouseClickDown){
      console.log("yes");
      this.style.backgroundColor = colorSelected;
   }
}

function eraseAll(n, color){ //Also handles the background color change
   cells[n].style.backgroundColor= color;

   if (n >= cells.length-1){
      return;
   }
   eraseAll(n+1, color);
}

window.onload = function(){
   var cellSize= 10; //Remove the margin size or this comment

   var widthOfTable= (innerWidth-130) - (innerWidth-130)%cellSize;
   var heightOfTable= (innerHeight-cellSize) - innerHeight % cellSize;
   console.log("widthOfTable: " + widthOfTable + " heightOfTable: " + heightOfTable);

   var tableSelector= document.getElementById("excelTable");

   tableSelector.style.maxWidth= widthOfTable+"px";
   tableSelector.style.maxHeiht= heightOfTable+"px";
   tableSelector.style.marginTop= ((cellSize / 2) + (innerHeight%cellSize)/2) + "px";

   var cellsPerRow= (widthOfTable / cellSize);
   var cellsPerCol= (heightOfTable / cellSize);

   var tableCells= [];

   for(i= 0; i < cellsPerRow * cellsPerCol; i++){
      tableCells.push("<div class=\"cell\" id=\"" + i +"\"></div>");
   }

   tableSelector.innerHTML= tableCells.join('');  //Putting the array that stores the cells in the table -- faster method than putting it in one by one.

   tableSelector.addEventListener('mousedown', function(e){
      mouseClickDown= 1;
      document.getElementById(e.target.id).style.backgroundColor = colorSelected;
   });

   window.onmouseup = function(){
      mouseClickDown= 0;
   };

   tableSelector.onmouseleave = function(){
      mouseClickDown= 0;
   };

   for (i= 0; i < cells.length; i++) {
      cells[i].addEventListener('mouseover', changeColor, false);
   }

   document.getElementById('eraseAll').onclick = function(){
      eraseAll(0, "green");
   };

   document.getElementById('white').onclick = function(){
      colorSelected = "white";
   };

   document.getElementById('red').onclick = function(){
      colorSelected = "red";
   };

   document.getElementById('green').onclick = function(){
      colorSelected = "green";
   };

   document.getElementById('blue').onclick = function(){
      colorSelected = "blue";
   };

   document.getElementById('yellow').onclick = function(){
      colorSelected = "yellow";
   };

   document.getElementById('purple').onclick = function(){
      colorSelected = "purple";
   };

   document.getElementById('orange').onclick = function(){
      colorSelected = "orange";
   };

   document.getElementById('cyan').onclick = function(){
      colorSelected = "cyan";
   };

};
