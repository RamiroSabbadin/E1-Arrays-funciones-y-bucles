const pizza = [
  "harina",
  "agua",
  "levadura",
  "salsa",
  "muzzarella",
  "tomate",
  "provolone",
  "oregano",
  "pesto",
  "aceitunas",
];

const parImpar = (array) => {
  const pares = [];
  const impares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
      par.push(array[i]);
    } else {
      impar.push(array[i]);
    }
  }

  return [pares, impares];
};

parImpar(pizza);

const [pares, impares] = parImpar(pizza);

console.log(
  `-Los ingredientes pares son ${pares}.
-Los ingredientes impares son ${impares}`
);
