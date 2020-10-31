const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("Server Up And Running");
});