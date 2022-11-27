const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/erroHandler");

const app = express();
app.use(express.json());
dotenv.config();
connectDb();

app.use("/api/users", userRoutes);

///// HANDLE ERRORS /////
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listning on ${PORT}`));
