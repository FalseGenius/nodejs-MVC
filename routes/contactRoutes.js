const express = require("express");
const {getContacts, getContact, createContact, updateContact, deleteContract} = require("../controllers/contactController");
const router = express.Router();

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContract);

module.exports = router;