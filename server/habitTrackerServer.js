// Habit tracking server logic
const express = require('express');
const router = express.Router();

router.post('/track', (req, res) => {
    const habit = req.body.habit;
    // Logic for saving the habit
    res.send(`Habit tracked: ${habit}`);
});

module.exports = router;
