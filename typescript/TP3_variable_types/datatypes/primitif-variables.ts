export {}
let fullName = "Vivien SA'A TADONG";
let isDebutantAngular : boolean;
let experience:number = 3;

//console.log("I'm " + fullName + "\n" + "I'm ", + isDebutantAngular ? 'beginer' : 'not beginer' + ' on angular' + "\n" + 'I have ' + experience + ' years in programming');

//console.log("I'm ".concat(fullName).concat(".\n").concat("I'm ").concat(isDebutantAngular ? 'beginer' : 'not beginer').concat(' on angular').concat('\n').concat('I have ').concat(experience.toString()).concat(' years in programming'));

const message = `I'm ${fullName}.
I'm ${isDebutantAngular ? 'beginer' : 'not beginer'} on angular
And i have ${experience} years experience in programming.
`;
console.log(message);