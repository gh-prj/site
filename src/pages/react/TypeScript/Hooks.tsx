import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: Gender;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}

interface Theme {
    color: string
    background: string
}

type ConcreteTheme = 'light' | 'dark'

// const themes: Record<ConcreteTheme, React.CSSProperties> = {
const themes: Record<ConcreteTheme, Theme> = {
    light: {
        color: "#000",
        background: "#eee"
    },
    dark: {
        color: "#fff",
        background: "#222"
    }
}

const ThemeContext = createContext<{
    theme: Theme,
    toggle: () => void,
    setTheme?: (t: ConcreteTheme) => void
}>(
    {
        theme: themes.dark,
        toggle: () => {
            //
        }
    }
)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<ConcreteTheme>('dark');
    const toggle = useCallback<() => void>(() => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }, [currentTheme]);
    const setTheme = useCallback<(theme: ConcreteTheme) => void>(
        (theme) => { setCurrentTheme(theme) }, []
    )
    const memoizedTheme = useMemo(() => {
        return themes[currentTheme]
    }, [currentTheme])
    return (
        <ThemeContext.Provider value={{
            toggle,
            setTheme,
            theme: memoizedTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

async function getPerson(id = 1): Promise<Person> {
    return await fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
}

const ThemesExample: React.FC = () => {
    const { theme, toggle } = useContext(ThemeContext);
    return (
        <button
            style={{
                color: theme.color,
                background: theme.background
            }}
            onClick={toggle}
        >
            {theme === themes.dark ? 'Light' : 'Dark'}
        </button>
    )
}

const Hooks = () => {
    const [person, setPerson] = useState<Person | null>(null);
    useEffect(() => {
        getPerson().then(person => { setPerson(person) })
    }, []);
    return (
        <div>
            <div>
                {person?.name} - {person?.gender} - {person?.birth_year}
                <pre><code>
                    {
                        `import React, { useEffect, useState } from 'react';

interface Person {
    name: string;
    birth_year: string;
    gender: Gender;
}

enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}

async function getPerson(id = 1): Promise<Person> {
    return await fetch(${"`"}https://swapi.dev/api/people/${`$`}{id}${"`"})
        .then(response => response.json())
}

const App = () => {
    const [person, setPerson] = useState<Person | null>(null);
    useEffect(() => {
        getPerson().then(person => { setPerson(person) })
    }, []);
    return (
        <div>
            {person?.name} - {person?.gender} - {person?.birth_year}
        </div>
    );
}
`}
                </code></pre>
            </div>
            <ThemeProvider>
                <ThemesExample />
            </ThemeProvider>
            <pre><code>
                {
                    `import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface Theme {
    color: string
    background: string
}

type ConcreteTheme = 'light' | 'dark'

const themes: Record<ConcreteTheme, Theme> = {
    light: {
        color: "#000",
        background: "#eee"
    },
    dark: {
        color: "#fff",
        background: "#222"
    }
}

const ThemeContext = createContext<{
    theme: Theme,
    toggle: () => void,
    setTheme?: (t: ConcreteTheme) => void
}>(
    {
        theme: themes.dark,
        toggle: () => {
            //
        }
    }
)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<ConcreteTheme>('dark');
    const toggle = useCallback<() => void>(() => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }, [currentTheme]);
    const setTheme = useCallback<(theme: ConcreteTheme) => void>(
        (theme) => { setCurrentTheme(theme) }, []
    )
    const memoizedTheme = useMemo(() => {
        return themes[currentTheme]
    }, [currentTheme])
    return (
        <ThemeContext.Provider value={{
            toggle,
            setTheme,
            theme: memoizedTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemesExample: React.FC = () => {
    const {theme, toggle} = useContext(ThemeContext);
    return (
        <button
            style={{
                color: theme.color,
                background: theme.background
            }}
            onClick={toggle}
        >
            {theme === themes.dark ? 'Light' : 'Dark'}
        </button>
    )
}

const App = () => {
    return (
        <ThemeProvider>
            <ThemesExample />
        </ThemeProvider>
    );
}
`}
            </code></pre>
        </div>
    );
}

export default Hooks;
