import express, { Request, Response } from "express";
import "reflect-metadata";
import router from "./appointments/routes";

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
