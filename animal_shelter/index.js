const express = require("express")
const app = express()
const logger = require("morgan")

app.use(logger("dev"))
app.use(express.json())

const connectDB = require("./config/dbConnection")
connectDB()

const catRoutes = require("./routes/catRoutes")
app.use("/cats", catRoutes)

app.get("*", (req, res) => {
  res.json({message: "That route doesn't exist"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Port running on ${PORT}`));