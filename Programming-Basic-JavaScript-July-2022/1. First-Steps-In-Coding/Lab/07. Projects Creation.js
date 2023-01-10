function projects (input){

let forOneProject = 3;

let name = input[0];
let project = Number(input[1]);

let neededHours = project * forOneProject;

console.log(`The architect ${name} will need ${neededHours} hours to complete ${project} project/s.`);

}
projects(["Sanya ",
"9 "]
);