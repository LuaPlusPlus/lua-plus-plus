package org.luapp.language.loader;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappListener;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;
import org.reflections.Reflections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class ListenerManager {

    public List<LuaPPListener> listeners = new ArrayList<LuaPPListener>();

    public List<Integer> ignoredStatements = new ArrayList<Integer>();

    public void Load(){

        Reflections reflections = new Reflections("org.luapp.language.handlers");
        Set<Class<? extends LuaPPListener>> listeners = reflections.getSubTypesOf(LuaPPListener.class);

        for (Class<? extends LuaPPListener> listener : listeners) {
            System.out.println("Registered Listener: " + listener.getCanonicalName());
            try {
                LuaPPListener listenerInstance = listener.newInstance();
                listenerInstance.setListenerManager(this);
                this.Register(listenerInstance);
            } catch (InstantiationException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }

    }

    public void RegisterIgnoredContext(int ignoredClass){
        this.ignoredStatements.add(ignoredClass);
    }

    /**
     * Get's a Listener instance from it's target ID.
     * @param target The rule ID
     * @return Listener
     */
    public LuaPPListener GetInstangeByTarget(int target){
        return listeners
                .stream()
                .filter((listener)-> listener.target == target)
                .findFirst()
                .orElse(null);
    }

    public void Register(LuaPPListener listener){
        listeners.add(listener);
    }
}
