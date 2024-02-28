// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({message:"Get all contacts"});
};

// @desc Get a contact
// @route GET /api/contact
// @access public
const getContact = (req, res) => {
    res.status(200).json({message:`Get contact with id: ${req.params.id}`});
};

// @desc Create a contact
// @route POST /api/contact
// @access public
const createContact = (req, res) => {
    res.status(200).json({message:"Create contact"});
};

// @desc Update a contact
// @route PUT /api/contact
// @access public
const updateContact = (req, res) => {
    res.status(200).json({message:`Update contact with id: ${req.params.id}`});
};

// @desc Get a contact
// @route DELETE /api/contact
// @access public
const deleteContract = (req, res) => {
    res.status(200).json({message:`Delete contact with id: ${req.params.id}`});
};

module.exports = {getContacts, getContact, updateContact, createContact, deleteContract};