let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero


let finalMix = mix.map((el)=>{
    return typeof el === "string" ? el : "";
}).reduce((acc,cur)=>{
    return `${acc}${cur}`
})

console.log(finalMix)