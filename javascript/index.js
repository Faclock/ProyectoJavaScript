let compra = true,
  total = 0,
  descuento = 0;

let puma = {
  precio: 5000,
  stock: 2,
};

let adidas = {
  precio: 8000,
  stock: 2,
};

let jordan = {
  precio: 10000,
  stock: 2,
};

let nike = {
  precio: 7500,
  stock: 2,
};

function descuentos(total) {
  if (total > 20000) {
    descuento = total * 0.2;
    total = total - descuento;
  } else if (total <= 20000 && total > 10000) {
    descuento = total * 0.15;
    total = total - descuento;
  } else {
    descuento = total * 0.1;
    total = total - descuento;
  }
  return total;
}

function opciones(opcion) {
  switch (opcion) {
    case 1:
      if (puma.stock > 0) {
        alert(
          `el precio es de: $${puma.precio} y el stock es de: ${puma.stock}`
        );
        let comprar = prompt("¿desea comprar el producto? (si/no):");
        if (comprar === "si") {
          total += puma.precio;
          alert(`añadido al carrito`);
          puma.stock = puma.stock - 1;
        }
      } else {
        alert(`no hay stock del producto`);
      }
      break;
    case 2:
      if (adidas.stock > 0) {
        alert(
          `el precio es de: $${adidas.precio} y el stock es de: ${adidas.stock}`
        );
        let comprar = prompt("¿desea comprar el producto? (si/no):");
        if (comprar === "si") {
          total += adidas.precio;
          alert(`añadido al carrito`);
          adidas.stock = adidas.stock - 1;
        }
      } else {
        alert(`no hay stock del producto`);
      }
      break;
    case 3:
      if (jordan.stock > 0) {
        alert(
          `el precio es de: $${jordan.precio} y el stock es de: ${jordan.stock}`
        );
        let comprar = prompt("¿desea comprar el producto? (si/no):");
        if (comprar === "si") {
          total += jordan.precio;
          alert(`añadido al carrito`);
          jordan.stock = jordan.stock - 1;
        }
      } else {
        alert(`no hay stock del producto`);
      }
      break;
    case 4:
      if (nike.stock > 0) {
        alert(
          `el precio es de: $${nike.precio} y el stock es de: ${nike.stock}`
        );
        let comprar = prompt("¿desea comprar el producto? (si/no):");
        if (comprar === "si") {
          total += nike.precio;
          alert(`añadido al carrito`);
          nike.stock = nike.stock - 1;
        }
      } else {
        alert(`no hay stock del producto`);
      }
      break;
    case 5:
      compra = false;
      break;
  }
}
while (compra) {
  let opcion = parseInt(
    prompt(
      "Ingrese el numero de la opcion para mas informacion: 1.zapatillas Puma, 2.zapatillas Adidas, 3.zapatillas Jordan, 4.zapatillas Nike, 5.terminar compra"
    )
  );
  opciones(opcion);

  if (compra === false) {
    total = descuentos(total);
  }
}
alert(
  `El total de su compra es de: $${total}, el descuento aplicado es de: $${descuento}`
);
