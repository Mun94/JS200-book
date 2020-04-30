function callRoll(students) {
    if(!Array.isArray(students)) return;

    students.forEach((student) => {
        console.log(`AA, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);