const alterFile = require('../alter-file.js');
const logger = require('../logger.js');

describe('logger', () => {
  it('can display the event, time, and payload', () => {
    //onst res = {event, time, payload};
    const res = logger('save', 'bob saget');
    expect(res.event).toBe('save');;
    expect(res.payload).toBe('bob saget');
    expect(!!res.time).toBe(true);
    });
});