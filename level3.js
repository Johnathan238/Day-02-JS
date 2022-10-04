const becauseStr = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseStr.match(/because/g))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = sentence.replace(/[^\w\s]|_/g, ""); 
console.log('cleanSentence = ' + cleanSentence);


const getAnnual = 5000 * 15000 * 10000 / 12 - 0.45
console.log(Math.floor(getAnnual))

const getLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(getLove.match(/love/g))