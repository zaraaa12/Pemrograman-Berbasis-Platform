let studentsScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    },
];
var highest = studentsScore [0];

    studentsScore.forEach(student => {
        if  (student.score > highest.score) {
            highest = student;

        }
});