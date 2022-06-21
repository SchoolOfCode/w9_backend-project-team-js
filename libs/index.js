const user = [
  {
    userId: 1,
    name: "Claudia",
    Bio: "I am a woman",
    // converted to 1 single string from an array of strings for ease however might want to refactor in the future
    skillsGood: "JavaScript, node.js, cypress",
    skillsBad: "CSS, React, Backend"
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

export { user, skills };
