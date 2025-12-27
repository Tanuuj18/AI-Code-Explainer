const express = require('express');
const { explainCode } = require('../controllers/explaincontroller');

const router = express.Router();

// POST /api/explain
router.post('/explain', explainCode);

module.exports = router;
