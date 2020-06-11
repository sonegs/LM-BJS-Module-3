const normalIva = 0.21;
const foodIva = 0.1;
const bookIva = 0.04;
const product = { count: 3, price: 12.55, type: "comida" };

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

let result, rest, neto, childrenTask;

// Se llama a las funciones para ver los resultados en la consola
// He redondeado los resultados para no obtener floats con muchos dígitos
getNomina(empleado);
getTotalVat(product);
printProductPrice(product);

// Calcular la nómina

function getNomina(empleado) {

    if (empleado.bruto < 24000) {
        rest = 0.08;
    } else if (empleado.bruto < 34000) {
        rest = 0.16;
    } else if (empleado.bruto >= 34000) {
        rest = 0.30;
    } else {
        rest = 0;
    }

    childrenTask = empleado.hijos > 0 ? rest - 0.02 : rest;
    neto = empleado.bruto - (empleado.bruto * childrenTask);
    console.log("El empleado percibe " + neto.toFixed(2) + "€ anuales y " + (neto / empleado.pagas).toFixed(2) + "€ mensuales");
}

// Calcular el precio total del producto

function getTotal(product) {
    let final = product.count > 0 ? product.count * product.price : 0;
    return final.toFixed(2);
}

// Calcular el IVA

function getVat(product) {
    switch (product.type) {
        case "comida":
            result = product.price * foodIva;
            break;
        case "libros":
            result = product.price * bookIva;
            break;
        default:
            result = product.price * foodIva;
            break;
    }
    return result.toFixed(2);
}

// Precio total de productos con IVA

function getTotalVat(product) {
    return product.count > 0 ? (product.count * getVat(product)).toFixed(2) : 0;
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = parseFloat(subtotal) + parseFloat(vat); // al redondear los resultados, se convierten en string. Con parseFloat, se convierte en números de nuevo

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}