// Página que comparto con la audiencia de mi charla en el
// AWS Community Day: Data e IA (Mosquera, 05.09.2026).
// Es una "ventana" post-charla: agradecimiento + cupones gratuitos + redes.

import { EventHeader, Footer } from "../components";

const TEAL = "#0AB981";

const talk = {
    time: "11:00 – 11:45",
    title: "Tu ruta de certificación hacia la AI Practitioner y Data Engineer Associate",
    speaker: "Álvaro Eduardo Garzón Pira",
};

const awsPromo = {
    code: "AIF2CLOUD",
    href: "https://www.pearsonvue.com/us/en/aws/aif2cloud.html",
    summary:
        "AWS y Pearson VUE tienen una promoción por tiempo limitado para dar tu primer paso en certificaciones cloud: 50% de descuento en el examen AWS Certified AI Practitioner (AIF-C01) y, si lo apruebas, un examen gratis de AWS Certified Cloud Practitioner (CLF-C02).",
    conditions: [
        "Aplica el código AIF2CLOUD al pagar el registro del examen AI Practitioner en Pearson VUE.",
        "El examen AI Practitioner debe presentarse antes del 30 de septiembre de 2026 (11:59 PM hora local).",
        "El examen Cloud Practitioner gratuito debe presentarse antes del 30 de noviembre de 2026 (11:59 PM hora local).",
        "El voucher gratis del Cloud Practitioner se activa automáticamente al aprobar el AI Practitioner; si lo repruebas, pierdes ese beneficio.",
        "Sin requisitos técnicos ni de programación. Debes ser mayor de 18 años.",
        "Una promoción por persona/cuenta. No acumulable con otras ofertas, no transferible ni revendible.",
        "No disponible en Cuba, Irán, Corea del Norte, Siria, Crimea ni Rusia.",
    ],
};

type Course = { title: string; href: string; meta: string; desc: string };

const courses: Course[] = [
    {
        title: "AWS Serverless desde cero",
        href: "https://www.udemy.com/course/desarrollo-con-aws-de-cero-a-experimentado/?couponCode=019C773DC5A19DBDCA76",
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
        href: "https://www.udemy.com/course/unit-testing-con-python/?couponCode=58926150F8DC5596269B",
        meta: "Python • Testing • Pytest • Hypothesis • 14+ horas",
        desc: "Crea pruebas unitarias robustas y confiables.",
    },
];

export default function CommunityDay() {
    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0b0f14] dark:text-zinc-100 transition-colors">
            <EventHeader />

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

                {/* Promoción AWS AI Practitioner + Cloud Practitioner */}
                <h2 className="mt-12 text-2xl font-bold">
                    Promoción AWS: AI Practitioner + Cloud Practitioner
                </h2>
                <div
                    className="mt-6 rounded-xl border p-6"
                    style={{ borderColor: `${TEAL}55` }}
                >
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {awsPromo.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                            Código de descuento
                        </span>
                        <code
                            className="rounded-md border px-3 py-1 text-base font-bold tracking-widest"
                            style={{ borderColor: TEAL, color: TEAL }}
                        >
                            {awsPromo.code}
                        </code>
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Condiciones más importantes
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        {awsPromo.conditions.map((c) => (
                            <li key={c} className="flex gap-2">
                                <span style={{ color: TEAL }}>•</span>
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={awsPromo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-block rounded-full border px-4 py-1.5 text-sm transition-colors"
                        style={{ borderColor: TEAL, color: TEAL }}
                    >
                        Ver la promoción oficial →
                    </a>
                </div>

            </section>

            <Footer />
        </main>
    );
}
