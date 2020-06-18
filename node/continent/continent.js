var fb = require('../config/fbconfig');
var utils = require('../utils/utils');
var contiobj = {
    getall:(req,res)=>{
        fb.ref('continent').on('value',success=>{
            res.send(utils.fbtoarr(success.val()));
        });
    },
    add:(req,res)=>{
        let cnt = req.body;
        fb.ref('continent').push(cnt).then(success=>{
            res.send(success);
        }).catch(err=>{
            res.send(err);
        });
    }
};
module.exports = contiobj;