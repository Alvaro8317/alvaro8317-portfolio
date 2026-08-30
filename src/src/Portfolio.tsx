import { About, Contact, Experience, Footer, Header, Hero, Projects } from "./components";

export default function Site() {
    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0b0f14] dark:text-zinc-100 transition-colors">
            <Header />
            <Hero />
            <Experience />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
