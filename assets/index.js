//date & time
function DateTime(){
	const d = new Date();
	let day = d.getDate();
	let month = d.getMonth() + 1;
	let year = d.getYear();
	let dateName = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
	let weekday = dateName[d.getDay()];
	let hours = d.getHours();
	let minutes = d.getMinutes();
	hours   = hours < 10 ? '0' + hours : hours ;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	day = day < 10 ? '0' + day : day ;
	month = month < 10 ? '0' + month : month ;
	
	document.querySelector(".day-name").innerText = weekday + ',';
	document.querySelector(".day").innerText = day;
	document.querySelector(".month").innerText= "tháng " + month;
	document.querySelector(".clock-area").innerText = hours + ":" + minutes;
};
setInterval(DateTime, 1000);

//change background
const wallArray = ["url('assets/imgs/iphone-14-pro-black.jpg')","url('assets/imgs/iphone-14-pro-gold.jpg')","url('assets/imgs/iphone-14-pro-purple.jpg')","url('assets/imgs/iphone-14-pro-silver.jpg')"];
const changeWall = document.querySelector(".camera");
let i = 0;
changeWall.addEventListener('click', () =>{
	i++;
	if( i >= wallArray.length){
		i = 0;
	}
	document.querySelector(".bosh-menu").style.backgroundImage = wallArray[i];
	document.body.style.backgroundImage = wallArray[i];
});

//change font time
let fontclock = document.querySelector(".clock-area");
fontclock.addEventListener('click', () => {
	fontclock.classList.toggle("clock-font");
})

//flashlight
let flashlight = document.querySelector(".flashlight");
flashlight.addEventListener('click', () => {

	let bg_flashblink = setInterval(() => {
		document.querySelector("#blink").classList.toggle("flashblink");
	},200)
	
	setTimeout(() => { 
		document.querySelector("#blink").classList.remove("flashblink");
		clearInterval(bg_flashblink);
    },800);
	
});

//dynamic-island
let dynamic_island = document.getElementById("dynamic_island");
let wrapper = document.querySelector(".wrapper");

dynamic_island.addEventListener('click', () =>{
	const contain_class = dynamic_island.classList.contains('dynamic-island')
	if(contain_class == true){
		dynamic_island.classList.add("dynamic-island-fill");
		dynamic_island.classList.remove("dynamic-island");
		wrapper.style.visibility = "visible";
	}else{
		dynamic_island.classList.remove("dynamic-island-fill");
		dynamic_island.classList.add("dynamic-island");
		wrapper.style.visibility = "hidden";
	}
});
window.addEventListener('click', (e) => {
	if (e.target !== dynamic_island){
		dynamic_island.classList.remove("dynamic-island-fill");
		dynamic_island.classList.add("dynamic-island");
		wrapper.style.visibility = "hidden";
	}
});