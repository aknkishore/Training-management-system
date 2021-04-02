function loginvalidate(){
	let valid=false;
	let pwd=document.querySelector("#pwd");
	let role=document.querySelector("#role");
	let userid=document.querySelector("#userid");
	if(userid.value===""){
		userid.style.backgroundColor="pink";
		valid=false;
	}else{
		userid.style.backgroundColor="white";
		valid=true;
	}
	if(pwd.value===""){
		pwd.style.backgroundColor="pink";
		valid=false;
	}else{
		pwd.style.backgroundColor="white";
		valid=true;
	}
	if(role.value===""){
		role.style.backgroundColor="pink";
		valid=false;
	}else{
		role.style.backgroundColor="white";
		valid=true;
	}
	if(valid===false)
		alert("Please fill the highlighted fields");
	return valid;
}

function validate(){
	let valid=false;
	let fname=document.querySelector("#fname");
	let lname=document.querySelector("#lname");
	let pwd=document.querySelector("#pwd");
	let cpwd=document.querySelector("#cpwd");
	let gender=document.querySelector("#gender");
	let phone=document.querySelector("#phone");
	let address=document.querySelector("#address");
	let email=document.querySelector("#email");
	
	
	if(fname.value===""){
		fname.style.backgroundColor="pink";
		valid=false;
	}else{
		fname.style.backgroundColor="white";
		valid=true;
	}
	
	if(pwd.value===""){
		pwd.style.backgroundColor="pink";
		valid=false;
	}else{
		pwd.style.backgroundColor="white";
		valid=true;
	}
	
	if(phone.value===""){
		phone.style.backgroundColor="pink";
		valid=false;
	}else{
		phone.style.backgroundColor="white";
		valid=true;
	}
	
	if(gender.value===""){
		gender.style.backgroundColor="pink";
		valid=false;
	}else{
		gender.style.backgroundColor="white";
		valid=true;
	}
	
	if(lname.value===""){
		lname.style.backgroundColor="pink";
		valid=false;
	}else{
		lname.style.backgroundColor="white";
		valid=true;
	}
	
	if(dob.value===""){
		dob.style.backgroundColor="pink";
		valid=false;
	}else{
		dob.style.backgroundColor="white";
		valid=true;
	}
	
	if(address.value===""){
		address.style.backgroundColor="pink";
		valid=false;
	}else{
		address.style.backgroundColor="white";
		valid=true;
	}
	
	if(cpwd.value===""){
		cpwd.style.backgroundColor="pink";
		valid=false;
	}else{
		cpwd.style.backgroundColor="white";
		valid=true;
	}
	if(email.value===""){
		email.style.backgroundColor="pink";
		valid=false;
	}else{
		email.style.backgroundColor="white";
		valid=true;
	}
	
	if(valid===false)
		alert("Please fill the highlighted fields");
	return valid;
}