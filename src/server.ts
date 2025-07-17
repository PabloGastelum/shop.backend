import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import productsRoutes from "./routes/products.routes";
import ordersRoutes from "./routes/orders.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(PORT, () => {
  console.log(`🔌 Server running on port ${PORT}`);
});
