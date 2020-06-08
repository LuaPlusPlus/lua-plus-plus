
animal = {}
animal.__index = animal
        
function animal:setname(obj)
    self.name = obj 
end
    
 function animal:new(name)
        self.name = name
    end
 function animal:getname()
        return self.name
    end
 function animal:setname(name)
        self.name = name
        if(#self.name > 100)then 
            print("that's a long name!")
        end
    end
local function b() end
local b = new
animal()
b:setname("Test")
print(b:getname())