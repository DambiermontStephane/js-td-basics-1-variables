/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/

let poidMark = prompt('Poids(kg) de Mark ?')
let tailleMark = prompt('Taille(m) de Mark ?')

let poidJohn = prompt('Poids(kg) de John ?')
let tailleJohn = prompt('Taille(m) de John ?')

let BMIMark = poidMark / (tailleMark * tailleMark)
let BMIJohn = poidJohn / (tailleJohn * tailleJohn)

/*BMIJohn = 5
BMIMark = 5*/

console.log(BMIMark)
console.log(BMIJohn)

//valeur booléenne toujours commencé par 'is'

if (BMIMark < BMIJohn) {
    console.log(`Le BMI de Mark (${BMIMark}) est inférieur à celui de John (${BMIJohn})`)
} else if (BMIMark === BMIJohn) {
        console.log(`Le BMI de Mark (${BMIMark}) est égal à celui de John (${BMIJohn})`)
} else {
    console.log(`Le BMI de Mark (${BMIMark}) est supérieur à celui de John (${BMIJohn})`)
}
