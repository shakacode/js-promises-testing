import test from 'blue-tape';

import { resolvedPromise, rejectedPromise  } from '../app';

test('[tape]: should resolve', t => {
  const msg = 'Success';

  return (
    resolvedPromise(msg).then(res => {
      t.equal(res, msg);
    })
  );
});

test('[tape]: should reject', t => {
  const msg = 'Fail';

  return (
    rejectedPromise(msg).catch(rej => {
      t.equal(rej, msg);
    })
  );
});
