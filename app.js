import express from "express"
import dotenv from "dotenv"
import SchoolRoutes from "./routes/schoolRoutes.js"
dotenv.config();

const app=express();

app.use(express.json());
app.use('/api',SchoolRoutes)

const PORT =5000

app.get('/', (req, res) => {
  res.send('Server is working ✅');
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})