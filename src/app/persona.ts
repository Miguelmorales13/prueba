export class Persona {
    private nombre: string = "";
    private edad: number = 0;
    private NSS: string;
    private sexo: string = "H";
    private peso: number = 0;
    private altura: number = 0;

    constructor();
    constructor(nombre: string, edad: number, sexo: string, peso?: number, altura?: number);
    constructor(nombre?: string, edad?: number, sexo?: string, peso?: number, altura?: number, NSS?: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.NSS = NSS;
        this.peso = peso;
        this.altura = altura;
        this.generarNSS()
    }
    calculaIMC(): number {
        const ideal = this.peso / (this.altura * this.altura)
        if (this.sexo == "H") {
            if (ideal >= 20 && ideal <= 25) {
                return 0
            } else if (ideal < 20) {
                return -1
            } else {
                return 1
            }
        } else {
            if (ideal >= 19 && ideal <= 24) {
                return 0
            } else if (ideal < 19) {
                return -1
            } else {
                return 1
            }
        }
    }
    esMayorDeEdad(): boolean {
        return this.edad >= 18 ? true : false
    }
    comprobarSexo(sexo: string): boolean {
        if (sexo.length > 1) {
            return false;
        }
        return (sexo != "H" && sexo != "M") ? false : true;
    }
    toString(): any {
        return JSON.stringify({
            nombre: this.nombre,
            edad: this.edad,
            NSS: this.NSS,
            sexo: this.sexo,
            peso: this.peso | 0,
            altura: this.altura | 0
        });
    }
    generarNSS() {
        const digitos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        this.NSS = this.mezclar(digitos).slice(0, 8).join().replace(/,/g, "")
    }
    mezclar(arreglo): Array<string> {
        var i,
            j,
            temp;
        for (i = arreglo.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arreglo[i];
            arreglo[i] = arreglo[j];
            arreglo[j] = temp;
        }
        return arreglo;
    };
    setNombre(nombre: string): void {
        this.nombre = nombre
    }
    setEdad(edad: number): void {
        this.edad = edad
    }
    setSexo(sexo: string): void {
        this.sexo = sexo
    }
    setPeso(peso: number): void {
        this.peso = peso
    }
    setAltura(altura: number): void {
        this.altura = altura
    }
}
