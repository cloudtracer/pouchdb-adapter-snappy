import { assign } from 'pouchdb-utils';
import CoreLevelPouch from 'pouchdb-adapter-leveldb-core';
import snappydown from 'snappydown';

function SnappyDownPouch(opts, callback) {
  var _opts = assign({
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

export default index;
