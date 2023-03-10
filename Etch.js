let defaultSize = 15;
let currentSize = defaultSize;



//create div elment as container
const div = document.createElement('div');
div.classList.add('container');//added class of container

document.body.appendChild(div);

const  container = document.querySelector('.container');
container.style.cssText='background-color:white;'

function setCurrentSize(newSize){
  currentSize = newSize;

}

//select the range slider
const slider = document.querySelector('.slider');
const sizeValue = document.querySelector('sizeValue');

//slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange =(e) => changeSize(e.target.value);

function changeSize(value){
  //updateSizeValue(value);
  setCurrentSize(value);
  reloadGrid(value);

}



/*function updateSizeValue(value){
  sizeValue.innerHTML = `${value} X ${value}`;
  
}*/


function reloadGrid(){
  clearGrid()

  gridMaker(currentSize);
}


function gridMaker(squares){ //making the grids using div elements

  //width and height of grid items
  const cellWidth = (30/squares) +'rem';
  const cellHeight = (30/squares) +'rem';
  

 //set the height and width of column and row
 
  //const content = [];


    //squares = parseInt(prompt('Enter the number of squares you want:'));

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
        //appen to the container
        content.appendChild(newDiv);


      }
        
    }
    onGrid();    
}


function clearGrid(){
  container.innerHTML = '';
}




function onGrid(){
    let gridPixels = document.querySelectorAll('.cell');
    gridPixels.forEach(newDiv=>newDiv.addEventListener('mouseover',()=>
    newDiv.style.backgroundColor='#000000'));
}




window.onload = () =>{
  gridMaker(defaultSize)
}