const rewire = require('rewire');
const fileSystem = rewire('../fileSystem');
const printUsers = fileSystem.__get__('printUsers');
// @ponicode
describe('printUsers', () => {
  test('0', async () => {
    await printUsers();
  });
});
