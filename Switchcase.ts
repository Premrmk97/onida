// Cricket Score (Switch Case)
// Reusing 'score' without re-declaring with 'let'
score = 250;

switch (score) {
    case 0:
        console.log("You are Duck Out");
        break;
    case 50:
        console.log("You are half Century Now");
        break;
    case 100:
        console.log("You are Century Now");
        break;
    case 200:
        console.log("You are Double Century Now");
        break;
    default:
        console.log(`Your Runs are : ${score}`);
}

//  Switch Expression Evaluation
switch (89+1) {
    case 0:
        console.log("Your Result is 0");
        break;
    case 3:
        console.log("Your Result is 3");
        break;
    case 6:
        console.log("Your Result is 6");
        break;
    case 9:
        console.log("Your Result is 9");
        break;
    default:
        console.log("Give me other values"); 
}