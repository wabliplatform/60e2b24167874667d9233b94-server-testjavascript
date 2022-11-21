/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Wabli } = require('../models/Wabli');

/**
* Creates the data
*
* wabli Wabli data to be created
* returns wabli
* */
const createwabli = ({ wabli }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Wabli(wabli).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* wabliId String the Id parameter
* no response value expected for this operation
* */
const deletewabli = ({ wabliId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wabli.findOneAndDelete({ _id:wabliId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllwabli = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Wabli.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* wabliId String the Id parameter
* returns wabli
* */
const getwabli = ({ wabliId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wabli.findById(wabliId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* wabliId String the Id parameter
* wabli Wabli data to be updated (optional)
* returns wabli
* */
const updatewabli = ({ wabliId, wabli }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wabli.findOneAndUpdate({ _id:wabliId },wabli).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createwabli,
  deletewabli,
  getAllwabli,
  getwabli,
  updatewabli,
};
