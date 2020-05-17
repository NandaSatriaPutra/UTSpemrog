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

    app.route('/tampilservice')
    .get(jsonku.tampilservice);

    app.route('/tambahservice')
    .post(jsonku.tambahservice);

    app.route('/tambahmontir')
    .post(jsonku.tambahmontir);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahlevel')
    .post(jsonku.tambahlevel);

    app.route('/ubahuser')
    .put(jsonku.ubahuser);

    app.route('/ubahmontir')
    .put(jsonku.ubahmontir);

    app.route('/ubahservice')
     .put(jsonku.ubahservice);

    app.route('/ubahlevel')
     .put(jsonku.ubahlevel);
     
    app.route('/ubahsparepart')
     .put(jsonku.ubahsparepart);

    app.route('/hapusmontir')
     .delete(jsonku.hapusMontir);

    app.route('/hapuslevel')
     .delete(jsonku.hapuslevel);

    app.route('/hapususer')
     .delete(jsonku.hapususer);

    app.route('/hapusservice')
     .delete(jsonku.hapusservice);
  
    app.route('/hapussparepart')
     .delete(jsonku.hapussparepart);


}
