function hasUniqueChars(word){
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < word.length; j++){
            if(i !== j){
                if(word[i] === word[j]){
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));

function hasUniqueChars2(word){
    return new Set(word).size === word.length;
}
console.log(hasUniqueChars2("Monday"));
console.log(hasUniqueChars2("Moonday"));
console.log(hasUniqueChars2("Bob"));