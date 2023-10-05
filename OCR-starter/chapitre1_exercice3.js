// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?

	Cela fait une addition.

	* quel est le résulat de l'opération ?

	9

- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?

	Cela réalise une concaténation entre les deux chaines de caractères

	* quel est le résulat de l'opération ?

	45

- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?

	Cela concatène la chaine de caractères avec le nombre

	* quel est le résulat de l'opération ?

	45

- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?

    Toute l'expression devient une chaine de caractère

*/

// 1
const nombres = 4; const nombres2 = 5;

console.log(nombres + nombres2)

//2
const nombres3 = '4'; const nombres4 = '5';

console.log(nombres3 + nombres4)

//3
const nombres5 = '4'; const nombres6 = 5;

console.log(nombres5 + nombres6)
console.log('nombres5 + nombres6')





