const express = require('express')
const router = express.Router()

// @route      GET api/contacts
// @desc       get all user's contacts
// @access     Private
router.get('/', (req, res) => {
    res.send('Get all contact')
})

// @route      POST api/contacts
// @desc       add new contact
// @access     Private
router.post('/', (req, res) => {
    res.send('add new contact')
})

// @route      PUT api/contacts/:id
// @desc       Update contact
// @access     Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// @route      delete api/contacts/:id
// @desc       delete contact
// @access     Private
router.delete('/:id', (req, res) => {
    res.send('delete contact')
})

module.exports = router; 