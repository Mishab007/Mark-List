// MARK LIST
const student : {name:string, rollNo:number, englishMark:number, mathsMark:number, physicsMark:number, totalMark:number}[] = [{
    name: "Adhil Khan",
    rollNo: 1,
    englishMark: 16,
    mathsMark: 3,
    physicsMark: 8,
    totalMark: 27
},
{
    name: "Riyan",
    rollNo: 2,
    englishMark: 13,
    mathsMark: 15,
    physicsMark: 16,
    totalMark: 44
},
{
    name: "Rabeeh",
    rollNo: 3,
    englishMark: 12,
    mathsMark: 17,
    physicsMark: 14,
    totalMark: 43
}];

for(let i:number = 0; i< student.length; i++){
    if (student[i].totalMark >= 40) {
        console.log(student[i].name + " " + "is passed" );
    }else{
        console.log(student[i].name + " " + "is failed");
    }
}


