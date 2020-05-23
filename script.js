const submission = [{name: 'Jane', score: 95, date: '2020-01-24', passed: true}, 
{name: 'Joe', score: 77, date: '2018-05-14', passed: true},
{name: 'Jack', score: 59, date: '2019-07-05', passed: false},
{name: 'Jill', score: 88, date: '2020-04-22', passed: true}]

// console.log (submission);
// End of #1

let addSubmission = (array, newName, newScore, newDate) => {
    if (newScore >= 60) {
        passed = true;
    } else {
        passed = false;
    }
    let person = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: passed,
    };
    array.push(person);
};
addSubmission(submission, 'Michael', 59, "2020-05-20");


console.log(submission);
console.log('End #2')
// End of #2

let deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

deleteSubmissionByIndex(submission, 2);
console.log(submission);
console.log('End #3')
// End of #3

let deleteSubmissionByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name
      });
    array.splice(index, 1)
}

deleteSubmissionByName(submission, 'Michael');
console.log(submission);
console.log('End #4');

// End of #4
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}
// The second parameter is an index in the submissions array:
editSubmission(submission, 2, 78);
console.log(submission);
console.log('End #5');

// End of #5

let findSubmissionByName = (array, name) => {
    let foundPerson = array.find(student => {
        return student.name === name;
    })
    return foundPerson;
}

console.log(findSubmissionByName(submission, 'Jill'));
console.log('End #6');

// End of #6

const findAverageQuizScore = (array) => {
    let total = 0;
    for (let person of array) {
        total += person.score;
    }
    return total / array.length
}
console.log(findAverageQuizScore(submission));
console.log('End #7')
// End of #7

const findLowestScore = (array) => {
    let lowestScore = array[0];
    array.forEach(person => {
        if (person.score < lowestScore.score) {
            lowestScore = person;
        }
    })
    return lowestScore
}
console.log(findLowestScore(submission));
console.log('End #8');
// End of #8 

const filterPassing = (array) => {
    return array.filter(person => {
        return person.score >= 60;
    })
}
console.log(filterPassing(submission));
console.log('End #9');
// End of #9

let filter90AndAbove = submission.filter((obj) => {
    return array.filter(person => {
        return person.score >= 90;
    })
});


console.log(submission)

// End of #10
// End of Lab