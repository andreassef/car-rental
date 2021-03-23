import express from 'express';
import { router } from './routes';
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());

import swaggerFile from "./swagger.json";
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
    console.log('Server up on port 3333');
});