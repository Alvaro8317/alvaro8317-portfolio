// Página que comparto con la audiencia de mi charla en el
// AWS Community Day: Data e IA (Mosquera, 05.09.2026).
// Es una "ventana" post-charla: agradecimiento + cupones gratuitos + redes.

import { Footer } from "../components";

const TEAL = "#0AB981";

// >>> EDITA AQUÍ los datos de la charla <<<
const talk = {
    time: "11:00 – 11:45",
    title: "Tu ruta de certificación hacia la AI Practitioner y Data Engineer Associate",
    speaker: "Álvaro Eduardo Garzón Pira",
};

type Course = { title: string; href: string; meta: string; desc: string };

// >>> Reemplaza cada `href` por la URL con cupón gratuito de Udemy <<<
// formato: https://www.udemy.com/course/<slug>/?couponCode=XXXXXXXXXXXX
const courses: Course[] = [
    {
        title: "AWS Serverless desde cero",
        href: "https://www.udemy.com/course/desarrollo-con-aws-de-cero-a-experimentado/?referralCode=5AFA70D38E4375FCEE13",
        meta: "Udemy • AWS • IaC • Cloud • 13+ horas",
        desc: "Desarrollo serverless con CloudFormation, CDK, SAM, Serverless Framework y Terraform.",
    },
    {
        title: "De cero a contratado - Cómo usar IA para conseguir trabajo",
        href: "https://www.udemy.com/course/de-cero-a-contratado-como-usar-ia-para-conseguir-trabajo/?referralCode=D8FE869F0D408BEC387D",
        meta: "IA • CV • Canva • LinkedIn",
        desc: "Mejora tu currículum y tu perfil de LinkedIn con ayuda de IA.",
    },
    {
        title: "Testing con Python - De código roto a código confiable",
        href: "https://www.udemy.com/course/draft/7089941/?referralCode=4954DA8A247154548234",
        meta: "Python • Testing • Pytest • Hypothesis • 14+ horas",
        desc: "Crea pruebas unitarias robustas y confiables.",
    },
];

export default function CommunityDay() {
    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0b0f14] dark:text-zinc-100 transition-colors">
            <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#0b0f14]/70 backdrop-blur">
                <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between">
                    <a href="#/" className="font-bold tracking-tight text-lg text-color-aws">
                        Alvaro8317
                    </a>
                    <a href="#/" className="text-sm transition-colors hover:text-amber-500">
                        ← Volver al portafolio
                    </a>
                </div>
            </header>

            <section className="mx-auto max-w-4xl px-5 py-10">
                <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: TEAL }}
                >
                    AWS Community Day: Data e IA
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                    ¡Gracias por asistir!
                </h1>
                <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
                    Gracias por acompañarme en mi charla{" "}
                    <span className="font-medium text-zinc-800 dark:text-zinc-100">
                        «{talk.title}»
                    </span>
                    . Aquí te dejo cupones de acceso gratuito a mis cursos y mis redes para que
                    sigamos en contacto.
                </p>

                {/* Charla */}
                <div
                    className="mt-8 rounded-xl border p-5"
                    style={{ borderColor: `${TEAL}55` }}
                >
                    <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: TEAL }}
                    >
                        Mi charla
                    </p>
                    <h2 className="mt-2 text-lg font-bold">{talk.title}</h2>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {talk.time} · {talk.speaker}
                    </p>
                </div>

                {/* Cupones */}
                <h2 className="mt-12 text-2xl font-bold">Cupones gratuitos de mis cursos</h2>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Los cupones son limitados y caducan; si alguno ya no funciona, escríbeme por
                    LinkedIn y te comparto uno nuevo.
                </p>
                <ul className="mt-6 grid gap-6 md:grid-cols-2">
                    {courses.map((c) => (
                        <li
                            key={c.title}
                            className="group rounded-xl border border-black/10 dark:border-white/10 p-5 transition-colors"
                        >
                            <a href={c.href} target="_blank" rel="noreferrer" className="block">
                                <h3 className="font-semibold text-lg">{c.title}</h3>
                                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    {c.meta}
                                </p>
                                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                                    {c.desc}
                                </p>
                                <span
                                    className="mt-4 inline-block rounded-full border px-4 py-1.5 text-sm transition-colors group-hover:text-white"
                                    style={{ borderColor: TEAL, color: TEAL }}
                                >
                                    Ir al curso gratis →
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
