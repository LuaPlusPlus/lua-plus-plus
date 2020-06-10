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

	self.name = name
	return self
end
function cat:isCat()
        return true
    end
print("hello world?")