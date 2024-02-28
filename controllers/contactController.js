// @desc Use it instead of try/catch for async functions.
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const allDocuments = await Contact.find();
    res.status(200).json({"status":"s", "documents":allDocuments});
    // res.status(200).json(allDocuments);
});

// @desc Get a contact
// @route GET /api/contact
// @access public
const getContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({"status":"s", "contact":contact});
});

// @desc Create a contact
// @route POST /api/contact
// @access public
const createContact = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Add body");
    }

    const contact = await Contact.create({name:name, email:email, phone:phone});
    await contact.validate();
    res.status(201).json({message:"Contact created Successfully", contact: contact});
});

// @desc Update a contact
// @route PUT /api/contact
// @access public
const updateContact = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const contact = await Contact.findByIdAndUpdate(id, req.body, {new:true});
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }


    // res.status(200).json({message:`Updated contact successfully`});
    res.status(200).json({message:`Updated contact successfully`, contact: contact});
});

// @desc DELETE a contact
// @route DELETE /api/contact
// @access public
const deleteContract = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({message:`Deleted contact successfully`});
});

module.exports = {getContacts, getContact, updateContact, createContact, deleteContract};