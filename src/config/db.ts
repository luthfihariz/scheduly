import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5434,
  database: "scheduly_db",
  username: "scheduly",
  password: "12345!!",
  migrations: ["migrations/*.ts"],
  entities: ["src/*/models/*.ts"],
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default dataSource;
