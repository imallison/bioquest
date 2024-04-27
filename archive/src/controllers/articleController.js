const Article = require("../models/Article");

// Controller for new article
exports.createArticle = (req, res) => {
  const newArticle = new Article(req.body);
  newArticle
    .save()
    .then((article) => res.status(201).json(article))
    .catch((err) => res.status(400).json({ message: err.message }));
};
