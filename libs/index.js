const user = [
  {
    userId: 1,
    name: "Dwayne (The Rock) Johnson",
    Bio: "I have switched from power lifting to learning tech!",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg",
    // converted to 1 single string from an array of strings for ease however might want to refactor in the future
    skillsGood: "JavaScript, node.js, cypress",
    skillsBad: "CSS, React, Design",
  },
];

const skills = [
  {
    skillId: 1,
    title: "JavaScript",
    star: 4,
    notes:
      "I have a good understanding of fundamentals and coming up with solutions to logical problems",
  },
  {
    skillId: 2,
    title: "CSS",
    star: 1,
    notes: "I cannot place component nicely on an app",
  },
  {
    skillId: 3,
    title: "node.js",
    star: 3,
    notes: "I like building servers!",
  },
  {
    skillId: 4,
    title: "Design",
    star: 2,
    notes: "I don't have a good eye for design",
  },
];

const goals = [
  {
    goalId: 1,
    details: "Get better at CSS by collaborating with someone good at CSS",
    complete: false,
    notes: "",
  },
  {
    goalId: 2,
    details: "Continuous development on JavaScript concepts",
    complete: false,
    notes: "",
  },
  {
    goalId: 3,
    details: "Collaborate with as many bootcampers as possible",
    complete: false,
    notes: "",
  },
];

export { user, skills, goals };
