import { expect } from 'chai';
import request from 'request';

it('Hello world test', function (done) {
    request('http://localhost:3000', function (error, response, body) {
        expect(body).to.equal("Hello Worldz!");
        done();
    });
});