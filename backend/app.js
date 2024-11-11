import express, { urlencoded } from "express"
import authRoute from "./routes/auth-route.js"
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRoute from "./routes/product-route.js";
import categoryRoute from "./routes/category-route.js";
import blogRoute from "./routes/blog-route.js";
import sliderRoute from "./routes/slider-route.js";
import path from "path";
import url from "url";
import messageRoute from "./routes/message-route.js";

const app = express();
export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
connectDB();
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


app.listen(8000, () => {
  console.log('server running');
})