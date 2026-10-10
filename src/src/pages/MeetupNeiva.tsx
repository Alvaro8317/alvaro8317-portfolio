// Página que comparto con quienes asistieron a mi charla en el meetup del
// AWS User Group Neiva (13.10.2026): agradecimiento + acceso gratuito a mis cursos + redes.
// Diseño "Pase de asistente": tarjeta navy tipo ticket, un curso destacado y dos secundarios.

import { Footer } from "../components";

const talk = {
    group: "AWS User Group Neiva",
    title: "Cómo construir tu carrera en AWS",
    date: "Martes 13 de octubre de 2026",
    time: "7:00 PM (hora Colombia)",
    format: "Virtual",
    speaker: "Álvaro Eduardo Garzón Pira",
    bio: "Ingeniero de software, más de 6 años en cloud, 6 certificaciones y ponente en AWS Community Day.",
};

type Course = { title: string; href: string; meta: string; desc: string };

const featured: Course = {
    title: "AWS Serverless desde cero",
    href: "https://www.udemy.com/course/desarrollo-con-aws-de-cero-a-experimentado/?couponCode=AWS-UG-NEIVA-10-26",
    meta: "Udemy • AWS • IaC • Cloud • 13+ horas",
    desc: "Desarrollo serverless con CloudFormation, CDK, SAM, Serverless Framework y Terraform.",
};

const others: Course[] = [
    {
        title: "De cero a contratado - Cómo usar IA para conseguir trabajo",
        href: "https://www.udemy.com/course/de-cero-a-contratado-como-usar-ia-para-conseguir-trabajo/?referralCode=D8FE869F0D408BEC387D",
        meta: "IA • CV • Canva • LinkedIn",
        desc: "Mejora tu currículum y tu perfil de LinkedIn con ayuda de IA.",
    },
    {
        title: "Testing con Python - De código roto a código confiable",
        href: "https://www.udemy.com/course/unit-testing-con-python/?couponCode=AWS-UG-NEIVA-10-26",
        meta: "Python • Testing • Pytest • Hypothesis • 14+ horas",
        desc: "Crea pruebas unitarias robustas y confiables.",
    },
];

const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

export default function MeetupNeiva() {
    // No se usa href="#cursos": el hash lo interpreta el mini-router de Root.tsx.
    const goToCourses = () => {
        const el = document.getElementById("cursos");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0b0f14] dark:text-zinc-100 transition-colors">
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

            <section className="mx-auto max-w-4xl px-5 py-10">
                {/* Pase de asistente */}
                <div className="rounded-3xl bg-[#232F3E] text-white p-6 md:p-10 relative overflow-hidden">
                    <div
                        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF9900]/20"
                        aria-hidden="true"
                    />
                    <p className="relative text-xs font-semibold uppercase tracking-widest text-[#FF9900]">
                        Gracias por asistir · {talk.group}
                    </p>
                    <h1 className="relative mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                        ¡Gracias por asistir!
                    </h1>
                    <p className="relative mt-3 max-w-xl text-zinc-200">
                        «{talk.title}» · {talk.date} · {talk.time} · {talk.format}
                    </p>
                    <p className="relative mt-1 text-sm text-zinc-300">
                        {talk.speaker} · {talk.bio}
                    </p>

                    <div className="relative mt-6 border-t border-dashed border-white/30 pt-5 flex flex-wrap items-center gap-3">
                        <span className="text-sm text-zinc-200">Como asistente, tienes 3 cursos gratis</span>
                        <button
                            type="button"
                            onClick={goToCourses}
                            className={`inline-flex min-h-11 cursor-pointer items-center rounded-full bg-[#FF9900] px-5 text-sm font-bold text-[#232F3E] transition-colors hover:bg-amber-400 ${focusRing}`}
                        >
                            Ir a los cursos ↓
                        </button>
                    </div>
                </div>

                {/* Cursos */}
                <h2 id="cursos" className="mt-12 scroll-mt-24 text-2xl font-bold">
                    Tus cursos gratis
                </h2>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Los cupones son limitados y caducan; si alguno ya no funciona, escríbeme por
                    LinkedIn y te comparto uno nuevo.
                </p>

                <a
                    href={featured.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group mt-6 block rounded-2xl border-2 border-[#146EB4] dark:border-[#FF9900] p-6 md:p-8 bg-[#146EB4]/5 dark:bg-white/5 ${focusRing}`}
                >
                    <span className="inline-block rounded bg-[#FF9900] px-2 py-0.5 text-xs font-bold text-[#232F3E]">
                        DESTACADO · GRATIS
                    </span>
                    <h3 className="mt-3 text-2xl font-extrabold">{featured.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        {featured.meta}
                    </p>
                    <p className="mt-3 text-zinc-700 dark:text-zinc-300">{featured.desc}</p>
                    <span className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[#232F3E] dark:bg-[#FF9900] px-5 text-sm font-bold text-white dark:text-[#232F3E] transition-colors group-hover:bg-amber-500">
                        Reclamar acceso →
                    </span>
                </a>

                <ul className="mt-5 grid gap-5 md:grid-cols-2">
                    {others.map((c) => (
                        <li key={c.title}>
                            <a
                                href={c.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`group block h-full rounded-2xl border-2 border-dashed border-black/20 dark:border-white/20 p-5 transition-colors hover:border-[#FF9900] ${focusRing}`}
                            >
                                <span className="inline-block rounded bg-[#FF9900] px-2 py-0.5 text-xs font-bold text-[#232F3E]">
                                    GRATIS
                                </span>
                                <h3 className="mt-3 font-semibold text-lg">{c.title}</h3>
                                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    {c.meta}
                                </p>
                                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{c.desc}</p>
                                <span className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#146EB4] dark:text-amber-400 group-hover:underline">
                                    Reclamar acceso →
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <Footer />
        </main>
    );
}
