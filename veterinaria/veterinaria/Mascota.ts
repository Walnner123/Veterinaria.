export class Mascota {

    private id: string;
    private nombreDueno: string;
    private nombreMascota: string;
    private edad: number;
    private peso: number;

    constructor(id: string, nombreDueno: string, nombreMascota: string, edad: number, peso: number) {

        this.id = id;
        this.nombreDueno = nombreDueno;
        this.nombreMascota = nombreMascota;
        this.edad = edad;
        this.peso = peso;
    }

    getId(): string {
        return this.id;
    }

    getNombreDueno(): string {
        return this.nombreDueno;
    }

    getNombreMascota(): string {
        return this.nombreMascota;
    }

    getEdad(): number {
        return this.edad;
    }

    getPeso(): number {
        return this.peso;
    }

    setNombreDueno(nombre: string) {
        this.nombreDueno = nombre;
    }

    setNombreMascota(nombre: string) {
        this.nombreMascota = nombre;
    }

    setEdad(edad: number) {
        this.edad = edad;
    }

    setPeso(peso: number) {
        this.peso = peso;
    }

    mostrarDatos() {
        console.log("\n--- Perfil Mascota ---");
        console.log("ID:", this.id);
        console.log("Dueño:", this.nombreDueno);
        console.log("Mascota:", this.nombreMascota);
        console.log("Edad:", this.edad);
        console.log("Peso:", this.peso);
    }
}
