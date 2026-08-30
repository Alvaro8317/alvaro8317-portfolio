import { useEffect, useState } from 'react'
import Portfolio from './Portfolio.tsx'
import CommunityDay from './pages/CommunityDay.tsx'

// Mini-router por hash: solo distingue la ruta del evento
// (`#/community-day-data-ai-mosquera-2026`).
// Cualquier otro hash (`#projects`, `#about`, ...) cae en el portafolio y el
// navegador hace scroll a esa ancla de forma nativa.
function currentRoute() {
    return window.location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
}

export default function Root() {
    const [route, setRoute] = useState(currentRoute);

    useEffect(() => {
        const onChange = () => setRoute(currentRoute());
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    return route === 'community-day-data-ai-mosquera-2026' ? <CommunityDay /> : <Portfolio />;
}
