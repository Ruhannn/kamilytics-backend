import mongoose, { Collection } from "mongoose";
import app from "./app";
import config from "./config";


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`love ayaka on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
