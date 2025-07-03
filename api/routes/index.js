import { Router } from "express";
import { LoginHanlder, RegisterHanlder } from "../handlers/auth.js";
import { EndGames, GetActiveGame, GetGame, JoinGame } from "../handlers/game.js";
import { authenticate } from "../middleware/auth.js";

const routes = Router()

routes.get("/", (req, res) => {
  return res.status(200).json({ messgae: "API running successfully", status: "success" })
})

routes.post("/login", LoginHanlder)
routes.post("/register", RegisterHanlder)

routes.get("/games", authenticate, GetActiveGame)
routes.get("/games/:gameId", authenticate, GetGame)
routes.post("/games", authenticate, JoinGame)
routes.post("/games/end", authenticate, EndGames)

export default routes