import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { resolvedPromise, rejectedPromise } from '../app';

chai.use(chaiAsPromised);

it('[mocha]: should resolve', () => {
  const msg = 'Success';
  const successPromise = resolvedPromise(msg);

  expect(successPromise).to.eventually.equal(msg);
});

it('[mocha]: should reject', () => {
  const msg = 'Fail';
  const failPromise = rejectedPromise(msg);

  expect(failPromise).to.be.rejected;
  expect(failPromise).to.be.rejectedWith(msg);
});
