var fb = require('../config/fbconfig');
var utils = require('../utils/utils');
var cityobj={
    getall:(req,res)=>{
        fb.ref('city').once('value',success=>{
            //console.log(success.val());
            let cities = utils.fbtoarr(success.val());
            res.send(cities);
        });
    },
    add:(req,res)=>{
        let c= req.body;
        fb.ref('city').push(c).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        });
    },
    update:(req,res)=>{
        let c= req.body;
        let key=c.key;
        fb.ref('city/'+key).update(c).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        })
    },
    delete:(req,res)=>{
        let key=req.query.key;
        fb.ref('city/'+key).remove().then(success=>{
            res.send(success);
        })
    },
    getById:(req,res)=>{
        let s = req.query.key;
    }
};
module.exports = cityobj;