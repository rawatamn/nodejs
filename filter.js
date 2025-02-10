const students=[
    {
        name:"aman",
        no:80
    },
    {
        name:"rahul",
        no:81
    },
    {
        name:"ashish",
        no:85
    }
];
const studentfilter=students.filter(t=>
    t.no>80
)
console.log(studentfilter)