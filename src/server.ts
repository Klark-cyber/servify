import dotenv from "dotenv"; 
dotenv.config();
import mongoose from 'mongoose';
import app from "./app" 

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL as string, {})

.then((data)=>{
    console.log("MongoDb connection succeed")
    const PORT = process.env.PORT ?? 3005; //?? 3003 bu agar port mavjud bolmasa 3003 ni tanla buyrugi
    app.listen(PORT, function(){
        console.log(`The server is running successfully on port: ${PORT}`)
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    })
})
.catch(err => console.log('ERROR on connection MongoDB', err)); // {}- connect options
