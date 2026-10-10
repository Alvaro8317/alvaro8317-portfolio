const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

const EventHeader = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#0b0f14]/70 backdrop-blur">
            <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between">
                <a href="#/" className={`font-bold tracking-tight text-lg text-color-aws ${focusRing}`}>
                    Alvaro8317
                </a>
                <a href="#/" className={`text-sm transition-colors hover:text-amber-500 ${focusRing}`}>
                    ← Volver al portafolio
                </a>
            </div>
        </header>
    );
};

export default EventHeader;
