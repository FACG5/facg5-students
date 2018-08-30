const getPortFolio = require('../database/queries/getPortFolio');

exports.get = (req, res) => {
    const { id } = req.params;
    getPortFolio(id, (err, response) => {
      if (err) {
        res.status(404).render('error', { err });
      }
     // console.log('data', data);
      res.render('portFolio', { response });
    });
  };