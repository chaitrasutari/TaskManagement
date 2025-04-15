const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

router.post('/', updateController.createUpdate);
router.get('/', updateController.getAllUpdates);
router.get('/:id', updateController.getUpdateById);
router.put('/:id', updateController.updateUpdate);
router.delete('/:id', updateController.deleteUpdate);

module.exports = router;
