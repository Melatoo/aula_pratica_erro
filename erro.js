function validaArray(arr, num) {
    try {
        if (!arr && !num)
         throw new ReferenceError('Envie os parâmetros');

        if (typeof arr != 'object')
         throw new TypeError('Envie uma array do tipo object');

        if(typeof num != 'number')
         throw new TypeError('Envie um número');

        if(arr.lenght != num)
         throw new RangeError('Tamanho inválido');

        return arr; 
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Esse erro é um Reference Error!');
            console.log(e.message);
        }
        else if(e instanceof TypeError) {
            console.log('Esse erro é um Type Error!');
            console.log(e.message);
        }
        else if(e instanceof RangeError) {
            console.log('Esse erro é um Range Error!');
            console.log(e.message);
        }
        else {
            console.log('Ocorreu um tipo de erro não esperado:' + e);
        }

    }
}

console.log(validaArray([], ));