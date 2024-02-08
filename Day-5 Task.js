1. Create your own resume in JSON Format.

let myResume={
  "basics": {
    "name": "Surya N",
    "email": "sharksurya11032001@gamil.com",
    "phone": 9600526196,
    "degree": "B.E",
    "location": {
      "address": "Mathaankoil 3rd street",
      "postalCode": 627811,
      "city": "Tenkasi",
      "state": "Tamilnadu",
      "country": "India"
    },
    "profiles": [
      {
        "website": "http://linkedin.com/in/surya-n-534bb1207",
        "github":"https://github.com/Surya-Zen"
      }
    ]
  },
  "work": [
    {
      "company": "Sensedge Transportation Systems",
      "position": "Assistant Engineer",
      "startDate": "15-05-2019",
      "endDate": "Till Now",
      "summary": "i am Assistant engineer handling various task and gaining lots of experience",
    },
  ],
  "education": [
    {
      "institution": "VMKV Engineering college",
      "department": "ECE",
      "studyType": "fulltime",
      "batch start year": 2021,
      "batch end year": 2024,
      "gpa": 7.5,
    }
  ],
  "skills": [
    {
      "name": "python,javascript",
      "level": "beginer",
      "project": [
        "automatic attendance maintaing system using python language"
      ]
    }
  ],
  "languages": [
    {
      "language": "Tamil,Enlish,Telugu,Hindi",
    }
  ],
  "interests": [
    {
      "name": "script writter,youtuber,",
    }
  ]
}
console.log(myResume);

-----------------------------------------------------------------------------------------

2. JSON iterate for overall loops.

var json = [{
    "Name" : "Surya", 
    "Age"   : "23",
    "Proffession": "Engineer",
    "Passion": "Director"

},
{
  "Name" : "Swetha", 
  "Age"   : "22",
  "Proffession": "Master",
  "Passion": "Teacher"
}];
//for loop:
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each :
 json.forEach(function(obj) { console.log(obj.msg); });

//for In:
 for (var key in json) {
 if (json.hasOwnProperty(key)) {
   console.log(json[key].id);
console.log(json[key].msg);
 
 }
 }
// for Of:
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
---------------------------------------------------------------------------------------