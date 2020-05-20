const submission = [{name: 'Jane', score: 95, date: '2020-01-24', pass: true}, 
{name: 'Joe', score: 77, date: '2018-05-14', pass: true},
{name: 'Jack', score: 59, date: '2019-07-05', pass: false},
{name: 'Jill', score: 88, date: '2020-04-22', pass: true}]

// console.log (submission);
// End of #1

let addSubmission = (array, newName, newScore, newDate) => {
    if (newScore >= 60) {
        pass = true;
    } else {
        pass = false;
    }
    let person = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: pass,
    };
    array.push(person);
};
addSubmission(submission, 'Michael', 59, "2020-05-20");


// console.log(submission);
// End of #2

let deleteSubmissionByIndex = (array, index) => {
    array.splice(index);
}

deleteSubmissionByIndex(submission, 4);
// console.log(submission);
// End of #3

let deleteSubmissionByName = (array, name) => {
    array.splice(name);
}

deleteSubmissionByName(submission, 'Michael');
console.log(submission);

// End of #4
let editSubmissionByName = (array, name) => {
    array.pop(name);
}

editSubmissionByName(submission, 'Michael');
console.log(submission);

// End of #5

let findSubmissionByName = (array, name) => {
    array.findIndex(name);
}

findSubmissionByName(submission, 'Michael');
console.log(submission);

// End of #6

let findAverageScore = total = 0;
for(var i = 0; i < score.length; i++) {
    total += score[i];
}
var avg = total / score.length;

// End of #7

const findLowestScore = pass.filter(function(person) {
    return score >= 60;
  });
// End of #8 

const filterPassing = pass.filter(function(person) {
    return score >= 60;
  });
  let filterPassing = passing.filter(true);
// End of #9

let filter90AndAbove = submission.filter((obj) => {
    let flag = true;
    Object.values(obj).forEach((val) => {
      if(String(val).indexOf("90") <= 1) {
        flag = true;
        return;
      }    
    });
    if(flag) return obj;
  });


console.log(submission)

// End of #10
// End of Lab