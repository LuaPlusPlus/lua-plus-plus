--[[
Written with Lua++.
Don't remove this notice please

https://github.com/LuaPlusPlus/lua-plus-plus
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
function cat.testing()
       return "test13"
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
print("hello world?")
if 1==1 then print("helloworld2") end