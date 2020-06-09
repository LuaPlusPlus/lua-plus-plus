package org.luapp.language.loader;

import org.luapp.language.generator.luappListener;
import org.luapp.language.listeners.LuaPPListener;
import org.reflections.Reflections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class ListenerManager {

    public List<LuaPPListener> listeners = new ArrayList();

    public void Load(){

        Reflections reflections = new Reflections("org.luapp.language.handlers");
        Set<Class<? extends LuaPPListener>> listeners = reflections.getSubTypesOf(LuaPPListener.class);

        for (Class<? extends LuaPPListener> listener : listeners) {
            System.out.println("Registered Listener: " + listener.getCanonicalName());
            try {
                LuaPPListener listenerInstance = listener.newInstance();
                this.Register(listenerInstance);
            } catch (InstantiationException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }

    }

    public void Register(LuaPPListener listener){
        listeners.add(listener);
    }
}
