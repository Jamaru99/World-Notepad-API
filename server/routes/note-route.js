const express = require('express');
const noteController = require('../controllers/note-controller')

const router = express.Router();

router.get('/list', noteController.index);
router.get('/detail/:id', noteController.show);
router.post('/create', noteController.store);
router.put('/update/:id', noteController.modify);
router.delete('/delete/:id', noteController.destroy);

module.exports = router