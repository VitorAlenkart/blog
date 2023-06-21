const express = require('express');
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify")

router.get('/admin/new/category', (req,res) => {
    res.render('admin/new/category', {err: 1});
})

router.post('/category/save', (req,res) => {
    const title = req.body.category;

    if(title != ''){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/")
        })
    }else {
        res.render("admin/new/category",{err: 'A Categoria não foi informada'})
    }
})



module.exports = router;