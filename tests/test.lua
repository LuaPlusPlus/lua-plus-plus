
animal = {}
animal.__index = animal
        
 function animal:new(name)
        self.name = name
    end
 function animal:getname()
        return self.name
    end
 function animal:setname(name)
        self.name = name
    end