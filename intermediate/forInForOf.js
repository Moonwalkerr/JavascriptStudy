// For of Loop : used mostly when iterate through arrays

const names = ['Abhishek', 'Roy', 'Oliver', 'Bruce Wayne'];

for (const n of names) {
    console.log(n);
}



// For in Loop : used mostly when iterate through objects

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    gh: "Github"
};

for (const symbol in symbols) {
    console.log(`This : ${symbol} is the symbol of ${symbols[symbol]}`);
}