'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict, Lang } from "@/app/i18n/dict";

const SUPPORTED: Lang[] = ['pt', 'en', 'es']

function detectLang(): Lang {
    if (typeof window === 'undefined') return 'pt'
    try {
        const stored = window.localStorage.getItem('lang') as Lang | null
        if (stored && SUPPORTED.includes(stored)) return stored
    } catch {}
    const nav = typeof navigator !== 'undefined' ? (navigator.languages?.[0] || navigator.language || 'pt') : 'pt'
    const code = nav.toLowerCase().slice(0, 2)
    if (code === 'en') return 'en'
    if (code === 'es') return 'es'
    return 'pt'
}

interface ContextType {
    color: boolean,
    handleColor: () => void,
    lang: Lang,
    setLang: (l: Lang) => void,
    t: (key: string) => string,
}

const MyContext = createContext<ContextType | undefined>(undefined)

export function ContextProvider({ children }: { children: ReactNode }) {
    const [color, setColor] = useState(false)
    const [lang, setLangState] = useState<Lang>('pt')

    useEffect(() => {
        setLangState(detectLang())
    }, [])

    const setLang = useCallback((l: Lang) => {
        setLangState(l)
        try { window.localStorage.setItem('lang', l) } catch {}
    }, [])

    const handleColor = () => setColor(!color)

    const t = useCallback((key: string): string => {
        const parts = key.split('.')
        const walk = (root: unknown) => {
            let cur: unknown = root
            for (const p of parts) {
                if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
                    cur = (cur as Record<string, unknown>)[p]
                } else {
                    return undefined
                }
            }
            return cur
        }
        const found = walk(dict[lang])
        if (typeof found === 'string') return found
        const fb = walk(dict.pt)
        return typeof fb === 'string' ? fb : key
    }, [lang])

    const value = useMemo(() => ({ color, handleColor, lang, setLang, t }), [color, lang, t])

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext(): ContextType {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a ContextProvider");
    }
    return context;
}
