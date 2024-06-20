import express from "express";
import {env} from "./default.js";
import route from "../routes/index.routes.js";
import pgService from "../services/pg.service.js";
import middleware from "../middleware/index.middlewares.js";
import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

export default class Server {
    constructor() {
        this.app = express();
        this.port = env.port;
    }

    connectionDB() {
        new pgService();
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        this.app.use(middleware);
        this.app.use(express.json({limit: '50mb'}));
        this.app.use(express.urlencoded({limit: '50mb', extended: true}));
    }

    routes() {
        this.app.use(route);
    }

    runServer() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`);
        })
    }

    load() {
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}