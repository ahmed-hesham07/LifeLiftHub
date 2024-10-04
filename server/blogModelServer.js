// Blog model server logic
const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    // Logic for fetching blog posts
    const posts = [
        { title: "How to Build Good Habits", content: "Content for building good habits..." },
        { title: "Productivity Tips", content: "Content for productivity tips..." }
    ];
    res.json(posts);
});

module.exports = router;
