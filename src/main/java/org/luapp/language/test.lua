--[[
Written with Lua++.
Don't remove this notice please

https://github.com/LuaPlusPlus/lua-plus-plus
]]--
cat = {}
cat.__index = cat
function cat.new(name)
	local self = {}
	setmetatable(self, cat)

	self.name = name
	return self
end
function cat:isCat()
        return true
    end
function cat.coolCat()
        return "coolCat!"
    end
function cat:getName()
	return self.name
end
function cat:setName(obj)
	self.name = obj
end
function cat:getAge()
	return self.age
end
function cat:setAge(obj)
	self.age = obj
end
function cat:getType()
	return self.type
end
local thomas = cat.new("Thomas")
thomas:setNge(50)
thomas:setName("Thomas v2")
print(thomas:isCat())
print(thomas:getName())
print(thomas:getAge())