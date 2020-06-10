--[[
Written by nosharp (https://nosharp.cc),
tom.bat (tomdotbat.dev),
samuel milton (smilton.dev)
]]--
cat = {}
cat.__index = cat
function cat:new(name)
	local self = {}
	setmetatable(self, cat)

for k,v in pairs(animal) do 
        self[k] = v
    end 
	self.name = name
	return self
end
function cat:isCat()
        return true
    end
print("hello world?")