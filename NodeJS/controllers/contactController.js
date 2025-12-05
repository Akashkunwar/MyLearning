const asyncHandeler = require("express-async-handler")
const Contact = require("../models/contactModel")
// @desc get all contacts
// @route get /api/contacts
// @access private
const getContacts = asyncHandeler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

// @desc create new contacts
// @route POST /api/contacts
// @access private
const createContact = asyncHandeler(async (req, res) => {
    console.log("The request body is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mamndatory");
    }
    const contact = await Contact.create({
        name, email, phone, user_id: req.user.id
    });
    res.status(200).json(contact);
});

// @desc get particular contacts
// @route GET /api/contacts/:id
// @access private
const getContact = asyncHandeler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to get other user contact")
    }
    res.status(201).json(contact);
});

// @desc update new contacts
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandeler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedContact);
});

// @desc delete new contacts
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandeler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete other user contact")
    }
    await contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
});



module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }