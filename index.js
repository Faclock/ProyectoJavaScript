
let buying = true,
    total = 0,
    discount = 0

const getDiscount = total => {
    if (total > 150000){
        discount = total * 0.20
        total = total - discount
    }else if (total <= 30000 && total > 40000){
        discount = total * 0.15
        total = total - discount
    }else{
        discount = total * 0.10
        total = total - discount
    }
    return total
}

const addToCart = product => {
    switch (product) {
        case 1:
            total += 51700
            break;
        case 2:
            total += 42000
            break;
        case 3:
            total += 34000
            break;
        case 4:
            total += 74500
            break;
    }
}

while (buying) {
    let products = parseInt(prompt("Elija que producto desea agregar al carrito: 1.Samsung Galaxy A51($51.700), 2.Motorola Moto E7 Plus($42.000), 3.Alcatel 1 Ultra($34.000), 4.Xiaomi Redmi Note 11($74.500)"))
    addToCart(products)

    let keepBuying = prompt("¿Desea seguir comprando? (si/no):")
    while (keepBuying !== "no" && keepBuying !== "si") {
        keepBuying = prompt("Responda: si/no")
    }

    if (keepBuying === "no") {
        buying = false
        total = getDiscount(total)
    }
}

alert(`El total de su compra es de: $${total}. Ahorrado: $${discount}`)