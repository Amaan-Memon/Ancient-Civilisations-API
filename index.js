import express from "express";
import cors from "cors";
import civRouter from "./routes/civRouter.js";

const PORT = process.env.port || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Test route is active",
  });
});

app.use("/civilisations", civRouter);

app.listen(PORT, () => {
  console.log(`Server is active on ${PORT}`);
});
