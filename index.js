console.log(1 === 9);

console.log("From first branch");
console.log("I am from second feature branch");

const reset = "git reset --soft <commit-hash>"; // what it will do means we have done so many commits 
// lets say we have five commits we dont required last three commits so we can use the above command
// and code will be in stagging area so u can add and commit by doing some changes

const reset1 = "git reset --hard <commit-hash>"; // it will do same but it will delete those commits
// and code as well so need to use wisly;

const revert = '';  

const stash = "git stash"; // the code what we did'nt added and commited will goes under some file
// using git stash list we can see those id's based on this we can apply those stash to get out code
// git stash apply <stashID>