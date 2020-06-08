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
                var name = data.parentCtx.constructor.name
                if(name === "ClassfunctionContext" || name === "ConstructorContext" ){
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

    isClassConstructor(ctx){
        return ctx.constructor.name === "ConstructorContext";
    }

    enterClassbody(ctx){
        for (let i = 0; i < ctx.getChild(0).getChildCount(); i++) {
            
            var child = ctx.getChild(i);
            if(child == null) continue;
            if (this.isClassFunc(child)){
                this.handleFuncDef(child);
            }else if(this.isClassGetSet(child)){
                this.handleClassgetset(child)
            }else if(this.isClassConstructor(child)){
                this.ClassConstructor(child);
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
        var nameB = ctx.getChild(0);
        for (let i = 2; i < ctx.getChildCount(); i++) {
            var getset = ctx.getChild(i);
            
            if(getset != null && getset.constructor.name == "ClassgetorsetContext"){
                console.log(getset.getText());
                var isGet = getset.getText() == "get" ;
                console.log(isGet);
                var name = nameB.getText();
                this.res += `
function ${this.currentClass}:${isGet ? "get" : "set"}${name.charAt(0).toUpperCase() + name.slice(1)}(${isGet ? "" : "obj"})
    ${isGet ? `return self.${name}` : `self.${name} = obj`} 
end
    `
            }
        }
    }
    ClassConstructor(ctx){
        //console.log(ctx);
        var funcParams = ctx.getChild(2);
        var funcBody = ctx.getChild(4);
        if(funcBody == null) return;
        var newFunc = `function ${this.currentClass}.new(${this.getRaw(funcParams.start.start, funcParams.stop.stop+1)})
        local self = {}
        setmetatable(self, ${this.currentClass})
        ${this.getRaw(funcBody.start.start, funcBody.stop.stop+1)}
        return self
        end
        `
        this.res += `\n ${newFunc}`;
    }
}

exports.LPPListener = LPPListener;