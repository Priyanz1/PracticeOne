const express=require('express');
const cors=require('cors');
const dbConnect=require('./db/dbConnect');
const app=express();
const ProductsRoutes=require('./routes/ProductsRoutes');
dbConnect();
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
    }
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/products',ProductsRoutes);


module.exports=app;

