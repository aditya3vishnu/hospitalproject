class Store {

    constructor(name, remote, onChange) {
        this.db = new Pouch(name);

        PouchDB.sync(name, `${remote}/${name}`,{
            live: true,
            retry: true,
        }).on('change', info => {
            onChange(info)
        });
    }

        getAll() {
            return this.db.allDocs({ include_docs: true })
                .then(db => {
                    return db.rows.map(row => {
                        return row.doc;
                    });
                });
        }


    }

window.Store = store