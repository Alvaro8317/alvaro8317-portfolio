import { About, Contact, Experience, Header, Hero, Projects } from "./components";

export default function Site() {
    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0b0f14] dark:text-zinc-100 transition-colors">
            <Header />
            <Hero />
            <Experience />
            <Projects />
            <About />
            <Contact />
            <footer className="mx-auto max-w-4xl px-5 py-10 text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} Álvaro Garzón — Hecho con React + Typescript + Tailwind.
            </footer>
        </main>
    );
}
