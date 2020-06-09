package org.luapp.language.listeners;

import org.antlr.v4.runtime.ParserRuleContext;

public interface LuaPPListener {

    /**
     * Handles the time it enters the context.
     * @param enterContext The actual context.
     */
    void onEnterContext(ParserRuleContext enterContext);

    /**
     * Handles the time it exists the context
     * @param exitContext The actual context.
     */
    void onExitContext(ParserRuleContext exitContext);
}
