import '../components/style.css';

export default function Projects() {
    return (
        <div className="container mx-auto border-b-2 border-green-950 py-5 ">
            <div className="flex justify-center">
                <h2 className="text-white text-2xl italic font-bold [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">MY CREATIONS</h2>
            </div>
            <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-10 px-10 py-5 hide-scrollbar">
            <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/Full-Stack-Netflix-Clone.git" target="_blank" rel="noopener noreferrer">
                        <img src="netflix_fullstack.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
                <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/Xs-and-Os-game.git" target="_blank" rel="noopener noreferrer">
                        <img src="game.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
                <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/userAuthentication-with-Admin-panel.git" target="_blank" rel="noopener noreferrer">
                        <img src="userwebapp.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
                <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/netflix-clone.git" target="_blank" rel="noopener noreferrer">
                        <img src="netflixland.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
                <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/Instagram-clone.git" target="_blank" rel="noopener noreferrer">
                        <img src="instaland.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
                <div className="shrink-0 w-64 snap-start">
                    <a href="https://github.com/nkill-star/starbucks-clone.git" target="_blank" rel="noopener noreferrer">
                        <img src="starbucksland.png" className="rounded-lg w-full cursor-pointer transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
            </div>

        </div>
    )
}