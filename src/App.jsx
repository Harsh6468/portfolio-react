import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Stars from "./components/canvas/Stars.jsx";
import SunCanvas from "./components/canvas/SunCanvas.jsx";
import { PROFILE } from "./constants";
import { useTheme } from "./utils/theme.jsx";

export default function App() {
    const { dark, toggle } = useTheme();

    // 🎉 confetti effect on first open
    useEffect(() => {
        if (!sessionStorage.getItem("burst")) {
            sessionStorage.setItem("burst", "1");
            const emojis = ["✨", "🎉", "🎆", "🌸", "💫"];
            let i = 0;
            const id = setInterval(() => {
                if (i++ > 12) return clearInterval(id);
                console.log("celebrate", emojis[i % emojis.length]);
            }, 120);
        }
    }, []);

    return (
        <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-amber-100/50 dark:bg-black/50 relative overflow-hidden">
            {/* Backgrounds */}
            {dark ? <Stars /> : <SunCanvas />}

            <div className="sticky top-0 left-0">
                <Navbar
                    onToggleTheme={toggle}
                    isDark={dark}
                />
                <main>
                    <Hero name={PROFILE.name} tag={PROFILE.tag} location={PROFILE.location} photo={PROFILE.photo} />
                    <About about={PROFILE.about} links={PROFILE.links} />
                    <Skills skills={PROFILE.skills} />
                    <Projects projects={PROFILE.projects} />
                    <Education education={PROFILE.education} />
                    <Experience experiences={PROFILE.experiences} />
                    <Contact email={PROFILE.email} phone={PROFILE.phone} location={PROFILE.location} emailjs_cred={PROFILE.emailjs_cred}/>
                </main>
                <Footer />
            </div>
        </div>
    );
}
