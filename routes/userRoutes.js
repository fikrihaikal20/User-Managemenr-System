const express = require('express');
const { index, viewEdit,actionCreate, actionDelete, actionEdit, viewCreate} = require('../controllers/userControl')
const router = express.Router()

router.get('/', index)
router.get('/edit/:id', viewEdit)
router.get('/create', viewCreate)
router.post('/create', actionCreate)
router.delete('/:id', actionDelete)
router.put('/edit/:id', actionEdit)

module.exports = router

