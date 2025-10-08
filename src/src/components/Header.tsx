type LinkItem = { label: string; href: string; external?: boolean };
const nav: LinkItem[] = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#projects" },
    { label: "Acerca", href: "#about" },
    { label: "Contacto", href: "#contact" },
];

const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#0b0f14]/70 backdrop-blur">
            <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between">
                <a href="#home" className="font-bold tracking-tight text-lg text-color-aws">Alvaro8317</a>
                <nav className="flex items-center gap-4 text-sm">
                    {nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="relative group inline-flex items-center"
                        >
                            <span className="transition-colors group-hover:text-amber-500">
                                {n.label}
                            </span>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;