export default function getListStudentIds(arrayOfObjects) {
  const retval = [];

  if (Array.isArray(arrayOfObjects)) {
    arrayOfObjects.map((element) => retval.push(element.id));
  }

  return retval;
}
