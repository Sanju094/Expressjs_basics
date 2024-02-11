const express = require("express")
const path = require("path")
const app = express()

const bodyParser = require("body-parser");
const AdminRoutes = require("./Routes/admin")
const StoreRoutes = require("./Routes/store")

app.use(bodyParser.urlencoded())
app.use("/admin", AdminRoutes)
app.use(StoreRoutes)




app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});



app.listen(8080, () => {
  console.log("server connected");
});
