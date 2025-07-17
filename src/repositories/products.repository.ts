import path from "path";
import fs from "fs";
import { Product } from "../models/product";
import { handleError } from "../utils";

const PRODUCTS_PATH = path.join(__dirname, "../data/products.json");
const getProducts = (): Product[] => {
  try {
    const productsFile = fs.readFileSync(path.join(PRODUCTS_PATH), "utf-8");

    const productsList = JSON.parse(productsFile) as Product[];

    return productsList;
  } catch (error) {
    throw handleError(error);
  }
};

export { getProducts };
