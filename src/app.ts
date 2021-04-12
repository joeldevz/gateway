import express from 'express';
import cors from "cors";
import helmet from "helmet"
import morgan from "morgan"
import Routes from "./routes/index"
const app = express();

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(Routes)
export default app