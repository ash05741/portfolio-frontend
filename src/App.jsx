import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Herosection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import CustomCursor from "./Cursor/Cursor";

function App() {
    return (
        <div>
            <CustomCursor />

            <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2, // appears slightly after load
                }}
                className="fixed top-0 w-full z-50 bg-[#F4F3EF] border-b-4 border-[#1A1A1A]"
            >
                <Navbar />
            </motion.nav>

            {/* Removed the invalid pt-00 class */}
            <div>
                <Routes>
                    <Route path="/" element={<Herosection />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;