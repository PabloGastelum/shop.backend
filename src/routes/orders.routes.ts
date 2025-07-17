import { Router, Request, Response } from "express";
import { addOrder, getOrders } from "../repositories/orders.repository";
import { handleError } from "../utils";

const router = Router();

const OrderRoutes = {
  addOrder: "/add-order",
};

router.get("/", (_: Request, res: Response) => {
  try {
    const orders = getOrders();
    res.send(orders);
  } catch (error: any) {
    res.status(500).send(handleError(error).message);
  }
});

router.post(OrderRoutes.addOrder, (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    if (!newOrder.client) {
      throw new Error("Not a client");
    }

    if (
      !newOrder.client.name ||
      !newOrder.client.email ||
      !newOrder.client.address
    ) {
      throw new Error("The client lacks information");
    }

    if (!newOrder.products || newOrder.products.length === 0) {
      throw new Error("Not a products");
    }

    addOrder(newOrder);
    res.status(200).send();
  } catch (error: any) {
    res.status(500).send(handleError(error).message);
  }
});

export default router;
