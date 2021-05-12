import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' })
import app from "./app"
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("https://localhost:" + PORT)
})