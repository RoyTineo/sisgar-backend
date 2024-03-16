import { Router } from "express";

import { getTipoDocumento } from "../controllers/tipoDocumento.controllers";

const router = Router();

router.get("/tipoDocumento", getTipoDocumento);

export default router;
