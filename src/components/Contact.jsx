import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ email, phone, location, emailjs_cred }) {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(emailjs_cred)
        emailjs
            .sendForm(
                emailjs_cred.SERVICE_ID,
                emailjs_cred.TEMPLATE_ID,
                e.target,
                emailjs_cred.PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSent(true);
                    setLoading(false);
                    e.target.reset();
                    setTimeout(() => setSent(false), 3000);
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);
                }
            );
    };

    return (
        <section id="contact" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                    ✉️ Contact
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    Get in touch or just say hi!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="card p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60 hover:shadow-2xl transition">
                    <h3 className="font-semibold text-lg mb-4">Say hello</h3>
                    <form className="space-y-4" onSubmit={sendEmail}>
                        <input type="hidden" name="to_name" value="Shubhangi Raundal" />
                        <input
                            required
                            name="from_name"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 outline-none"
                        />
                        <input
                            required
                            type="email"
                            name="reply_to"
                            placeholder="Your email"
                            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 outline-none"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Message"
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 outline-none"
                        />
                        <button
                            className="btn-primary w-full"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="card p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60 hover:shadow-2xl transition flex flex-col gap-6">
                    <h3 className="font-semibold text-lg">Details</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-800">
                                <Mail size={16} className="text-sky-500" />
                            </div>
                            <a className="underline underline-offset-4" href={`mailto:${email}`}>
                                {email}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                                <Phone size={16} className="text-green-500" />
                            </div>
                            {phone}
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-800">
                                <MapPin size={16} className="text-pink-500" />
                            </div>
                            {location}
                        </li>
                    </ul>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="btn-ghost bg-amber-500 mt-2 inline-flex px-3 py-1.5 rounded-lg shadow hover:shadow-lg transition text-sm w-auto self-start"
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </section>
    );
}
