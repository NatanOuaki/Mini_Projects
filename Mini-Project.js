var word = prompt("Entrez un mot d'au moins 8 lettres, avec 2 lettres identiques: ")
var str = " "
	if (word.length < 8 || str != word.match(/[A-Z]/g)){
		while (word.length < 8){
			console.log("Votre mot est trop court, veuillez reessayer: ")
			word = prompt("Entrez un mot d'au moins 8 lettres avec 2 lettres identiques: ")
		}
		//while (str != word.match(/[A-Z]/g)){
		//	console.log("Votre mot ne contient pas 2 lettres identiques, veuillez réessayer: ")
		//	word = prompt("Joueur 1: Entrez un mot d'au moins 8 lettres avec 2 lettres identiques: ")
		//}
	}
word = word.toLowerCase()

var wordEncrypted = word[0]+ "*".repeat(word.length-2) + word.charAt(word.length-1)
console.log(wordEncrypted)

for (i=0; i<10; i++) {
	var attempt = prompt("Essayez une lettre: ")
	var listLetters = []
	listLetters.push(attempt)
	console.log("Vous avez deja essayer les lettres: " + listLetters)
	for (j=0; j<word.length; j++) {
		var touche = word.substr(j,1)
			if (touche == attempt ){
				wordEncrypted = wordEncrypted.substr(0,j) + attempt + wordEncrypted.substr(j+1)
			}
			if(touche != attempt){
				if (i < 8){
					console.log("Il vous reste " + (9 - i) + " essais.")
				}
				else{
					console.log("Il vous reste " + (9 - i) + " essai.")
				}
			}
	}
	console.log(wordEncrypted)
	if (word == wordEncrypted){
		break
	}	
}
if (wordEncrypted != word){
	console.log("Desole !! Vous avez perdu !")	
} 
else{
	console.log("Bravo !! Vous avez gagne !")
}