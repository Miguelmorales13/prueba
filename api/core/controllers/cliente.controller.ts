import Cliente from "../models/cliente.model";
import { Request, Response } from "express";
class ClienteController {
    static instance: ClienteController
    private clientes: Object[] = [];
    private constructor() { }
    public static getInstance(): ClienteController {
        if (!ClienteController.instance) ClienteController.instance = new ClienteController()
        return ClienteController.instance
    }
    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const cliente = await Cliente.findAll();
            res.json(cliente);
        }
        catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    }
    async add(req: Request, res: Response): Promise<void> {
        try {
            // const cliente = await Cliente.create({
            //     Nombre: req.body.Nombre,
            //     Apellidos: req.body.Apellidos,
            //     Nombre_Usuario: req.body.Nombre_Usuario,
            //     Correo_Electronico: req.body.Correo_Electronico,
            //     Contrasena: req.body.Correo_Electronico
            // });
            const cliente = await Cliente.create({
                Nombre: req.body.Nombre,
                Apellidos: req.body.Apellidos,
                Nombre_Usuario: req.body.Nombre_Usuario,
                Correo_Electronico: req.body.Correo_Electronico,
                Contrasena: req.body.Contrasena
            });
            res.json({ id: cliente.id });
        }
        catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    }
    async alter(req: Request, res: Response) {
        try {
            // const cliente = await Cliente.update({
            //     Edad: 39,
            //     Estatura: 1.80,
            //     Peso: 60,
            //     GEB: 1500
            // }, {
            //         where: {
            //             id: req.params.id
            //         }
            //     });
            const cliente = await Cliente.update({
                Edad: req.body.Edad,
                Estatura: req.body.Estatura,
                Peso: req.body.Peso,
                GEB: req.body.GEB
            }, {
                    where: {
                        id: req.params.id
                    }
                });
            res.json({ id: req.params.id });
        }
        catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    }
}
export default ClienteController.getInstance()