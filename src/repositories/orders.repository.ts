import path from "path";
import fs from "fs";
import { Order } from "../models/order";
import { handleError, writeFile } from "../utils";

const ORDERS_PATH = path.join(__dirname, "../data/orders.json");

const getOrders = (): Order[] => {
  try {
    const ordersFile = fs.readFileSync(ORDERS_PATH, "utf-8");
    return JSON.parse(ordersFile) as Order[];
  } catch (error) {
    throw handleError(error);
  }
};

const addOrder = (newOrder: Order): Order => {
  try {
    newOrder.id = crypto.randomUUID();

    fs.readFile(ORDERS_PATH, "utf-8", (error, ordersFile) => {
      if (error) handleError(error);
      const ordersList = JSON.parse(ordersFile);
      ordersList.push(newOrder);
      writeFile(ORDERS_PATH, ordersList);
    });

    return newOrder;
  } catch (error) {
    throw handleError(error);
  }
};

export { addOrder, getOrders };
