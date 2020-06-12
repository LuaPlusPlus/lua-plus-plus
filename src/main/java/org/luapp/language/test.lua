--[[
Written with Lua++.
Don't remove this notice please

https://github.com/LuaPlusPlus/lua-plus-plus
]]--
concommand.Add('test.lpp', function()
        local thomas = cat.new("Thomas!")
        thomas:setAge(50)
        thomas:setName("Thomas v2")
        print(thomas:isCat()) -- outputs -> true
        print(thomas:getName()) -- outputs -> "Thomas v2"
        print(thomas:getAge()) -- outputs -> 50
end)