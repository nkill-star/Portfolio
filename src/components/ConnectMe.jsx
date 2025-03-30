export default function ConnectMe() {
    return (
        <div className="container mx-auto  py-5">
            <div className="flex justify-center">
                <h2 className="text-white text-2xl italic font-bold [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">CONNECT WITH ME</h2>
            </div>
            <div className="flex justify-center px-4 sm:px-10 md:px-20 lg:px-52 xl:px-72 py-5">
                <h2 className="text-white text-sm sm:text-base md:text-md lg:text-md xl:text-lg text-center leading-relaxed">I'm always excited to connect with fellow professionals, potential collaborators, and tech enthusiasts. Whether you have a project idea, a question about my work, or just want to chat about the latest trends in IT, feel free to reach out!</h2>
            </div>
            <div className="flex justify-center">
                <h3 className="text-white text-md italic font-bold [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">Let's Connect:</h3>
            </div>
            <div className="flex justify-center gap-x-2 px-52 py-1">
                <div>
                    <a href="https://github.com/nkill-star" target="_blank" rel="noopener noreferrer">
                        <img className="w-5 cursor-pointer" src="/github.png"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/nikhil-s-richie/" target="_blank" rel="noopener noreferrer">
                        <img className="w-5 cursor-pointer" src="/linkedin.png"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/n._kill/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img className="w-5 cursor-pointer" src="/instagram.png"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}