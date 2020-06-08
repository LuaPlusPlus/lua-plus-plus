var listener = require("./luappListener").luappListener;


class LPPListener extends listener {
    res = "";
    currentClass = "";
    raw = "";

    constructor(raw){
       
        super();
        this.raw = raw;
        
        var allFuncs = this.getAllFuncs();
        var myFuncs = this.getRegisteredFuncs();
        // allFuncs.forEach( (el) => {
            
        //     //if(el in myFuncs) console.log(el)
        //     this[el] = (ctx) => {
        //           //console.log(ctx);
        //         var children = ctx.children;
        //         if(children == null || children.length <= 0) return;
        //         console.log(children);
        //         var body = children[1];
                
        //         var start = body.start.start;
        //         var end = body.stop.stop;
        //         this.res += `\n${this.getRaw(start,end+1)}`
        //     }
        //     //console.log(el);
        // });
    }
    
    getRegisteredFuncs(){
        return Object.getOwnPropertyNames(LPPListener.prototype);
    }

    getAllFuncs(){
        return Object.getOwnPropertyNames(listener.prototype);
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

    containsClass(ctx){
        for (let i = 0; i < ctx.getChildCount(); i++) {
            
            var child = ctx.getChild(i);
            var cName = child.constructor.name
            if(cName === "ClassnameContext" || cName === "ClassbodyContext") return true;
            // if(child[""]
        }
        //console.log(ctx)

        return false;
    }

    isParentClass(ctx){
        var data = ctx.parentCtx;
        for(var i=1; i < 1000; i++ ){
            if(data.parentCtx != null){
                if(data.parentCtx.constructor.name === "ClassfunctionContext"){
                    return true;
                }
                data = data.parentCtx
            }else{
                break;
            }
        }
        return false
    }

    enterStat(ctx){
        var start = ctx.start.start;
        var end = ctx.stop.stop;
        if(this.isParentClass(ctx)) return;
        if(this.containsClass(ctx)) return;
        this.res += `\n${this.getRaw(start,end+1)}`
    }

    isClassFunc(ctx){
        return ctx.constructor.name === "ClassfunctionContext";
    }

    isClassGetSet(ctx){
        return ctx.constructor.name === "ClassgetsetContext";
    }

    enterClassbody(ctx){
        for (let i = 0; i < ctx.getChildCount(); i++) {
            var child = ctx.getChild(i);
            if (this.isClassFunc(child)){
                this.handleFuncDef(child);
            }else if(this.isClassGetSet(child)){
                this.handleClassgetset(child)
            }
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

    handleClassgetset(ctx){
        var name = ctx.getChild(0);
        for (let i = 2; i < ctx.getChildCount(); i++) {
            var getset = ctx.getChild(i);
            console.log(getset.constructor.name);
            if(getset != null && getset.constructor.name == "ClassgetorsetContext"){
                console.log(getset.getText());
                var isGet = getset == "get" ;
                this.res += `
function ${this.currentClass}:${isGet ? "get" : "set"}${name}(${isGet ? "" : "obj"})
    ${isGet ? `return self.${name}` : `self.${name} = obj`} 
end
    `
            }
        }
    }
}

exports.LPPListener = LPPListener;