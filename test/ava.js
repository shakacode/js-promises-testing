import test from 'ava';
import 'babel-core/register';

import { resolvedPromise, rejectedPromise } from '../app';

test('[ava]: should resolve', t => {
  const msg = 'Success';

  return (
    resolvedPromise(msg).then(res => {
      t.is(res, msg);
    })
  );
});

test('[ava]: should reject', t => {
  const msg = 'Fail';

  return (
    rejectedPromise(msg).catch(rej => {
      t.is(rej, msg);
    })
  );
});
