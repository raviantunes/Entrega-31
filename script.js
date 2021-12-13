//Declarações de callbacks e o meu array
let arr = [0, 2, 4, 6, 7, 8, 9];

const mostrar = (value) => {
    console.log(value);
};

function plus2Num(num){
    return num +2;
};

function isBigEnough(value) {
    return value >= 6;
};

const reducer = (previousValue, currentValue) => previousValue + currentValue;


//Refatorando o forEach
const newForEach = (array, callback) =>{
    for(let i = 0; i < array.length; i++){
        let index = i;
        let currentValue = array[i];
        let arr = array;
        callback(currentValue, index, arr);
    };
};


//Refatorando o map
const newMap = (array, callback) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        let index = i;
        let currentValue = array[i];
        let arr = array;
        newArr.push(callback(currentValue, index, arr));
    };

    return newArr;
};


//Refatorando o filter
const newFilter = (array, callback) => {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[i];
        if(callback(element)){
            newArr.push(element);
        };
    };
    return newArr;
};


//Refatorando o find
const newFind = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        
        let index = i;
        let element = array[i];
        
        if (callback(element, index, array)){
        
            return element;
        
        };

    };

};


//Refatorando o findIndex
const newFindIndex = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[i];
        if (callback(element)){
            return index;
        }
    };

    return -1;

};


//Refatorando o reduce
const newReduce = (array, callback, valorInicial = 0) => {

    let acumulador = valorInicial;

    for (let i = 0; i < array.length; i++) {
        let index = i;
        let valorAtual = array[i];
        acumulador = callback(acumulador, valorAtual, index, array);
    };
    return acumulador;
};


//Refatorando o some
const newSome = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        let valorAtual = array[i];
        let index = i;
        if (callback(valorAtual, index, array)){
            return true;
        }else{
            return false;
        };
    };
};


//Refatorando o every
const newEvery = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i];
        let index = i;
        if (callback(valorAtual, index, array) === false){
            return false
        }
    }
    return true;
};


//Refatorando o fill
const newFill = (array, valor, inicio = 0, fim = array.length) => {
    for (let i = inicio; i < fim; i++){
        array[i] = valor;
    }
    return array;
};


//Refatorando o includes
const newIncludes = (array, valor) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] === valor){
            return true;
        }
        
    };
    return false;
};


//Refatorando o indexOf
const newIndexOf = (array, valor, inicio = 0) => {
    
    if(inicio >= array.length){
  
        return -1;
    
    }else if (inicio < 0){

        inicio *= -1;

        for(let i = array.length-inicio; i >array.length; i++){
            let index = i;
            if(valor === array[i]){
                return index;
            };
        };

        return -1;

    }else if (inicio >= 0){

        for(let i = 0; i < array.length; i++){
            let index = i;
            if(valor === array[i]){
                return index;
            };
        };

    };
    
    return -1;
    
};



//Refatorando o concat

const newConcat = (... arrays) => {

    let newArray = [];
    
    for (let i=0; i < arrays.length; i++) {
        let arrIndex = arrays[i];
        
        for (let i = 0; i < arrIndex.length; i++){
            
            let values = arrIndex[i];
            newArray.push(values);

        };
    };
    
    return newArray;

};


//Refatorando o join

const newJoin = () => {



}