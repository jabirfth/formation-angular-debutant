export {};

const constNum:number = 100;
constNum = 200;

const constNum2:number;
constNum2 = 100;

console.log(constNum);
console.log(constNum2);

//////////////////////

const playerCodes = {
    player1 : 9, 
    player2 : 10, 
    player3 : 13, 
    player4 : 20
};

playerCodes.player2 = 11;

playerCodes = {
    player1 : 50,
    player2 : 10, 
    player3 : 13, 
    player4 : 20
};

playerCodes = {
    player1: 9, 
    player2: 10, 
    player3: 13, 
    player4: 20, 
    player5: 22
};