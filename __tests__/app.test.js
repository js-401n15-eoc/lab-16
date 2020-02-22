const alterFile = require('../alter-file.js');
const logger = require('../logger.js');

describe('logger', () => {
  it('can display the event, time, and payload', () => {
    const testFile = `${__dirname}/files/test-scratch.txt`;
    const res = logger('save', testFile);
    expect(res.event).toBe('save');;
    expect(res.payload).toBe(testFile);
    expect(!!res.time).toBe(true);
  });
});

// describe('alterFile', () => {
//   it('it can edit a file')
// });