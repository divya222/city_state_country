var fb = require('../config/fbconfig');
var stuobj = {
    getall:(req,res)=>{
        fb.ref('student').on('value',success=>{
            console.log(success.val());
            res.send(student);
        });
        
    },
    add:(req,res)=>{
        let s = req.body;
        fb.ref('student').push(s).then(success=>{
            res.send(success);

        }).catch(err=>{
            res.send(err);
        });
        
        
    }
};
module.exports = stuobj;