/** @format */

import express from "express"
import bodyParser from "body-parser"

import usersRoutes from "./routes/users.js"

// GET /users finds all users
// POST /users creates a user
// GET /users/:id finds users details
// DELETE /users/:id deletes a user
// PATCH /users/:id updates a user

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use("/users", usersRoutes)

app.get("/", (req, res) => res.send("Hello from Homepage."))

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`),
)
