import { data } from "../data/index.js";
import { generateToken } from "../helpers/jwt.js";

export function LoginHanlder(req, res) {

  const { username } = req.body;
  const user = data.users.find(user => user.username === username);

  if (!user) {
    return res.status(401).json({ message: "Failed to login", status: "error" })
  }

  const token = generateToken(user.id)

  return res.status(200).json({ message: "Login successfully", status: "success", data: user, token })
}

export function RegisterHanlder(req, res) {
  const { username } = req.body;

  if (data.users.some(user => user.username === username)) {
    return res.status(400).json({ message: "User already exists", status: "error" })
  }

  const user = { username, id: data.users.length ? data.users.length + 1 : 0, gamesLose: 0, gamesPlayed: 0, gamesWon: 0 }

  data.users.push(user)

  const token = generateToken(user.id)

  return res.status(200).json({ message: "Registered successfully", status: "success", data: user, token })
}