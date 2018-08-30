const getPortFolio = require('../database/queries/getPortFolio');
const error = require('./error');

exports.get = (req, res,next) => {
  try{

    const { id } = req.params;
    getPortFolio(id, (err, response) => {    

      if (response.length==0) {
       res.send('Sorry THis Client Not Exist!!')
        return
      }
      res.render('portFolio', { response ,css:"style"});
    });
  }catch(err){

    next('EEEEEEE' ,err)
  }
  };