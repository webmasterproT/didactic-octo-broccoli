const Article = require('../models/article');

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving articles", error: error });
    }
};

const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving article", error: error });
    }
};

const createArticle = async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(500).json({ message: "Error creating article", error: error });
    }
};

const updateArticle = async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedArticle) {
            res.status(200).json(updatedArticle);
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating article", error: error });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (deletedArticle) {
            res.status(200).json({ message: "Article successfully deleted" });
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting article", error: error });
    }
};

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};