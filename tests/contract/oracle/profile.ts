// A separate local profile for the shared test URL; never seed the usual notebook.
export const demoMode = new URLSearchParams(window.location.search).get('demo') === '1'
export const storageKey = (key: string) => demoMode ? `${key}.demo` : key
