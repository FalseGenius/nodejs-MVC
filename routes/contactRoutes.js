const express = require("express");
const {getContacts, getContact, createContact, updateContact, deleteContract} = require("../controllers/contactController");
const router = express.Router();

router.route('/').get(getContacts).get(getContact).post(createContact);

router.route('/:id').put(updateContact).delete(deleteContract);

module.exports = router;