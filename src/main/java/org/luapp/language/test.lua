--[[
Written with Lua++.
Don't remove this notice please

https://github.com/LuaPlusPlus/lua-plus-plus
]]--
ogl_suits.abilityMeta = {}
ogl_suits.abilityMeta.__index = ogl_suits.abilityMeta
function ogl_suits.abilityMeta:new(name)
	local self = {}
	setmetatable(self, ogl_suits.abilityMeta)

	self.name = name
	return self
end
function ogl_suits.abilityMeta:addHook(hookName, func)
        hook.Add(hookName, hookName .. "suits_ability", func)
    end
function ogl_suits.abilityMeta:getName()
	return self.name
end
function ogl_suits.abilityMeta:setName(obj)
	self.name = obj
end