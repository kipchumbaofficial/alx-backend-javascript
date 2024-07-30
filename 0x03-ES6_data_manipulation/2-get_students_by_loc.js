export default function getStudentsByLocation(students, city) {
  const retVal = students.filter((element) => element.location === city);
  return retVal;
}
