/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33

const now = 2019;
const ageMark = 33;
const ageJohn = 28;
let yearJohn = '';
let yearMark = '';

// Opérateurs mathématiques
// + - * /

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(`John est né en ${yearJohn}`)
console.log(`Mark est né en ${yearMark}`)


// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année

console.log(`Dans 2 ans nous seront en ${now + 2}`)
console.log(`Le double de l'année est ${now * 2}`)
console.log(`Le dixième de l'année est ${now / 10}`)

// Opérateurs logiques

// 4. …


// Opérateur typeof
// Il sert à afficher le type de la variable

