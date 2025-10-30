//Mi algoritmo de una Cafetería

const readline = require('readline');

/*Menú de la cafetería
Aquí declaré las variables de los productos y les asigne un precio $$$ */ 

const menu = {
  cafe: 3000,
  te: 2500,
  jugo: 3500,
  pastel: 4000
};

// Esta es la entrada por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Le pregunto al usuario, ¿qué desea?
rl.question("¿Qué productos deseas? (separa por comas: cafe, te, jugo, pastel): ", (pedidoTexto) => {
  rl.question("¿Qué día es hoy?: ", (dia) => {
    let pedido = pedidoTexto.split(',').map(item => item.trim().toLowerCase());
    let total = 0;

    /*Con este bucle sumo los precios de los productos pedidos que sí están en el menú,
      y avisa si pedi algo que no existe.*/
    for (let item of pedido) {
      if (menu[item]) {
        total += menu[item];
      } else {
        console.log(`"${item}" no está en el menú.`);
      }
    }

    //switch con descuentos, según el día.
    switch (dia.toLowerCase()) {
      case 'lunes':
        total *= 0.9;
        break;
      case 'miercoles':
        total *= 0.85;
        break;
      case 'viernes':
        total *= 0.95;
        break;
      default:
        break;
    }

    //Este bloque es el recibo del pedido del usuario (productos, día y total a pagar) y luego finaliza el programa.
    console.log(`\n Pedido: ${pedido.join(', ')}`);
    console.log(`Día: ${dia}`);
    console.log(`Total a pagar: $${total.toFixed(0)}\n`);

    rl.close();
  });
});

//Para ejecutar, tengo que entrar a la carpeta en donde esta cafeteria.js y ejecutar en powershell --> node cafeteria.js


//Aprendiz: Anamaría Alejandra López García
//ADSO - Mujeres Digitales