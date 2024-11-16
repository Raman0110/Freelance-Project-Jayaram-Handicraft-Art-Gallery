import express, { urlencoded } from "express"
import authRoute from "./routes/auth-route.js"
import connection from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRoute from "./routes/product-route.js";
import categoryRoute from "./routes/category-route.js";
import blogRoute from "./routes/blog-route.js";
import sliderRoute from "./routes/slider-route.js";
import path from "path";
import url from "url";
import messageRoute from "./routes/message-route.js";
import sequelize from "./config/sequelize.js";
import Product from './models/product-model.js';
import Category from './models/category-model.js';


const app = express();
export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
app.use(cors({ origin: "http://192.168.1.71:5173", credentials: true }));

app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/blog', blogRoute);
app.use('/api/slider', sliderRoute);
app.use('/api/message', messageRoute);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error creating tables: ', error);
  });

Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
app.listen(8000, "0.0.0.0", () => {
  console.log('server running');
})