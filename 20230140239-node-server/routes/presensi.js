const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiController');
const { addUserData } = require('../middleware/permissionMiddleware');

router.use(addUserData);

// Get all presensi records from database
router.get('/', presensiController.getAllPresensi);

// Get specific presensi by ID
router.get('/:id', presensiController.getPresensiById);

router.post('/check-in', presensiController.CheckIn);
router.post('/check-out', presensiController.CheckOut);

router.delete('/:id', presensiController.deletePresensi);
router.put('/:id', presensiController.updatePresensi);

module.exports = router;