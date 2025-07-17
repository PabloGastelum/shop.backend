import path from "path";
import fs from "fs";
import os from "os";
import { Order } from "../models/order";
import { handleError, writeFile } from "../utils";

const TEMP_ORDERS_PATH = path.join(os.tmpdir(), "orders.json");

const getOrders = (): Order[] => {
  try {
    if (!fs.existsSync(TEMP_ORDERS_PATH)) {
      // Si no existe, creamos archivo con un array vacío
      fs.writeFileSync(TEMP_ORDERS_PATH, "[]", "utf-8");
    }

    const ordersFile = fs.readFileSync(TEMP_ORDERS_PATH, "utf-8");
    return JSON.parse(ordersFile) as Order[];
  } catch (error) {
    throw handleError(error);
  }
};

const addOrder = (newOrder: Order): Order => {
  try {
    newOrder.id = crypto.randomUUID();

    const ordersList = getOrders(); // Usamos la función anterior
    ordersList.push(newOrder);
    fs.writeFileSync(TEMP_ORDERS_PATH, JSON.stringify(ordersList, null, 2), "utf-8");

    return newOrder;
  } catch (error) {
    throw handleError(error);
  }
};

export { addOrder, getOrders };
