const homePageRoute = require("./home-page.route");

const homepage = ({ registerAction })=>{
    console.log("hello world");

    registerAction({
        hook: "$FASTIFY_GET",
        handler: ()=> {
            console.log("hi");
            return{
                url:"/",
                handler: homePageRoute
            }
            
        }
    });
};

module.exports = homepage;