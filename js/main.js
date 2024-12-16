// Declaración de constantes y arrays
const inventario = []; // Array para almacenar los artículos y sus cantidades

// Función para agregar artículos al inventario inicial
function inicializarInventario() {
    const cantidadArticulos = parseInt(prompt('¿Cuántos artículos deseas agregar al inventario inicial?'));
    for (let i = 0; i < cantidadArticulos; i++) {
        const nombreArticulo = prompt(`Ingresa el nombre del artículo ${i + 1}:`); //ingresa el nombre suministrado por el usuario y mestra el numero del articulo
        const cantidadArticulo = parseInt(prompt(`Ingresa la cantidad de ${nombreArticulo}:`));//ingersa la cantidad al nombre del articulo suministrado
        
        if (!isNaN(cantidadArticulo) && cantidadArticulo >= 0) { //verifica que haya un numero ingresado por el usuario y sobre todo que sea igual o mayor a 0
            inventario.push({ nombre: nombreArticulo, cantidad: cantidadArticulo });//si se cumple esta condicion ingresa el nombre del articulo y la cantidad a la constante inventario
        } else {  //si no se cumple la condicion
            alert('Cantidad no válida. Inténtalo de nuevo.'); //envia un alert avisando al usuario
            i--; // Repite la iteracion del codigo para volver a solicitar la cantidad
        }
    }
}

// Función para registrar el consumo de artículos
function consumirArticulo() {
    const nombreArticulo = prompt('Ingresa el nombre del artículo que deseas consumir:');//el usuario suministra el nombre del articulo a descontar y se asigna a la constante nombreArticulo
    const articulo = inventario.find(i => i.nombre.toLowerCase() === nombreArticulo.toLowerCase());//busca el primer articulo del inventario cuyo nombre coincida  extrictamente con el nombre ingresado por el usuario  
    //para ello usa toLowerCase para igualar los dos nombres en minusculas y poder compararlos evitando diferencias por mayuscula y minusculas. Luego lo guarda en la constante articulo.
    
    if (articulo) {  //si existe el articulo
        const cantidadConsumo = parseInt(prompt(`¿Cuántas unidades de ${nombreArticulo} deseas consumir?`));//el usuario administre la cantidad de consumo del articulo y se asigna a la constante cantidadConsumo
        if (!isNaN(cantidadConsumo) && cantidadConsumo > 0) {//primero chequea que se haya ingresado una cantidad y que sea mayor a 0
            if (articulo.cantidad >= cantidadConsumo) {//evalua si la cantidad del articulo seleccionado es mayor a la que se desea consumir
                articulo.cantidad -= cantidadConsumo;//realiza el descuento de unidades, es decir consume la cantidad indicada por el usuario
                alert(`Se consumieron ${cantidadConsumo} unidades de ${nombreArticulo}. Quedan ${articulo.cantidad} unidades.`);//devuelve una alerta con la cantidad que se consumio y la cantidad actual del articulo consumido
            } else {
                alert(`No hay suficiente stock de ${nombreArticulo}. Cantidad disponible: ${articulo.cantidad}.`);//en el caso que se desee consumir una cantidad mayor a la existente (no cumple la condicion del if) devuelve ese mensaje
            }
        } else {
            alert('Cantidad no válida.');//en el caso que cumpla la primer condicion pero el numero sea negativo o no valido
        }
    } else {
        alert('Artículo no encontrado en el inventario.');//esta alerta se da cuando no cumple con el primer if y no encuentra el articulo en el inventario
    }
}

// Función para registrar el ingreso de artículos
function ingresarArticulo() {
    const nombreArticulo = prompt('Ingresa el nombre del artículo que deseas ingresar:');//el usuario suministra el nombre del articulo y se almacena en la constante nombreArticulo
    const articulo = inventario.find(i => i.nombre.toLowerCase() === nombreArticulo.toLowerCase());//busca el primer articulo del inventario cuyo nombre coincida  extrictamente con el nombre ingresado por el usuario 
    //para ello usa toLowerCase para igualar los dos nombres en minusculas y poder compararlos evitando diferencias por mayuscula y minusculas. Luego lo guarda en la variable articulo.
    const cantidadIngreso = parseInt(prompt(`¿Cuántas unidades de ${nombreArticulo} deseas ingresar?`));//el usuario suministra la cantidad a ingresar y se asigna en la constante cantidadIngreso
    if (!isNaN(cantidadIngreso) && cantidadIngreso > 0) {//la condicion del if verifica que el numero que ingreso el usuario exista y que sea mayor a 0
        if (articulo) {// en el caso de que haya un articulo, es decir que se haya encontrado el articulo suministrado por el usuario dentro del inventario ingresa al bloque de codigo
            articulo.cantidad += cantidadIngreso; //suma la cantidad del articulo preexistente en el inventario a la cantidad suministrada por el usuario
            alert(`Se agregaron ${cantidadIngreso} unidades de ${nombreArticulo}. Ahora hay ${articulo.cantidad} unidades en total.`);//devuelve un alert con la cantidad agregada por el usuario el nombre del articulo y la contidad final total
        } else {//en el caso de que no se haya encontrado el articulo en el inventario
            inventario.push({ nombre: nombreArticulo, cantidad: cantidadIngreso });//con el metodo push se agrega al inventario existente el nuevo nombre de articulo y su cantidad suministrada por el usuario
            alert(`Se agregó un nuevo artículo: ${nombreArticulo} con ${cantidadIngreso} unidades.`);//devuelve una alerta con el nombre y cantidad del nuevo articulo
        }
    } else {
        alert('Cantidad no válida.');//devuelve esta alerta cuando no cumple la condicion del primer if donde la cantidad no es mayor a 0
    }
}

// Función para mostrar el informe de stock
function mostrarInformeStock() {
    console.log('Informe de Stock Actual');//escribe el titulo en la consola
    console.log('----------------------');
    if (inventario.length === 0) {//analiza la condicion, si el inventario es estrictamente igual a 0 es decir no encuentra elementos en el inventario
        console.log('No hay artículos en el inventario.');// escribe en la consola "No hay art{iculos en el inventario."
    } else {// en el caso de que si haya articulos en el inventario
        inventario.forEach((articulo, index) => {
            console.log(`${index + 1}. Artículo: ${articulo.nombre}, Cantidad: ${articulo.cantidad}`);
        });
    }
}

// Menú principal del sistema de stock
function menuPrincipal() {
    let salir = false;
    while (!salir) {
        const opcion = prompt('Selecciona una opción:\n1. Inicializar Inventario\n2. Consumir Artículo\n3. Ingresar Artículo\n4. Mostrar Informe de Stock\n5. Salir');
        
        switch (opcion) {
            case '1':
                inicializarInventario();
                break;
            case '2':
                consumirArticulo();
                break;
            case '3':
                ingresarArticulo();
                break;
            case '4':
                mostrarInformeStock();
                break;
            case '5':
                alert('Saliendo del sistema de stock.');
                salir = true;
                break;
            default:
                alert('Opción no válida. Por favor, selecciona una opción válida.');
        }
    }
}

// Invocación de la función principal para iniciar el sistema
menuPrincipal();
