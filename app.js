//dc dropdown
let subMenu = document.getElementById("sub-Menu");
function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}

//notification dropdown
let notMenu = document.getElementById("not-Menu");
function switchMenu(){
  notMenu.classList.toggle("view-menu");
}

// //body dropdown
// const optionMenu = document.querySelector(".select-menu");
// const selectBtn = optionMenu.querySelector(".bottom");
// const options = optionMenu.querySelectorAll(".option");
// const sBtn_text = optionMenu.querySelector(".bottom-top");

// options.forEach(option => {
//   option.addEventListener("click",()=>{
//  let selectedOption = option.querySelector(".option-text").innerText;

//  console.log(selectedOption)
//   })
  
// })

//body header hide
const div = document.getElementById('main');
const display = 0;

function hideShow(){
if(display == 1){
  div.style.display = 'block';
  display = 0;
}else{
  div.style.display = 'none';
  display = 1;
}
}