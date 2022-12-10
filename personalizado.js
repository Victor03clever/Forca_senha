function validarSenhaForca(){
	const senha = document.getElementById('senhaForca').value;
	var forca = 0;
	// document.getElementById("impSenha").innerHTML = "Senha " + senha;

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

	mostrarForca(forca);
}

function mostrarForca(forca){
	document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;
	const metter = document.querySelector('.metter');
	const senha = document.getElementById('senhaForca').value;



	if(forca>0 && forca <30){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
		metter.classList.add('fraca');
		metter.classList.remove('media');
		metter.classList.remove('forte');
		metter.classList.remove('excelente');
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700'>Média</span>";
		metter.classList.add('media');
		metter.classList.remove('fraca');
		metter.classList.remove('forte');
		metter.classList.remove('excelente');
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7FFF00'>Forte</span>";
		metter.classList.remove('fraca');
		metter.classList.remove('media');
		metter.classList.add('forte');
		metter.classList.remove('excelente');
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #008000'>Excelente</span>";
		metter.classList.remove('fraca');
		metter.classList.remove('media');
		metter.classList.remove('forte');
		metter.classList.add('excelente');
	}
	else{
		metter.classList.remove('fraca');
		metter.classList.remove('media');
		metter.classList.remove('forte');
		metter.classList.remove('excelente');
	}
	
}