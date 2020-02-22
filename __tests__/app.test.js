const alterFile = require('../alter-file.js');
const { logger, errLogger } = require('../logger.js');

describe('logger', () => {
  it('can display the event, time, and payload', () => {
    const testFile = `${__dirname}/files/test-scratch.txt`;
    const res = logger('save', testFile);
    expect(res.event).toBe('save');;
    expect(res.payload).toBe(testFile);
    expect(!!res.time).toBe(true);
  });

  it('can catch an error', () => {
    const testFile = `${__dirname}/files/test-scratch.txt`;
    const expectedRes = `error writing to file: ${testFile}`;
    const res = errLogger('error', testFile);
    expect(res).toBe(expectedRes);
  });
});