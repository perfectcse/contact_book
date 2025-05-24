const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});