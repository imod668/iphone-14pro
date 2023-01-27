function DateTime(){
	const d = new Date();
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getYear();
	const dateName = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
	const weekday = dateName[d.getDay()];
	let hours = d.getHours();
	let minutes = d.getMinutes();
	hours   = hours < 10 ? '0' + hours : hours ;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	
	document.querySelector(".day-name").innerText = weekday + ',';
	document.querySelector(".day").innerText = day;
	document.querySelector(".month").innerText= "tháng " + month;
	document.querySelector(".clock-area").innerText = hours + ":" + minutes;
};
setInterval(DateTime, 1000);

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

let flashlight = document.querySelector(".flashlight");
let fontclock = document.querySelector(".clock-area");
flashlight.addEventListener('click', () =>{
	fontclock.classList.toggle("clock-font");
});