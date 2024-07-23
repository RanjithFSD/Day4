let myResume={
    "basics": {
      "name": "Ranjith Kumar Kalimuthu",
      "email": "kranjith868@gamil.com",
      "phone": 9043634270,
      "degree": "B.E",
      "location": {
        "address": "Keelappavoor",
        "postalCode": 627806,
        "city": "Tenkasi",
        "state": "Tamilnadu",
        "country": "India"
      },
      },
    "work": [
      {
        "company": "Kitkool",
        "position": "Technical Recruiter",
        "startDate": "Feb 2024",
        "endDate": "Till Now",
        "summary": "Highly skilled US Technical Recruiter with over 2 years of experience in sourcing, screening, and placing IT professionals in various roles such as software developers, network engineers, and system administrators. Proven track record of reducing time-to-hire by 30% and increasing qualified applicant flow by 25% through effective recruitment strategies and data management systems. Adept at utilizing CATS ATS platform for end-to-end recruitment processes and maintaining a talent pipeline of over 500 passive candidates. Strong collaborator with hiring managers to ensure alignment on candidate qualifications and cultural fit. Achieved a 95% acceptance rate on job offers and seamless onboarding of new hires. Experienced in generating detailed recruitment reports and analytics for continuous improvement.",
      },
    ],
    "education": [
      {
        "institution": "Einstein College Of Engineering",
        "department": "Electronics and communication Engineering",
        "studyType": "Fulltime",
        "batch": 2015,
        "gpa": 7.2,
      }
    ],
    "skills": [
      {
        "name": "Javascript",
        "level": "begginer",
        "project": [
          "WildLens Tours Using MERN Stack"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "Coding,",
      }
    ]
  }
  console.log(myResume);

  console.log("Using for loop:");
  for (let key in myResume) {
  console.log(`${key}: ${myResume[key]}`);
}


  console.log("\nUsing for...in loop:");
  for (let key in myResume) {
  if (myResume.hasOwnProperty(key)) {
    console.log(`${key}: ${myResume[key]}`);
  }
}


  console.log("\nUsing for...of loop:");
  for (let value of Object.values(myResume)) {
  console.log(value);
}

  console.log("\nUsing forEach loop for education:");
  myResume.education.forEach((education) => {
  console.log(education);
});

  console.log("\nUsing forEach loop for experience:");
  myResume.work.forEach((work) => {
  console.log(work);
});

  console.log("\nUsing forEach loop for skills:");
  myResume.skills.forEach((skills) => {
  console.log(skills);
});