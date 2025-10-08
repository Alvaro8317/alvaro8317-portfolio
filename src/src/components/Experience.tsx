
type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    type: string;
    highlights: string[];
    tags: string[];
};

const experiences: ExperienceItem[] = [
    {
        company: "BOLD",
        role: "Software Engineer",
        period: "12.2024 — Presente",
        type: "Full-time",
        highlights: [
            "Diseño y desarrollo de un sistema de incorporación y gestión de comercios fintech mediante Diseño Dirigido por el Dominio (DDD) para lograr escalabilidad y resiliencia.",
            "Construcción de una infraestructura serverless capaz de gestionar más de 1200 transacciones por minuto, validada mediante pruebas de carga con Apache JMeter.",
            "Implementación de un flujo de adquirencia con integración directa con VISA y Mastercard, garantizando el rendimiento y el cumplimiento de la seguridad.",
            "Liderazgo de tareas de ingeniería de datos utilizando dbt (Data Build Tool) para obtener información analítica y generar informes sobre datos transaccionales.",
            "Automatización de canalizaciones de datos y flujos de trabajo analíticos en entornos en la nube con AWS Step Functions.",
            "Trabajo con herramientas y servicios como AWS (Lambda, SQS, S3), DynamoDB, Apache Hudi y Spark.",
            "Contribución a la revisión de código, el diseño de servicios backend y la documentación técnica.",
        ],
        tags: [
            "Acquiring",
            "AWS",
            "Backend",
            "Data Engineering",
            "DBT",
            "DevOps",
            "Domain Driven Design (DDD)",
            "Fintech",
            "Grafana",
            "Python",
        ],
    },
    {
        company: "PRAGMA",
        role: "Senior Software Developer",
        period: "03.2023 — 12.24",
        type: "Full-time",
        highlights: [
            "Desarrollé una aplicación utilizando Node.js y WebSocket para comunicación en tiempo real, empleando React para una interfaz de usuario dinámica y atractiva.",
            "Colaboré en la integración mediante gRPC y Protocol Buffers (Proto3) para lograr una serialización y deserialización óptimas.",
            "Implementé Grafana para observabilidad proactiva y reactiva.",
            "Mejoré el rendimiento de consultas SQL mediante vistas normales y materializadas.",
            "Creé documentación con OpenAPI 3.0, garantizando claridad en el desarrollo e integración de APIs.",
            "Desarrollé un sistema de cifrado dual utilizando AES-256 y RSA para proteger información sensible.",
            "Profundo entendimiento de los principios de desarrollo, seguridad y optimización en Node.js y React. Implementé flujos de OAuth 2.0 con AWS Cognito para autenticación segura.",
            "Propuse y lideré el desarrollo de un sistema de cifrado tipo 'envelope' utilizando AWS Key Management Service (KMS) para múltiples servicios web que manejan información bancaria y financiera confidencial. Creé una solución altamente escalable que resolvió problemas de rendimiento presentes en métodos alternativos.",
        ],
        tags: [
            "AES-256",
            "AWS Cognito",
            "AWS KMS",
            "Documentación",
            "Grafana",
            "gRPC",
            "Node.js",
            "OAuth 2.0",
            "OpenAPI 3.0",
            "Optimización de rendimiento",
            "PostgreSQL",
            "Protocol Buffers",
            "React",
            "RSA",
            "Seguridad",
            "WebSocket",
        ]
    },
];

const Experience = () => {
    return (
        <section id="experience" className="mx-auto max-w-4xl px-5 py-6">
            <h2 className="text-2xl font-bold mb-8">Experiencia reciente</h2>
            <div className="space-y-12">
                {experiences.map((exp) => (
                    <div
                        key={exp.company}
                        className="border border-black/10 dark:border-white/10 rounded-xl p-6 hover:border-amber-500 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-amber-500">{exp.company}</h3>
                                <p className="font-medium text-zinc-700 dark:text-zinc-200">{exp.role}</p>
                            </div>
                            <div className="text-right text-sm text-zinc-500 dark:text-zinc-400">
                                <p>{exp.type}</p>
                                <p>{exp.period}</p>
                            </div>
                        </div>

                        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1 mb-4">
                            {exp.highlights.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;