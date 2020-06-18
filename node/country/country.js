var fb = require('../config/fbconfig');
var utils = require('../utils/utils');

var countryobj = {
    getall:(req,res)=>{
        fb.ref('country').once('value',success=>{
            console.log(success.val());
            
            res.send(utils.fbtoarr(success.val()));
        });
    },
    add:(req,res)=>{
        let cn = req.body;
        fb.ref('country').push(cn).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        });
    },
    update:(req,res)=>{
        let c= req.body;
        let key=c.key;
        fb.ref('country/'+key).update(c).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        })
    },
    getById:(req,res)=>{
        let key=req.query.key;
        fb.ref('country/'+key).once('value',success=>{
            console.log(success.val());
            res.send(success.val())
        })
    },
    delete:(req,res)=>{
        let key=req.query.key;
        fb.ref('country/'+key).remove().then(success=>{
            res.send(success);
        })
    }

};
module.exports = countryobj;