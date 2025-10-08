type LinkItem = { label: string; href: string; external?: boolean };

const quickLinks: LinkItem[] = [
    { label: "GitHub", href: "https://github.com/alvaro8317", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alvaro8317/", external: true },
    { label: "Udemy", href: "https://www.udemy.com/user/alvaro-eduardo-garzon/", external: true },
    {
        label: "CV (PDF)",
        href: "https://alvaro8317-udemy-courses.s3.us-east-1.amazonaws.com/public/Alvaro+Garzon%2C+Senior+Software+Engineer.pdf",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="mx-auto max-w-5xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
        >
            {/* Texto principal */}
            <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Hola, soy {" "}
                    <span className="text-amber-500">Alvaro8317 </span>
                    Construyo productos en la nube.
                </h1>
                <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
                    Cloud Developer e instructor en Udemy enfocado en AWS: Lambda, API Gateway,
                    DynamoDB, S3, CDK/SAM y CI/CD. Me gusta diseñar sistemas simples, escalables y
                    bien documentados, además de enseñar y mentorear.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    {quickLinks.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noreferrer" : undefined}
                            className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQEQYX5dT_vrxQ/profile-displayphoto-shrink_800_800/B56ZPfEh19G8Ag-/0/1734614327470?e=1762992000&v=beta&t=7_A7avrYuhUH1FQJH91bjogHUC39M9XwdGc5tuTg1MU"
                    alt="Foto de Álvaro Garzón"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-amber-500/20"
                />
            </div>
        </section>
    );
}
