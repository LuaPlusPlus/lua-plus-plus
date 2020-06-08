var listener = require("./luappListener").luappListener;


class LPPListener extends listener {
    res = "";
    currentClass = "";
    abstractClass = "";
    raw = "";

    constructor(raw){
       
        super();
        this.raw = raw;
        
        var allFuncs = this.getAllFuncs();
        var myFuncs = this.getRegisteredFuncs();
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
    getRawCtx(ctx){
        return this.getRaw(ctx.start.start, ctx.stop.stop+1);
    }
    
    handleFuncDef(ctx){
        ////console.log(ctx);
        var children = ctx.children;
        if(children == null || children.length <= 0) return;
        ////console.log(children);
        var name = children[1];
        var body = children[2];
        
        var start = body.start.start;
        var end = body.stop.stop;
        // //console.log("ITEM:" + this.getRaw(start,end))
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
        ////console.log(ctx)

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

    isChildContext(ctx, name){
        for (let i = 0; i < ctx.getChildCount(); i++) {
            
            var child = ctx.getChild(i);
            var cName = child.constructor.name
            if(cName === name ) return true;
            // if(child[""]
        }
        return false;
    }


    isNewClass(ctx){
        return this.isChildContext(ctx,"NewclassContext");
    }

    isMinusEquals(ctx){
        return this.isChildContext(ctx, "MinusEqualContext")
    }

    enterStat(ctx){
        var start = ctx.start.start;
        var end = ctx.stop.stop;
        if(this.isNewClass(ctx)){
            this.newHandler(ctx);
            return;
        }
        if(this.isParentClass(ctx)) return;
        else if(this.containsClass(ctx)) return;
        else if(this.isMinusEquals(ctx)){
            this.minusEqualsHandler(ctx);
            return;
        }
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
        // //console.log(this.currentClass)
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
    
    enterAbstractclassname(ctx){
        //console.log(ctx.getText())
        var className = ctx.getText();
        this.abstractClass = className;
    }

    exitAbstractclassname(){
        
    }
    
    exitClassbody(){
        this.abstractClass = "";
        this.currentClass = "";
    }

    handleClassgetset(ctx){
        var nameB = ctx.getChild(0);
        for (let i = 2; i < ctx.getChildCount(); i++) {
            var getset = ctx.getChild(i);
            
            if(getset != null && getset.constructor.name == "ClassgetorsetContext"){
                //console.log(getset.getText());
                var isGet = getset.getText() == "get" ;
                //console.log(isGet);
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
        ////console.log(ctx);
        var funcParams = ctx.getChild(2);
        var funcBody = ctx.getChild(4);
        if(funcBody == null) return;
        //console.log(this.abstractClass);
        var newFunc = `
function ${this.currentClass}.new(${this.getRaw(funcParams.start.start, funcParams.stop.stop+1)})
    local self = {}
    setmetatable(self, ${this.currentClass})
    ${this.getRaw(funcBody.start.start, funcBody.stop.stop+1)}
    ${this.abstractClass != "" ? `
    for k,v in pairs(${this.abstractClass}) do 
        self[k] = v
    end` : ""}

    return self
end
        `
        this.res += `\n ${newFunc}`;
    }
    
    newHandler(ctx){
        var isLocal = ctx.getText().startsWith("local")
        var name = this.getRawCtx(ctx.getChild(isLocal ? 1 : 0));
        var newClassCall = ctx.getChild(isLocal ? 3 : 2);
        var parmasChild = newClassCall.getChild(2);
        //console.log(newClassCall.getChild(2).constructor.name);
        var parmas = parmasChild.constructor.name != "ArgsContext" ? "" : this.getRawCtx(parmasChild);
        var clazzName = this.getRawCtx(newClassCall.getChild(1));
        this.res += `\n ${isLocal ? "local" : ""} ${name} = ${clazzName}.new${parmas}`;
    }

    minusEqualsHandler(ctx){
        //console.log(ctx);
        var name = this.getRawCtx(ctx.getChild(1));
    }
}

exports.LPPListener = LPPListener;