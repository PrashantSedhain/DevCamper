const express = require('express');
const router = express.Router();
const {getBootcamp, getBootcamps, updateBootcamp, deleteBootcamp, createBootcamp } = require('../controllers/bootcamps')

module.exports = router;


router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);