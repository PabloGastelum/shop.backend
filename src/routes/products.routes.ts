import { Router, Request, Response } from "express";
import { getProducts } from "../repositories/products.repository";
import { handleError } from "../utils";

const router = Router();

const ProductRoutes = {
  getAll: "/",
};

router.get(ProductRoutes.getAll, (_: Request, res: Response) => {
  try {
    const products = getProducts();
    res.send(products);
  } catch (error: any) {
    res.status(500).send(handleError(error).message);
  }
});

export default router;
