const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add contact name']
    },
    email: {
        type: String,
        required: [true, 'Please add contact email']
    },
    phone: {
        type: String,
        required: [true, 'Please add contact phone number']
    },
    
  }, { timestamps: true } );

modules.export = mongoose.model("Contact", contactSchema);