/**
 * 1
 *
 * The .forEach() method's callback function has up to three parameters. What are these parameters?
 * Array.forEach(fn) // <- forEach is a method (property) of the Array object/ class
 * 
 * Higher Order because their is a required function parameter
 * 
 * Side EFFECTS: USES SIDE EFFECTS TO ACHIEVE LOGICAL GOALS/OUTPUTS
 * 
 * Return Values: does NOT make use of return values
 * -cannot store a call to Array.forEach in a variable
 * -it returns undefined
 * 
 * with Array.forEach, we create a new array or object ONLY ---- because there is no return value
 */
  let soccerTeams = [
    `Manchester United`,
    `Real Madrid`,
    `Boca Juniors`,
    `NYC FC`,
  ]
  function printTeamSupport(team) {
    console.log(`I am a super fan of ${team} : This is the named function`);
  }

  soccerTeams.forEach(function (team){
console.log(`I am a super fan of ${team} : This is the anon function`)
  });
  //with vanilla js we can run a loop, calling the printTeamSupport(element)
  //with Array.forEach(fn) we can do this:

  //create a new array with each team having it's own object
  let soccerTeamsV2 = [];
  
  soccerTeams.forEach(function (team, index) {
    soccerTeamsV2[index] = {};
  soccerTeamsV2[index].name = team;
soccerTeamsV2[index].fanMessage = printTeamSupport(team)
});
console.log(soccerTeamsV2);

  soccerTeams.forEach(printTeamSupport()); //Not a fn call, just passing in a named fn
//uses side effects to achieve logical goal

/**
 * 2
 *
 * Update the code below so that it uses .forEach() instead of a for loop. Inside of printAllComics() you will have to write another, anonymous function.
 */

// do not edit the comics object
const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: 'False Knees', author: 'Joshua Barkman', kind: 'web' },
];

function printAllComics(comics) {
  // Write your code here.
  for (let comic of comics) {
    console.log(`${comic.title} by ${comic.author}`);
  }
}

printAllComics(comics);

/**
 * 3
 * 
 * How can you update your .forEach() code so that it prints out the following?

1. Calvin & Hobbes" by Bill Watterson
2. Zen Pencils" by Gavin Aung Than
3. Nancy" by Olivia James
4. False Knees" by Joshua Barkman
*/

/**
 * 4
 * 
 * How can you update your .forEach() code so that it prints out the following?

(1 out of 4) Calvin & Hobbes" by Bill Watterson
(2 out of 4) Zen Pencils" by Gavin Aung Than
(3 out of 4) Nancy" by Olivia James
(4 out of 4) False Knees" by Joshua Barkman
*/