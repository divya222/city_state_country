var fb = require('../config/fbconfig');
var utils = require('../utils/utils');
var stateobj={
    getall:(req,res)=>{
        fb.ref('state').once('value',success=>{
            //console.log(success.val());
            //res.send(success.val());
            let states=utils.fbtoarr(success.val());
            res.send(states);
        });
    },
    add:(req,res)=>{
        let st = req.body;
        fb.ref('state').push(st).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        });
    },
    update:(req,res)=>{
        let s= req.body;
        let key=s.key;
        fb.ref('state/'+key).update(s).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        })
    },
    delete:(req,res)=>{
        let key=req.query.key;
        fb.ref('state/'+key).remove().then(success=>{
            res.send(success);
        })
    },
    getById:(req,res)=>{
        let key=req.query.key;
        fb.ref('state/'+key).once('value',success=>{
            console.log(success.val());
            res.send(success.val())
        })
    },
};
module.exports = stateobj;