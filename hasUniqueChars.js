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