const basePizza = ["masa piedra, el queso derretido y la salsa natural de tomate"];
let ingredientes = ["pollo", "tocino", "aceitunas", "champiñones", "piña", "pimentón"];

let nombreUsuario=prompt("Bienvenidos a 'Delivery`s Pizza'. Ingrese su nombre."); 
console.log("Bienvenido, " + nombreUsuario + ", a una nueva dimensión del sabor!!!");
alert("Hola, "+ nombreUsuario + ", para dar paso a tu orden. Haz clic en 'Aceptar'");

seleccionarIngredientes(ingredientes);

  function seleccionarIngredientes(ingredientes) {
    let seleccionados = [];
    
    while (seleccionados.length < 3) {
      let ingrediente = prompt(`Ingresa el ingrediente ${seleccionados.length + 1} de la lista: ${ingredientes.join(', ')}`).toLowerCase();
      if (ingrediente === null) {
        break;
      } else if (!ingredientes.includes(ingrediente)) {
        alert(`El ingrediente "${ingrediente}" no está en la lista.`);
      } else if (seleccionados.includes(ingrediente)) {
        alert(`Ya seleccionaste el ingrediente "${ingrediente}".`);
      } else {
        seleccionados.push(ingrediente);
      }
    }
  
    confirm(`Seleccionaste los ingredientes: ${seleccionados.join(', ')}.`);
    console.log(seleccionados);
    document.write(`Para acompañar la ` + basePizza + `. <br><strong> Tus ingredientes seleccionados son: ${seleccionados.join(", ")}.</strong>`);
  }
    
  

  
 

  
 

  
