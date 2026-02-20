const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contacts");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});