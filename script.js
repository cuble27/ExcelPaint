
window.onload = function(){
   var i= 0, j= 0;

   var cellSize= 52;  //Wont work if you make it smaller, FIX IT!!!

   var cells = document.getElementsByClassName('cell');
   var colorSelected = "white";

   var tableSelector= document.getElementById("excelTable");

   var widthOfTable= (innerWidth-120) - (innerWidth-120)%cellSize;
   var heightOfTable= innerHeight - innerHeight % cellSize;

   tableSelector.style.maxWidth= widthOfTable+"px";
   tableSelector.style.maxHeiht= heightOfTable+"px";

   tableSelector.style.marginTop= ((innerHeight%cellSize) / 2) + "px";

// console.log((heightOfTable%cellSize) / 2);

   for(i= 0; i < (widthOfTable / cellSize) * (heightOfTable / cellSize); i++){
      tableSelector.innerHTML += "<div class=\"cell\"></div>";
   }


   var changeColor = function(e){
      e = e || window.event;
      this.style.backgroundColor = colorSelected;
   };

   for (i= 0; i < cells.length; i++) {
      console.log("dada");
      cells[i].addEventListener('click', changeColor, false);
   }

   document.getElementById('red').onclick = function(){
      colorSelected = "red";
   };

   document.getElementById('green').onclick = function(){
      colorSelected = "green";
   };

   document.getElementById('blue').onclick = function(){
      colorSelected = "blue";
   };

   document.getElementById('white').onclick = function(){
      colorSelected = "white";
   };

};
