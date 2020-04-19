pouchdb-adapter-snappy
======

PouchDB adapter using snappydown. Its adapter name is `'snappy'`.

### Usage

```bash
npm install pouchdb-adapter-snappy
```

```js
PouchDB.plugin(require('pouchdb-adapter-snappy'));
var db = new PouchDB('mydb', {adapter: 'snappy'});
```

For full API documentation and guides on PouchDB, see [PouchDB.com](http://pouchdb.com/). For details on PouchDB sub-packages, see the [Custom Builds documentation](http://pouchdb.com/custom.html).

### Source

PouchDB and its sub-packages are distributed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

For a full list of packages, see [the GitHub source](https://github.com/pouchdb/pouchdb/tree/master/packages).


