const expect = require('expect');

const {isRealString} = require('./validation');
//import is RealString

// isRealString
    // should reject non-string values
    // should reject string with only spaces
    // should allow string with non-space characters

describe ('- isRealString', () => {
    it('- Should reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });

    it('- Should reject string with only spaces', () => {
        let res = isRealString('      ');
        expect(res).toBe(false);
    });

    it ('- Should allow string with non-space characters.', () => {
        let res = isRealString('   Andrew    ');
        expect(res).toBe(true);
    });
});

