const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

let bootCamp = () => {
  const pedro = students[0].name;
  const maria = students[1].name;
  const js = courses[0].title;
  const html_css = courses[1].title;

  const phrase = `- ${js}\n  *${pedro}\n- ${html_css}\n  *${pedro}\n  *${maria}`;
  const phrase2 = `- ${pedro}\n  *${js}\n  *${html_css}\n- ${maria}\n  *${html_css}`;
  return console.log(phrase), console.log(phrase2);
};

bootCamp();
