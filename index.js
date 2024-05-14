const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newCatArray = [...cats, name];
    return newCatArray;
}

function prependCat(name){
    const newCatArray = [name, ...cats];
    return newCatArray;
}

function removeLastCat(){
    const newCatArray = [...cats].slice(0,cats.length-1);
    return newCatArray;
}

function removeFirstCat(){
    const newCatArray = [...cats].slice(1,cats.length)
    return newCatArray;
}