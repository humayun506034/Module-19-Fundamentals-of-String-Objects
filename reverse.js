//reversing sentence first way

const sentence = 'i am learning web development';
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);


//reversing sentence second way
let reversing='';
const mysentence= 'i am learning web development';
for(let i=0;i<mysentence.length;i++){
    const letter=mysentence[i];
    reversing=letter+reversing;

}
console.log(reversing);

// shortcut way

const institute='rangpur polytechnic institute';
const reversed=sentence.split("").reverse().join("");
console.log(reversed);


