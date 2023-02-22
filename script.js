//Simulador para calcular el monto total de tu compra, en este caso una tienda de electronica
function calcularPrecio(
  precioArt,
  cantidadArt,
  porcentajeDescuento,
  costoEnvio
) {
  //calculo los descuentos
  let descuento = (precioArt * porcentajeDescuento) / 100;
  //se lo aplico al precio
  let precioConDescuento = precioArt - descuento;
  //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de prendas
  return precioConDescuento * cantidadArt + costoEnvio;
}

const envio = 800; //valor aproximado del costo de envio promedio dentro de CBA

//le pedimos al usuario el precio del articulo, la cantidad y el porcentaje del descuento
let articulo = parseFloat(
  prompt("Ingrese el precio del articulo que desea comprar:")
);
let cantidad = parseInt(
  prompt("Ingrese la cantidad de unidades que desea comprar de este articulo:")
);
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")); //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(articulo, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");
