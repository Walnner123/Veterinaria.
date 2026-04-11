import { Mascota } from "./Mascota.ts";

export class Veterinaria {
    private mascotas: Mascota[] = [];
    private contador: number = 1;
    private generarID(): string {
        const id = "AB" + this.contador;
        this.contador++;
        return id;
    }

    registrarMascota(nombreDueno: string, nombreMascota: string, edad: number, peso: number) {

        const id = this.generarID();

        const mascota = new Mascota(
            id,
            nombreDueno,
            nombreMascota,
            edad,
            peso
        );

        this.mascotas.push(mascota);

        console.log("Mascota registrada con ID:", id);
    }

    buscarMascota(id: string): Mascota | null {

        for (let mascota of this.mascotas) {

            if (mascota.getId() === id) {
                return mascota;
            }

        }

        return null;
    }

    modificarMascota(id: string, nombreDueno: string, nombreMascota: string, edad: number, peso: number) {

        const mascota = this.buscarMascota(id);

        if (mascota) {

            mascota.setNombreDueno(nombreDueno);
            mascota.setNombreMascota(nombreMascota);
            mascota.setEdad(edad);
            mascota.setPeso(peso);

            console.log("Mascota actualizada");

        } else {

            console.log("Mascota no encontrada");

        }
    }
}
