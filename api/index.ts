import express, { Application } from "express";
import morgan from 'morgan'
import cors from 'cors'
import routes from "./core/routes";
import { urlServer } from "./core/globales";
class Server {
    private app: Application;
    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }
    private config(): void {
        this.app.set('port', process.env.PORT || 8091)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static(__dirname + '/dist'))
    }
    private routes() {
        this.app.use('/NutriNET', routes)
    }
    async start(): Promise<void> {
        try {
            await this.app.listen(this.app.get('port'), process.env.HOST || urlServer)
            console.log('Conection successfull in port ', "http://" + urlServer + ":" + this.app.get('port'));

        } catch (error) {
            console.log(error);
        }
    }
}
const server = new Server()
server.start()