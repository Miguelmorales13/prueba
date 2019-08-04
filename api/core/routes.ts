import { Router } from 'express'
import ClienteController from './controllers/cliente.controller'

class Routes {
    public route: Router;
    constructor() {
        this.route = Router()
        this.clientes()
    }
    private clientes() {
        this.route.get('/Cliente', ClienteController.getOne)
        this.route.post('/Cliente/', ClienteController.add)
        this.route.put('/Cliente/:id', ClienteController.alter)
    }
}
const routes = new Routes()
export default routes.route