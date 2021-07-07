module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert(
      'People',
      [{
        name: 'John Doe',
        isBetaMember: false,
      }], {},
    );
  },

  down: async () => {
  },
};
