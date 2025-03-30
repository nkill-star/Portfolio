export default function About() {
    return (
        <div className="container mx-auto border-b-2 border-green-950 py-5">
            <div className="flex justify-center">
                <h2 className="text-white text-xl sm:text-2xl italic font-bold text-center 
                       [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">
                    ABOUT
                </h2>
            </div>
            <div className="flex justify-center px-4 sm:px-10 md:px-20 lg:px-52 xl:px-72 py-5">
                <h2 className="text-white text-sm sm:text-base md:text-md lg:text-md xl:text-lg text-center leading-relaxed">
                    I am a self-motivated tech enthusiast and aspiring developer with a strong passion for web development.
                    I specialize in HTML, CSS, JavaScript, Node.js, MongoDB, and Express.js, continuously expanding my
                    knowledge through hands-on projects and self-learning. I am dedicated to improving my skills, including
                    communication and strategic thinking, while working towards building a successful career in tech.
                </h2>
            </div>

            <div className="flex justify-center">
                <a
                    href="/Nikhil S Richie Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="text-white rounded-2xl text-xs bg-black shadow-[0_0_20px_5px_rgba(0,255,0,0.5)] px-10 py-1 hover:shadow-[0_0_25px_7px_rgba(0,255,0,0.8)] transition">RESUME</button>
                </a>
            </div>

        </div>
    )
}