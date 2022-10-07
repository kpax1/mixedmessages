const message1 = ['I like ', "I don't like ", ' I love'];
const message2 = [" orange", ' apple', " watarmelon"];
const message3 = [' and cocos', ' and cacao', ' and many things']

const choose =()=>{
    let choice1 = [Math.floor(Math.random()*message1.length)];
    let choice2 = [Math.floor(Math.random()*message2.length)];
    let choice3 = [Math.floor(Math.random()*message3.length)];
    return message1[choice1] + message2[choice2] + message3[choice3];
}
console.log(choose())