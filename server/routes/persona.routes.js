import { Router } from "express";
import {
  getPersona,
  getPersonas,
  postPersona,
  putPersona,
  deletetPersona,
} from "../controllers/persona.controllers.js";

const router = Router();

router.get("/persona/:idPersona", getPersona);

router.get("/persona", getPersonas);

router.post("/persona", postPersona);

router.put("/persona/:idPersona", putPersona);

router.delete("/persona/:idPersona", deletetPersona);

export default router;
