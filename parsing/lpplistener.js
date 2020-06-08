var listener = require("./luappListener").luappListener;


class LPPListener extends listener {
    res = "";
    currentClass = "";
    raw = "";

    constructor(raw){
       
        super();
        this.raw = raw;
    }
    
    getRaw(start, stop){
        return this.raw.substring(start,stop)
    }

    handleFuncDef(ctx){
        //console.log(ctx);
        var children = ctx.children;
        if(children == null || children.length <= 0) return;
        //console.log(children);
        var name = children[1];
        var body = children[2];
        
        var start = body.start.start;
        var end = body.stop.stop;
        // console.log("ITEM:" + this.getRaw(start,end))
        if(end == null)return;
        this.res += `\n function ${this.currentClass}:${name.getText()}${this.getRaw(start,end+1)}`

    }

    enterClassbody(ctx){
        //this.res += "\n" + ctx.getText();
        for (let i = 0; i < ctx.getChildCount(); i++) {
            
            this.handleFuncDef(ctx.getChild(i));
        }
 
    }

    enterFuncname(ctx){
        // console.log(this.currentClass)
        // if(this.currentClass != ""){
        //     this.res += `function ${this.currentClass}:${this.getText()}(`
        // }
    }

    enterClassname(ctx){
        var className = ctx.getText()
        this.res += 
        `
${className} = {}
${className}.__index = ${className}
        `
        this.currentClass = className;
    }

    exitClassbody(){

        this.currentClass = "";
    }

}

exports.LPPListener = LPPListener;