var IndexContent = require('../models/indexContent');

function addInitialData() {

    IndexContent.create(new IndexContent({
        title: "title",
        heading: "heading",
        message: "msg"
    }), function(err, response){
        if(err){
            console.log(err);
        }else{
            console.log(response);
        }
    })

}


module.exports = addAdminRoutes;