import fs from "fs";
import { handleError } from "./errors";

const writeFile = (path: string, data: any): void => {
  fs.writeFile(path, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      throw handleError(error);
    }
  });
};

export { writeFile };
