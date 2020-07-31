let player = 'X'
let squareFilled = 0
let clickSound = document.getElementById('clickSound')
let winSound = document.getElementById('winSound')
let drawSound = document.getElementById('drawSound')

document.getElementById('info').innerHTML = 'Player Turn : ' + player;

function clicktombol(num) {
	document.getElementById('cell'+num).innerHTML = player;
	document.getElementById('cell'+num).value = player;
	clickSound.play()
	squareFilled++
	if(player === 'X'){
		document.getElementById('info').innerHTML = 'Player Turn : O';
		winningCheck()
		player = 'O'
	} else {
		document.getElementById('info').innerHTML = 'Player Turn : X';
		winningCheck()
		player = 'X'
	}
}

function winningCheck() {
	if(document.getElementById('cell1').value === player && document.getElementById('cell2').value === player && document.getElementById('cell3').value === player){
		win()
	} else if(document.getElementById('cell4').value === player && document.getElementById('cell5').value === player && document.getElementById('cell6').value === player){
		win()
	} else if(document.getElementById('cell7').value === player && document.getElementById('cell8').value === player && document.getElementById('cell9').value === player){
		win()
	} else if(document.getElementById('cell1').value === player && document.getElementById('cell4').value === player && document.getElementById('cell7').value === player){
		win()
	} else if(document.getElementById('cell2').value === player && document.getElementById('cell5').value === player && document.getElementById('cell8').value === player){
		win()
	} else if(document.getElementById('cell3').value === player && document.getElementById('cell6').value === player && document.getElementById('cell9').value === player){
		win()
	} else if(document.getElementById('cell1').value === player && document.getElementById('cell5').value === player && document.getElementById('cell9').value === player){
		win()
	} else if(document.getElementById('cell3').value === player && document.getElementById('cell5').value === player && document.getElementById('cell7').value === player){
		win()
	} else if(squareFilled === 9) {
		draw()
	}
}

function win() {
	document.getElementById('win').innerHTML = 'Player ' + player +' Win!';
	document.getElementById('reset').innerHTML = 'Play Again';
	document.getElementById('reset').style.width = '120px';
	document.getElementById('home').innerHTML = 'Home';
	document.getElementById('home').style.width = '120px';
	winSound.play()
	for(let i = 0; i <= 9; i++){
		document.getElementById('cell'+i).disabled = 'disabled';
	}
}

function draw() {
	document.getElementById('win').innerHTML = 'Draw!';
	document.getElementById('reset').innerHTML = 'Play Again';
	document.getElementById('reset').style.width = '120px';
	document.getElementById('home').innerHTML = 'Home';
	document.getElementById('home').style.width = '120px';
	drawSound.play()
	for(let i = 0; i <= 9; i++){
		document.getElementById('cell'+i).disabled = 'disabled';
	}
}