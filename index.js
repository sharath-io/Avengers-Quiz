var readlineSync = require('readline-sync');
var score = 0;

const chalk = require('chalk');


var questions= [{
  question: "Who vanished first, in infinity war ",
  answer: "Bucky Barnes",
},{
  question: "Who vanished last, in infinity war ",
  answer: "Nick Fury",
},{
  question: "Who knows what exactly happens in infinity war among heroes ",
  answer: "Stephen Strange",
},{
  question: "What is the first Infinity Stone thanos got ",
  answer: "Power stone",
},{
  question: "What is the last Infinity Stone thanos got ",
  answer: "Mind stone",
},{
  question: "Who did first snap in end game ",
  answer: "Bruce Banner",
},{
  question: "Who did last snap in end game ",
  answer: "Tony Stark",
},{
  question: "Who is the first one to came back after vanishing in infinity war ",
  answer: "Sam Wilson",
},{
  question: "Who has the power to take Thor's hammer other than Thor ",
  answer: "Steve Rogers",
},{
  question: "Whom do we love 3000 ",
  answer: "Tony Stark",
}];





function welcome()
{
  var name = readlineSync.question(chalk.cyan("Welcome to the Avengers Quiz \nWhat is your name "));

  console.log(chalk.cyan("\n\nHello " + chalk.white.underline(name) + "\nLet me explain about quiz \nWe have two levels : \nLevel0 has five questions about Infinity war \nLevel1 has five questions about End Game \nYou need to score minimum 3 points in level0 to enter into level1" + chalk.red.underline.bold("\nNOTE: answer these in charcter names not superhero names \n\n")));

  play();
}


function play() 
{
  console.log(chalk.bgWhite.black.bold("LEVEL 0 \n"))
  for(var i=0;i<questions.length;i++)
  {
    if(!(i==5 && score<3))// at 6th question checking if u have min 3 points to continue
    {
      if(i==5) //here you have enetered level1
      {
        console.log(chalk.green.underline.bold("You enetered  ") + chalk.bgWhite.black.bold("Level1 "));
      }
      quiz(questions[i].question,questions[i].answer);
    }
   else
   {
     console.log(chalk.yellow.bold("We are done with level0 but your score is less than 3" + chalk.red.bold.underline("\nEliminated from quiz \n\n")));
     break;
   }

  }
  result();
}


function quiz(question, answer)
{
   var userAnswer= readlineSync.question(question);
   if( userAnswer.toUpperCase() ==answer.toUpperCase() )
   {
     console.log(chalk.green.bold("right!! "))
     score = score + 1;
   }
   else
   {
     console.log(chalk.red.bold("wrong"));
     console.log(chalk.green("correct answer is " + chalk.underline(answer)));
   }

  console.log("current score: "+ score + "\n");

}



function result()
{
   console.log(chalk.green.bold.underline("Your final score is "+ score));
   console.log("Thank you for playing !!");
}

welcome();