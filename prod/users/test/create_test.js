const assert = require('assert');
const User = require('../src/user')
describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new User({ name: "Joe" });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    })
});

//add 'assert' library
//add script "mocha" in package.json and npm run test