require('dotenv').config();
const _ = require('lodash');
const faker = require('faker');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const {
  randomEntry,
  randomBetween,
  getFakerAdminData,
  getEmployer
} = require('./utils');
const { getSpecialty } = require('./specialty');

const Db = mongodb.Db;
const Server = mongodb.Server;

let {
  NODE_ENV,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_URL,
  MINIMUM_SEED_VALUES,
  SEEDS_TO_ADD
} = process.env;

const runProvider = async () => {
  try {
    let providerCollections;

    const db = await MongoClient.connect(MONGO_URL);

    providerCollections = db.collection('providers');
    const count = await providerCollections.count({});

    if (count < MINIMUM_SEED_VALUES) {
      let providers = [];
      for (var index = 0; index < SEEDS_TO_ADD; index++) {
        providers.push(await createProvider());
      }
      await providerCollections.insertMany(providers);
    }
  } catch (error) {
    console.log(error);
  }
};

const createProvider = async () => {
  const employerId = getEmployer();
  const specialty = await getSpecialty();

  return Object.assign(
    {},
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      middleName: faker.name.firstName().substr(1, 1).toUpperCase(),
      email: faker.internet.email(),
      specialty,
      projectedStartDate: faker.date.past(),
      employerId,
      providerType: getProviderType(),
      staffStatus: getStaffStatus(),
      assignedTo: getMspUser(employerId),
      status: getStatus()
    },
    getFakerAdminData()
  );
};

const getProviderType = () => {
  return randomEntry(['MD', 'DO', 'DPM', 'PA', 'ARNP', 'NP']);
};

const getMspUser = (employerId) => {
  switch (employerId) {
    case 334:
      return randomEntry([
        12345, 67890, 12324, 87654, null
      ]);
    case 441:
      return randomEntry([
        77654, 55453, 23112, 90086, null
      ]);
    case 318:
      return randomEntry([
        66523, 33212, 88732, 87001, null
      ]);
  }
};

const getStaffStatus = () => {
  return randomEntry([
    'ACTIVE',
    'AFFILIATE',
    'ASSOCIATE',
    'COMMUNITY',
    'CONSULTING',
    'COURTESY',
    'HONORARY',
    'PROVISIONAL',
    'TEACHING'
  ]);
};

const getStatus = () => {
  return randomEntry([
    'AWAITING_CREDENTIALS',
    'READY_FOR_REVIEW',
    'UNDER_REVIEW',
    'AWAITING_DECISION',
    'APPROVED',
    'DENIED'
  ]);
};

module.exports = {
  runProvider,
  createProvider
};
