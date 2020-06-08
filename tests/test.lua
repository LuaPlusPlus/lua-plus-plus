--Generated with Lua++, Written by NoSharp

animal = {}
animal.__index = animal
        
function animal:getName()
    return self.name 
end
    
function animal:setName(obj)
    self.name = obj 
end
    
function animal.new(name)
    local self = {}
    setmetatable(self, animal)
    self.name = name
    return self
    end
        
 function animal:testName(name)
        self.name = name
        if (#self.name > 100) then 
            print("that's a long name!")
        end
    end
local function b() end
local b = new
animal()
b:setname("Test")
print(b:getname())