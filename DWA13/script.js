const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// 1. Use forEach to console log each name to the console.
names.forEach(name => {
  console.log(name);
});

// 2. Use forEach to console log each name with a matching province.
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 3. Using map, loop over all province names and turn the string to uppercase.
const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesUpperCase);

// 4. Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 5. Using sort, sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word "Cape" in them.
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// 7. Create a boolean array using map and some to determine whether a name contains the character "S".
const nameContainsS = names.map(name => name.includes("S"));
console.log(nameContainsS);

// 8. Using only reduce, turn the above arrays into an object that indicates the province of an individual.
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);
