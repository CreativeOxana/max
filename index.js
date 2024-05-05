const a = Number(prompt('Zadejte první číslo: '));
const b = Number(prompt('Zadejte druhé číslo: '));

const max2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

document.body.innerHTML += `Větší číslo z vámi zadaných dvou čísel je číslo: ${max2(
  a,
  b,
)} `;
