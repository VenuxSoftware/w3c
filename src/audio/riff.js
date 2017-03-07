/*
  Status: prototype
  Process: API generation
*/

'use strict';
const glob = require('glob');
const Rx = require('rx');

function globber(paths) {
  const files = new Rx.Subject();
  files.fileEvents = [];

  let doneCount = 0;

  paths.forEach(function (path) {
    const fileEvents = new glob.Glob(path, {
      nodir: true
    });

    fileEvents.on('match', function (file) {
      files.onNext(file);
    });

    fileEvents.on('end', function () {
      if (++doneCount === paths.length) {
        files.onCompleted();
      }
    });

    files.fileEvents.push(fileEvents);
  });

  return files;
}

module.exports = globber;
