import { useState } from "react"

type Project = {
    title: string
    href: string
    meta: string
    desc: string
}

const projects: Project[] = [
    {
        title: "Curso: AWS Serverless desde cero",
        href: "https://www.udemy.com/course/desarrollo-con-aws-de-cero-a-experimentado/?couponCode=AWS-SERVERLESS-OCT",
        meta: "Udemy • 13+ horas",
        desc:
            "Curso práctico enfocado a desarrollo serverless con AWS CloudFormation, CDK, SAM, Serverless Framework y Terraform",
    },
    {
        title: "De cero a contratado - Cómo usar IA para conseguir trabajo",
        href: "https://www.udemy.com/course/de-cero-a-contratado-como-usar-ia-para-conseguir-trabajo/?referralCode=D8FE869F0D408BEC387D",
        meta: "IA • AWS • CV • Canva • LinkedIn • Gratuito",
        desc:
            "Curso enfocado a mejorar el currículum vitae y perfil de LinkedIn",
    },
    {
        title: "Mentoría - Data engineering y cloud technologies",
        href: "#",
        meta: "Azure • MongoDB • SQL • Redis • Bash",
        desc:
            "Mentoría en Alkemy orientada a data engineering y nube Azure",
    },
];


export default function Projects() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="projects" className="mx-auto max-w-4xl px-5 py-6">
            <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
            <ul className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => {
                    const color = i < 2 ? "#a435f0" : "#4fbaef";
                    return (
                        <li
                            key={p.title}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`group rounded-xl border border-black/10 dark:border-white/10 p-5 transition-colors`}
                            style={{
                                borderColor: hovered === i ? color : "",
                            }}
                        >
                            <a href={p.href} className="block">
                                <h3
                                    className="font-semibold text-lg transition-colors"
                                    style={{
                                        color: hovered === i ? color : "",
                                    }}
                                >
                                    {p.title}
                                </h3>
                                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    {p.meta}
                                </p>
                                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                                    {p.desc}
                                </p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
