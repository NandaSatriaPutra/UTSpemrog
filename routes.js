'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampilsparepart')
    .get(jsonku.tampildatasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampildatamontir);

    app.route('/tambahsparepart')
    .post(jsonku.tambahsparepart)

    app.route('/ubahsparepart')
    .put(jsonku.ubahsparepart);


}
}