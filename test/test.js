var assert = require('assert');

describe('Calling Test File Cases', function () {

    before(()=>{
        console.info('Running Test Cases...')
    })

    after(()=>{
        console.info('Test Ended!')
    })

    beforeEach(()=>{
        console.info('Starting New Fn Test...')
    })

    afterEach(()=>{
        console.info('End New Fn Test!')
    })

    context('Case 1.0 - Index Of Checks', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    context('Case 1.1 - Index Of Checks', function () {
        it('should return 3 when the index 4 is calling', function () {
            assert.equal([1, 2, 3, 4].indexOf(4), 3);
        });
    });

});
