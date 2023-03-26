let defaultSize = 16;
let currentSize = defaultSize;


//call button elements 
const colorPicker = document.querySelector('.colorPicker');
const colorBtn = document.querySelector('.colorBtn');
const rgbBtn = document.querySelector('.rgbBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const clearBtn = document.querySelector('.clearBtn');
//select the range slider
const slider = document.querySelector('.slider');
const sizeValue = document.querySelector('.sizeValue');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


 let changer = colorPicker.value;
 let iscolorBtn= false;
 let isRgbBtn= false;
 let iseraseBtn = false;

 eraserBtn.addEventListener('click',(e)=>{
  isRgbBtn= false;
  iscolorBtn=false;
  iseraseBtn = true;
 });
 rgbBtn.addEventListener('click',(e)=>{
  iseraseBtn = false;
  iscolorBtn =false;
  isRgbBtn =true;
 });
 colorPicker.addEventListener('change',(e)=>{
  isRgbBtn=false;
  iseraseBtn = false;
  iscolorBtn = false;
  changer = e.target.value;

 });
clearBtn.onclick = (e) => reloadGrid();

colorBtn.addEventListener('click',(e)=>{
  isRgbBtn=false;
  iseraseBtn=false;
  iscolorBtn=true;
})

function rgbColorsMaker(){
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue= Math.floor(Math.random()*256);
   return `rgb(${red},${green},${blue})`;
}

function eraserMaker(){
  return 'white';
}


function defaultColor(){
  return 'black';
}



const  container = document.querySelector('.container');
container.style.cssText='background-color:white;'

function setCurrentSize(newSize){
  currentSize = newSize;

}


slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange =(e) => changeSize(e.target.value);



function changeSize(value){
  updateSizeValue(value);
  setCurrentSize(value);
  reloadGrid(value);

}




function updateSizeValue(value){
  sizeValue.innerHTML = `${value} X ${value}`;
 
}


function reloadGrid(){
  clearGrid();
  gridMaker(currentSize);
}


function gridMaker(squares){ //making the grids using div elements

  //width and height of grid items
  const cellWidth = (36/squares) +'rem';
  const cellHeight = (36/squares) +'rem';
  

    for(let i=0; i < (squares); i++){ // creates a div element with each iteration
        const content =document.createElement('div');
        content.classList.add('grid');

        container.appendChild(content);
        
      for(let j=0; j < squares; j++){
        console.log(squares);

        //create new div
        const newDiv = document.createElement('div');
        //create class attribute
        const classAttribute = newDiv.classList.add('cell');
        //define the height and width with style attribute.
        //giving the cells height and width
        const widthAndHeight = document.createAttribute('style');
        // adding the values
        widthAndHeight.value = `width: ${cellWidth}; height: ${cellHeight};`;
        //appending to the child div
        newDiv.setAttributeNode(widthAndHeight);
        //append to the container
        content.appendChild(newDiv);


      }
        
    }
    onGrid();    
}


function clearGrid(){
  container.innerHTML = '';
}


const newDiv = document.querySelectorAll('.cell');

function onGrid(){
    let gridPixels = document.querySelectorAll('.cell');
    gridPixels.forEach(newDiv=>newDiv.addEventListener('mouseover',(e)=>{

     if (e.type === 'mouseover' && !mouseDown) return;
      if(isRgbBtn){
        newDiv.style.backgroundColor = rgbColorsMaker();
      }
      else if(iseraseBtn){
        newDiv.style.backgroundColor = eraserMaker();
      }
      else if(iscolorBtn){
        newDiv.style.backgroundColor = defaultColor();
      }
      else{
        newDiv.style.backgroundColor = changer;
      }
    }));
    gridPixels.forEach(newDiv => newDiv.addEventListener('mousedown',(e)=>{
      if(isRgbBtn){
        newDiv.style.backgroundColor = rgbColorsMaker();
      }
      else if(iseraseBtn){
        newDiv.style.backgroundColor = eraserMaker();
      }
      else if(iscolorBtn){
        newDiv.style.backgroundColor = defaultColor();
      }
      else{
        newDiv.style.backgroundColor = changer;
      }
    }));
}




window.onload = () =>{
  gridMaker(defaultSize)
}