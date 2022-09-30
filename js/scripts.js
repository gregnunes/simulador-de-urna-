let digito1
let digito2
let statusDigitio = false

let quantVotos = 0

let votosBolsonaro = 0
let votosLula = 0
let votosCiro = 0
let votosSimone = 0
let votosPadre = 0
let votosSoraya = 0
let votosBrancos = 0
let votosNulos = 0



function digitado(tecla){
	console.log(tecla)
	console.log(digito1)
	if((digito1 === undefined) && (digito2 === undefined)){
		if(tecla === 'tecla-1'){
			digito1 = 1
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-2'){
			digito1 = 2
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-3'){
			digito1 = 3
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-4'){
			digito1 = 4
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-5'){
			digito1 = 5
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-6'){
			digito1 = 6
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-7'){
			digito1 = 7
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-8'){
			digito1 = 8
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-9'){
			digito1 = 9
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-0'){
			digito1 = 0
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}
	}else{
		if((statusDigitio) && (digito2 === undefined)){
			if(tecla === 'tecla-1'){
				digito2 = 1
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-2'){
				digito2 = 2
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-3'){
				digito2 = 3
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-4'){
				digito2 = 4
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-5'){
				digito2 = 5
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-6'){
				digito2 = 6
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-7'){
				digito2 = 7
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-8'){
				digito2 = 8
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-9'){
				digito2 = 9
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-0'){
				digito2 = 0
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}
		}
	}

	candidato(digito1, digito2)
}

function corrigir(){
	document.getElementById('digito1').value = ''
	document.getElementById('digito2').value = ''

	digito1 = undefined
	digito2 = undefined
	statusDigitio = false

	document.getElementById('imgPresidente').src = 'img/branco.jpg'
	document.getElementById('nome').innerHTML = ''
	document.getElementById('partido').innerHTML = ''
}


function candidato(num1, num2){
	if((num1 === 2) && (num2 === 2)){
		document.getElementById('imgPresidente').src = 'img/bolsonaro.png'
		document.getElementById('nome').innerHTML = 'Jair Bolsonaro'
		document.getElementById('partido').innerHTML = 'Partido Liberal (PL)'
	}else if((num1 === 1) && (num2 === 3)){
		document.getElementById('imgPresidente').src = 'img/lula.png'
		document.getElementById('nome').innerHTML = 'Luiz Inácio Lula da Silva'
		document.getElementById('partido').innerHTML = 'Partido dos Trabalhadores (PT)'
	}else if((num1 === 1) && (num2 === 2)){
		document.getElementById('imgPresidente').src = 'img/ciro.png'
		document.getElementById('nome').innerHTML = 'Ciro Gomes'
		document.getElementById('partido').innerHTML = 'Partido Democrático Trabalhista (PDT)'
	}else if((num1 === 1) && (num2 === 5)){
		document.getElementById('imgPresidente').src = 'img/simone.png'
		document.getElementById('nome').innerHTML = 'Simone Tebet'
		document.getElementById('partido').innerHTML = 'Movimento Democrático Brasilero (MDB)'
	}else if((num1 === 1) && (num2 === 4)){
		document.getElementById('imgPresidente').src = 'img/padre.png'
		document.getElementById('nome').innerHTML = 'Padre Kelmon'
		document.getElementById('partido').innerHTML = 'Partido Trabalhista Brasileiro (PTB)'
	}else if((num1 === 4) && (num2 === 4)){
		document.getElementById('imgPresidente').src = 'img/soraya.png'
		document.getElementById('nome').innerHTML = 'Soraya Thronicke'
		document.getElementById('partido').innerHTML = 'Partido Social Liberal (PSL)'
	}
}

function votoBranco(){
	votosBrancos++
	quantVotos++
	setTimeout(finalizar, 3000)
	console.log('Votos Brancos: ', votosBrancos)
}

function reiniciar(){
	document.getElementById('fim-voto').style.display = 'none'
	
	if(quantVotos < 10){
		document.getElementById('container-hidden').style.display = 'block'
	}

	corrigir()
}

function inicio(){
	document.getElementById('container-hidden').style.display = 'block'
	document.getElementById('container-resultado').style.display = 'none'
	
	quantVotos = 0
	
	votosBolsonaro = 0
	votosLula = 0
	votosCiro = 0
	votosSimone = 0
	votosPadre = 0
	votosSoraya = 0
	votosBrancos = 0
	votosNulos = 0
	
	corrigir()
}

function finalizar(){
	document.getElementById('container-hidden').style.display = 'none'

	
	if(quantVotos < 10){
		document.getElementById('fim-voto').style.display = 'block'
		setTimeout(reiniciar, 3000)
	}

	terminarVotacao()
}

function confirmar(){
	if((digito1 === 0) && (digito2 === 0)){
		votosNulos++
		quantVotos++
		console.log('Votos Nulos: ', votosNulos)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 2) && (digito2 === 2)){
		votosBolsonaro++
		quantVotos++
		console.log('Votos Bolsonaro: ', votosBolsonaro)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 3)){
		votosLula++
		quantVotos++
		console.log('Votos Lula: ', votosLula)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 2)){
		votosCiro++
		quantVotos++
		console.log('Votos Ciro: ', votosCiro)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 4)){
		votosSimone++
		quantVotos++
		console.log('Votos Simone: ', votosSimone)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 5)){
		votosPadre++
		quantVotos++
		console.log('Votos Padre: ', votosPadre)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 4) && (digito2 === 4)){
		votosSoraya++
		quantVotos++
		console.log('Votos Soraya: ', votosSoraya)
		setTimeout(finalizar, 3000)
	}else{
		votosNulos++
		quantVotos++
		console.log('Votos Nulos: ', votosNulos)
		setTimeout(finalizar, 3000)
	}

}

console.log('Votos: ', quantVotos)

function terminarVotacao(){
	if(quantVotos === 10){
		document.getElementById('container-hidden').style.display = 'none'
		document.getElementById('fim-voto').style.display = 'none'
		document.getElementById('container-resultado').style.display = 'block'

		document.getElementById('deapool').innerHTML = votosBolsonaro
		document.getElementById('cyborg').innerHTML = votosLula
		document.getElementById('robin').innerHTML = votosCiro
		document.getElementById('ravena').innerHTML = votosSimone
		document.getElementById('estrelar').innerHTML = votosPadre
		document.getElementById('mutano').innerHTML = votosSoraya
		document.getElementById('brancos').innerHTML = votosBrancos
		document.getElementById('nulos').innerHTML = votosNulos

    }
}