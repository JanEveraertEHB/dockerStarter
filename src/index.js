const express = require("express");
const server = express();
const PORT = 3000;

const owners = [{
  name: "Jan Everaert",
  email: "jan.everaert@ehb.be"
}];

/**
 * [GET] /
 * returns "hello world" upon get request
 * @returns {object} with "message" param containing "hello world"
 */
server.get("/", (req, res) => {
  res.send({ message: "hello world" })
})

/**
 * [GET] /owner
 * @returns {Object} current owner object
 */
server.get("/owner", (req, res) => {
  res.json(owner);
})


/**
 * @typedef ownerObject
 * @property {string} name the name of the new owner 
 * @property {string} email the email address of the new owner 
 */
/**
 * [POST] /owner
 * @param {ownerObject} owner containing an owner object
 * @returns 200 if succesfully added
 */

// -----------------------
/**
 * [POST] /owner
 * @param {String} owner.name name of the new owner
 * @param {String} owner.email email of the new owner
 * @returns 200 if succesfully added
 */


server.post("/owner", (req, res) => {
  if(req.body.name && req.body.email) {
    owners.push(req.body);
    res.status(200).send();
  }
  else {
    res.status(400).send();
  }
});


server.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});