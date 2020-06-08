--[[
    Generated with Lua++, 
    Language written by NoSharp, Smilton
    With contributions from Tom.Bat
]]--

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
cat = {}
cat.__index = cat
        
function cat:getName()
    return self.name 
end
    
function cat:setName(obj)
    self.name = obj 
end
    
 
function cat.new(name)
    local self = {}
    setmetatable(self, cat)
    self = new animal("b")
    
    for k,v in pairs(animal) do 
        self[k] = v
    end

    return self
end
        
 function cat:testName(name)
        self.name = name
        if (#self.name > 100) then 
            print("that's a long name!")
        end
    end
  self = animal.new("b")
local function b() end
 local b = cat.new("Thomas")
print(b:getName())