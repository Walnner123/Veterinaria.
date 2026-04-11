import { Veterinaria } from "./Veterinaria.ts";
const veterinaria = new Veterinaria();

function menu() {

    let opcion = prompt(
        "\n1 Registrar mascota\n" +
        "2 Buscar mascota\n" +
        "3 Modificar mascota\n" +
        "4 Salir"
    );

    switch (opcion) {

        case "1":

            const dueno = prompt("Nombre del dueño:");
            const mascota = prompt("Nombre de mascota:");
            const edad = Number(prompt("Edad mascota:"));
            const peso = Number(prompt("Peso mascota:"));

            veterinaria.registrarMascota(
                dueno!,
                mascota!,
                edad,
                peso
            );

            menu();
            break;

        case "2":

            const id = prompt("ID de la mascota:");

            const resultado = veterinaria.buscarMascota(id!);

            if (resultado) {

                resultado.mostrarDatos();

            } else {

                console.log("No se encontró la mascota");

            }

            menu();
            break;

        case "3":

            const idModificar = prompt("ID:");

            const nuevoDueno = prompt("Nuevo dueño:");
            const nuevaMascota = prompt("Nuevo nombre mascota:");
            const nuevaEdad = Number(prompt("Nueva edad:"));
            const nuevoPeso = Number(prompt("Nuevo peso:"));

            veterinaria.modificarMascota(
                idModificar!,
                nuevoDueno!,
                nuevaMascota!,
                nuevaEdad,
                nuevoPeso
            );

            menu();
            break;

        case "4":
            console.log("Programa terminado");
            break;

        default:
            console.log("Opción inválida");
            menu();
    }

}

menu();
