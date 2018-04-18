let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('- GenerateMessage', () => {
  it('Should generate correct message object.', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('- GenerateLocationMessage', () => {
  it('Should generate correct location object.', () => {
    let from = 'Jen';
    let latitude = 15;
    let longitude = 19;
    let url = 'https://www.google.es/maps?q=15,19';
    let message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});