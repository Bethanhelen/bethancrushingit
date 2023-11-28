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
var acc = document.getElementsByClassName('bottom');
var i;
var len = acc.length;
for(i = 0; i < len; i++) {
	acc[i].addEventListener('click', function(){
		this.classList.toggle('active');
		var options = this.nextElementSibling;
		if(options.style.maxHeight){
			options.style.maxHeight = null;
		}else{
			options.style.maxHeight = panel.scrollHeight + 'px'
		}
	})
}

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