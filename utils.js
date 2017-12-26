const faker = require('faker')
//*****[seeds helpers]*****//

const randomEntry = (array) => {
  return array[~~(Math.random() * array.length)];
}

const randomBetween = (min, max) => {
  return ~~(Math.random() * (max-min)) + min;
}

const getFakerAdminData = () => {
  return {
    createdBy: faker.random.number(),
    createdAt: faker.date.past(),
    updatedBy: faker.random.number(),
    updatedAt: faker.date.recent()
  };
}

const getEmployer = () => {
  return randomEntry([334, 441, 318]);
}

module.exports = {
  randomEntry,
  randomBetween,
  getEmployer,
  getFakerAdminData
}
