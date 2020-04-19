'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var pouchdbUtils = require('pouchdb-utils');
var CoreLevelPouch = _interopDefault(require('pouchdb-adapter-leveldb-core'));
var snappydown = _interopDefault(require('snappydown'));

function SnappyDownPouch(opts, callback) {
  var _opts = pouchdbUtils.assign({
    db: snappydown
  }, opts);

  CoreLevelPouch.call(this, _opts, callback);
}

// overrides for normal LevelDB behavior on Node
SnappyDownPouch.valid = function () {
  return true;
};
SnappyDownPouch.use_prefix = false;

function index (PouchDB) {
  PouchDB.adapter('snappy', SnappyDownPouch, true);
}

module.exports = index;
