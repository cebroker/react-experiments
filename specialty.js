require('dotenv').config();
const _ = require('lodash');
const faker = require('faker');
const mongodb = require('mongodb');
const { randomEntry, randomBetween, getFakerAdminData } = require('./utils');
const MongoClient = mongodb.MongoClient;

const Db = mongodb.Db;
const Server = mongodb.Server;

let {
  NODE_ENV,
  MONGO_URL,
  MINIMUM_SEED_VALUES,
  SEEDS_TO_ADD
} = process.env;

const runSpecialty = async () => {
  try {
    let specialtyCollection;
    const db = await MongoClient.connect(MONGO_URL);

    specialtyCollection = db.collection('specialties');
    const count = await specialtyCollection.count({});
    // if (count < MINIMUM_SEED_VALUES) {
    //   let specialties = [];
    //   for (var index = 0; index < SEEDS_TO_ADD; index++) {
    //     specialties.push(createSpecialty());
    //   }
    //   await specialtyCollection.insertMany(specialties);
    // }
    await specialtyCollection.insertMany(createAllSpecialties());

  } catch (error) {
    console.log(error);
  }
};

const createSpecialty = () => {
  return Object.assign(
    {},
    { name: faker.commerce.department() },
    getFakerAdminData()
  );
};

module.exports = {
  getSpecialty: async () => {
    const db = await MongoClient.connect(MONGO_URL);

    specialtyCollection = db.collection('specialties');
    // await specialtyCollection.aggregate({ $sample: { size: 1 } });
    return await specialtyCollection.findOne({});
  },
  runSpecialty
};


const createAllSpecialties = () => {
  return [
    { ...{ name: 'Adolescent Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Allergy & Immunology' }, ...getFakerAdminData() },
    { ...{ name: 'Anesthesiology' }, ...getFakerAdminData() },
    { ...{ name: 'Cardiology' }, ...getFakerAdminData() },
    { ...{ name: 'Cardiothoracic Surgery' }, ...getFakerAdminData() },
    { ...{ name: 'Critical Care Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Dermatology' }, ...getFakerAdminData() },
    { ...{ name: 'Emergency Medicine' }, ...getFakerAdminData() },
    {
      ...{ name: 'Endocrinology, Diabetes & Metabolism' },
      ...getFakerAdminData()
    },
    { ...{ name: 'Family Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Gastroenterology' }, ...getFakerAdminData() },
    { ...{ name: 'Internal Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Hematology' }, ...getFakerAdminData() },
    { ...{ name: 'Hospice & Palliative Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Infectious Disease' }, ...getFakerAdminData() },
    { ...{ name: 'Nephrology' }, ...getFakerAdminData() },
    { ...{ name: 'Neurology' }, ...getFakerAdminData() },
    { ...{ name: 'Neurosurgery' }, ...getFakerAdminData() },
    { ...{ name: 'OBGYN' }, ...getFakerAdminData() },
    {
      ...{ name: 'Occupational & Environmental Medicine' },
      ...getFakerAdminData()
    },
    { ...{ name: 'Oncology' }, ...getFakerAdminData() },
    { ...{ name: 'Ophthalmology' }, ...getFakerAdminData() },
    { ...{ name: 'Optometry' }, ...getFakerAdminData() },
    { ...{ name: 'Orthopaedic Surgery' }, ...getFakerAdminData() },
    { ...{ name: 'Otolaryngology' }, ...getFakerAdminData() },
    { ...{ name: 'Pathology' }, ...getFakerAdminData() },
    { ...{ name: 'Pediatrics' }, ...getFakerAdminData() },
    { ...{ name: 'Pulmonary Disease' }, ...getFakerAdminData() },
    { ...{ name: 'Psychiatry' }, ...getFakerAdminData() },
    { ...{ name: 'Radiation Oncology' }, ...getFakerAdminData() },
    { ...{ name: 'Radiology' }, ...getFakerAdminData() },
    { ...{ name: 'Rheumatology' }, ...getFakerAdminData() },
    { ...{ name: 'Sleep Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Sports Medicine' }, ...getFakerAdminData() },
    { ...{ name: 'Surgery' }, ...getFakerAdminData() },
    { ...{ name: 'Transplant Hepatology' }, ...getFakerAdminData() },
    { ...{ name: 'Urology' }, ...getFakerAdminData() }
  ];
};
