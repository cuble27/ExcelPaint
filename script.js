
window.onload = function(){
   var i= 0, j= 0;

   var cellSize= 11;  //Wont work if you make it smaller, FIX IT!!!

   var cells = document.getElementsByClassName('cell');
   var colorSelected = "white";
   var tableSelector= document.getElementById("excelTable");

   var widthOfTable= (innerWidth-130) - (innerWidth-130)%cellSize;
   var heightOfTable= (innerHeight-cellSize) - (innerHeight-cellSize) % cellSize;
   console.log("widthOfTable: " + widthOfTable + " heightOfTable: " + heightOfTable);

   tableSelector.style.maxWidth= widthOfTable+"px";
   tableSelector.style.maxHeiht= heightOfTable+"px";
   tableSelector.style.marginTop= ((cellSize / 2) + (innerHeight%cellSize)/2) + "px";

   var nrOfCells= (widthOfTable / cellSize) * (heightOfTable / cellSize);

   var tableCells= [];

   for(i= 0; i < nrOfCells; i++){
      tableCells.push("<div class=\"cell\"></div>");
      // tableSelector.innerHTML+= "<div class=\"cell\"></div>";
   }
   tableSelector.innerHTML+= tableCells.join('');  //Putting the array that stores the cells in the table -- faster method than putting it in one by one.

   var changeColor = function(e){
      e = e || window.event;
      this.style.backgroundColor = colorSelected;
   };

   for (i= 0; i < cells.length; i++) {
      cells[i].addEventListener('click', changeColor, false);
   }

   document.getElementById('white').onclick = function(){
      colorSelected = "white";
   };

   document.getElementById('red').onclick = function(){
      colorSelected = "red";
   };

   document.getElementById('green').onclick = function(){
      colorSelected = "green";
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
