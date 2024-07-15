/* exported getStudentNames */
function getStudentNames(students: { name: string }[]): string[] {
  const arr: string[] = [];
  for (let i: number = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
