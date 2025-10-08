const Contact = () => {
    return (
        <section id="contact" className="mx-auto max-w-4xl px-5 py-12">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
                ¿Hablamos? Escríbeme a {" "}
                <a className="underline decoration-amber-500/50 underline-offset-4 hover:text-amber-500" href="mailto:eduardo831_@hotmail.com">eduardo831_@hotmail.com</a>
                , o enviame un mensaje en <a className="underline decoration-amber-500/50 underline-offset-4 hover:text-amber-500" href="https://www.linkedin.com/in/alvaro8317/">LinkedIn</a>
            </p>
        </section>

    )
}
export default Contact;