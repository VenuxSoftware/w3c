/*
  Status: prototype
  Process: API generation
*/

/*---
description: Async test
negative: RangeError
expected:
  pass: true
---*/

setTimeout(function() {
    $DONE(new RangeError());
}, 1000);
