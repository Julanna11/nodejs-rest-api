const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const { contactsSchema } = require("../../schemas/contacts");

const add = async (req, res) => {
  const { error } = contactsSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "missing required name field");
  }
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

module.exports = add;
