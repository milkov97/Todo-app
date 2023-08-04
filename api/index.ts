import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = 3200;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port);
