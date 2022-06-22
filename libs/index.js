const user = [
  {
    userId: 1,
    name: "Claudia",
    Bio: "I am a woman",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg",
    // converted to 1 single string from an array of strings for ease however might want to refactor in the future
    skillsGood: "JavaScript, node.js, cypress",
    skillsBad: "CSS, React, Backend",
  },
];

const skills = [
  {
    skillId: 1,
    title: "JavaScript",
    star: 4,
    notes: "I be getting good at this",
  },
  {
    skillId: 2,
    title: "CSS",
    star: 1,
    notes: "I be getting bad at this",
  },
  {
    skillId: 3,
    title: "node.js",
    star: 2,
    notes: "I be getting ok at this",
  },
];

const goals = [
  {
    goalId: 1,
    details: "get better at react",
    complete: true,
    notes: "dummy notes",
  },
  {
    goalId: 2,
    details: "get better at backend",
    complete: false,
    notes: "work on the crud routes",
  },
  { goalId: 3, details: "get better at all of it", complete: false, notes: "" },
];

export { user, skills, goals };
