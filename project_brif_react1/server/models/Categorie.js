const mongoose = require("mongoose");

const CategorieSchema = mongoose.Schema({
    categorieName: {
        type: String,
        require: true,
    },
    question_1: {
        type: String
    },
    question_2: {
        type: String
    },
    question_3: {
        type: String
    },
    question_4: {
        type: String
    },
    question_5: {
        type: String
    },
    question_6: {
        type: String
    },
    question_7: {
        type: String
    },
    question_8: {
        type: String
    },
    question_9: {
        type: String
    },
    question_10: {
        type: String
    },
    reponse_question_1: {
        type: String
    },
    reponse_question_2: {
        type: String
    },
    reponse_question_3: {
        type: String
    },
    reponse_question_4: {
        type: String
    },
    reponse_question_5: {
        type: String
    },
    reponse_question_6: {
        type: String
    },
    reponse_question_7: {
        type: String
    },
    reponse_question_8: {
        type: String
    },
    reponse_question_9: {
        type: String
    },
    reponse_question_10: {
        type: String
    },
    reponse_faux_1_question_1:{
        type: String
    },
    reponse_faux_2_question_1:{
        type: String
    },
    reponse_faux_3_question_1:{
        type: String
    },
    reponse_faux_4_question_1:{
        type: String
    },
    reponse_faux_1_question_2:{
        type: String
    },
    reponse_faux_2_question_2:{
        type: String
    },
    reponse_faux_3_question_2:{
        type: String
    },
    reponse_faux_4_question_2:{
        type: String
    },
    reponse_faux_1_question_3:{
        type: String
    },
    reponse_faux_2_question_3:{
        type: String
    },
    reponse_faux_3_question_3:{
        type: String
    },
    reponse_faux_4_question_3:{
        type: String
    },
    reponse_faux_1_question_4:{
        type: String
    },
    reponse_faux_2_question_4:{
        type: String
    },
    reponse_faux_3_question_4:{
        type: String
    },
    reponse_faux_4_question_4:{
        type: String
    },
    reponse_faux_1_question_5:{
        type: String
    },
    reponse_faux_2_question_5:{
        type: String
    },
    reponse_faux_3_question_5:{
        type: String
    },
    reponse_faux_4_question_5:{
        type: String
    },
    reponse_faux_1_question_6:{
        type: String
    },
    reponse_faux_2_question_6:{
        type: String
    },
    reponse_faux_3_question_6:{
        type: String
    },
    reponse_faux_4_question_6:{
        type: String
    },
    reponse_faux_1_question_7:{
        type: String
    },
    reponse_faux_2_question_7:{
        type: String
    },
    reponse_faux_3_question_7:{
        type: String
    },
    reponse_faux_4_question_7:{
        type: String
    },
    reponse_faux_1_question_8:{
        type: String
    },
    reponse_faux_2_question_8:{
        type: String
    },
    reponse_faux_3_question_8:{
        type: String
    },
    reponse_faux_4_question_8:{
        type: String
    },
    reponse_faux_1_question_9:{
        type: String
    },
    reponse_faux_2_question_9:{
        type: String
    },
    reponse_faux_3_question_9:{
        type: String
    },
    reponse_faux_4_question_9:{
        type: String
    },
    reponse_faux_1_question_10:{
        type: String
    },
    reponse_faux_2_question_10:{
        type: String
    },
    reponse_faux_3_question_10:{
        type: String
    },
    reponse_faux_4_question_10:{
        type: String
    },
});

const Categorie = mongoose.model("Categorie", CategorieSchema);
module.exports = Categorie;