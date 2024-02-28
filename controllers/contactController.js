// @desc Use it instead of try/catch for async functions.
const asyncHandler = require('express-async-handler')

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message:"Get all contacts"});
});

// @desc Get a contact
// @route GET /api/contact
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Get contact with id: ${req.params.id}`});
});

// @desc Create a contact
// @route POST /api/contact
// @access public
const createContact = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const {name, email} = req.body;
    if (!name || !email) {
        res.status(400);
        throw new Error("Add body");
    }

    res.status(201).json({message:"Create contact"});
});

// @desc Update a contact
// @route PUT /api/contact
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update contact with id: ${req.params.id}`});
});

// @desc DELETE a contact
// @route DELETE /api/contact
// @access public
const deleteContract = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete contact with id: ${req.params.id}`});
});

module.exports = {getContacts, getContact, updateContact, createContact, deleteContract};