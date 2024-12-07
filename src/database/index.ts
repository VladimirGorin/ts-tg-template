import "reflect-metadata";
import AppDataSource from "../ormConfig";

(async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
  } catch (error) {
    console.error("Error during database connection:", error);
  }
})();
