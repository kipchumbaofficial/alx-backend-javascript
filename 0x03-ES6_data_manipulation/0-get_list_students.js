export default function getListStudents() {
  const arrayOfObjects = [];

  arrayOfObjects.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  arrayOfObjects.push({ id: 2, firstName: 'James', location: 'Columbia' });
  arrayOfObjects.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return arrayOfObjects;
}
