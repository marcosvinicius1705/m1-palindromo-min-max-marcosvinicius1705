function isPalindrome(frase){

    frase = frase.toLowerCase(); 
    frase = frase.replace(/[^a-z0-9]/g, ''); //Remover espaços e pontuação da frase

    let fraseInvertida = '';

    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];

    }
    return frase === fraseInvertida;
}
console.log(isPalindrome());

function arrayMaxMin(arr){

    let minimo = arr[0];
    let maximo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
        if (arr[i] > maximo) {
            maximo = arr[i]; 
        }
    }
    return [minimo, maximo];
}
console.log(arrayMaxMin(minimo, maximo));
