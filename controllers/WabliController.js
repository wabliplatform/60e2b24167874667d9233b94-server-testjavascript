/**
 * The WabliController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WabliService');
const createwabli = async (request, response) => {
  await Controller.handleRequest(request, response, service.createwabli);
};

const deletewabli = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletewabli);
};

const getAllwabli = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllwabli);
};

const getwabli = async (request, response) => {
  await Controller.handleRequest(request, response, service.getwabli);
};

const updatewabli = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatewabli);
};


module.exports = {
  createwabli,
  deletewabli,
  getAllwabli,
  getwabli,
  updatewabli,
};
