import express  from "express"
import {SingInDeta, login} from "../controlless/user.controoles.js"

const router = express.Router();

router.post("/SingIn",SingInDeta)

router.get("/Login",login)


export default router;