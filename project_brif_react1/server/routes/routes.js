const express = require("express");

const {
    getAllCategories,
    getCategorieById,
    addCategorie,
    deleteCategorie,
    inscription,
    login,
} = require ("../controllers/Categorie");

const categorieRoutes = express.Router();

categorieRoutes.get("/api/readCategories",getAllCategories);
categorieRoutes.get("/api/readEvaluationCategorie/:id",getCategorieById);
categorieRoutes.post("/api/insertCategorie",addCategorie);
categorieRoutes.delete("/api/deleteCat/:id",deleteCategorie);
categorieRoutes.post("/api/inscription",inscription);
categorieRoutes.post("/api/login",login);

module.exports = {
    categorieRoutes
}