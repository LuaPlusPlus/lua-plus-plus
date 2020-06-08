var listener = require("./luappListener").luappListener;


class LPPListener extends listener {
    res = "";

    constructor(){
        super();
    }
    
    enterClassbody(ctx){
        this.res += "\n" + ctx.getText();
        // console.log(ctx.NAME);
        // for (let i = 0; i < ctx.getChildCount(); i++) {
        //     console.log(ctx.getChild(i).getText());
        // }
        
    }

    enterClassname(ctx){
        var className = ctx.getText()
        this.res += 
        `
${className} = {}
${className}.__index = ${className}
        `
    }

    enterClassbody(ctx){
        this.res += "\n" + ctx.getText();
        console.log(ctx.NAME);
        for (let i = 0; i < ctx.getChildCount(); i++) {
            console.log(ctx.getChild(i));
        }
        
    }
}

exports.LPPListener = LPPListener;