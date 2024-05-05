// const a = Number(prompt('Zadejte první číslo: '));
// const b = Number(prompt('Zadejte druhé číslo: '));

// const max2 = (a, b) => {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// };

// document.body.innerHTML += `Větší číslo z vámi zadaných dvou čísel je číslo: ${max2(
//   a,
//   b,
// )} `;

const a = Number(prompt('Zadejte první číslo: '));
const b = Number(prompt('Zadejte druhé číslo: '));
const c = Number(prompt('Zadejte třetí číslo: '));

const max3 = (a, b, c) => {
  if (a > b) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};

document.body.innerHTML += `Větší číslo z vámi zadaných tří čísel je číslo: ${max3(
  a,
  b,
  c,
)} `;
