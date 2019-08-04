import { Model, DataTypes, BuildOptions } from 'sequelize'
import sequelize from "../../db";
interface Cliente extends Model {
    readonly id: number
    readonly Nombre: string;
    readonly Apellidos: string;
    readonly Nombre_Usuario: string;
    readonly Correo_Electronico: string;
    readonly Contrasena: string;
    readonly Edad: number;
    readonly Estatura: number;
    readonly Peso: number;
    readonly GEB: number;
}
type ClienteStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Cliente;
}
const ClienteModel = <ClienteStatic>sequelize.define('clientes', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Nombre: { type: DataTypes.STRING(80) },
    Apellidos: { type: DataTypes.STRING(80) },
    Nombre_Usuario: { type: DataTypes.STRING(80) },
    Correo_Electronico: { type: DataTypes.STRING(80) },
    Contrasena: { type: DataTypes.STRING(80) },
    Edad: { type: DataTypes.INTEGER },
    Estatura: { type: DataTypes.DECIMAL(3, 2) },
    Peso: { type: DataTypes.INTEGER },
    GEB: { type: DataTypes.INTEGER },
}, { timestamps: false, sequelize });

export default ClienteModel;