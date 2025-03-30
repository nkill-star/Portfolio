export default function Profile() {
    return (
        <div className="container mx-auto border-b-2 border-green-950 py-5 flex flex-col items-center gap-4">
            <div className="w-32 sm:w-40 md:w-48 lg:w-52 h-32 sm:h-40 md:h-48 lg:h-52 rounded-full overflow-hidden shadow-[0_0_50px_10px_rgba(0,255,0,0.5)]">
                <img className="w-full h-full object-cover" src="/Profile.jpeg"></img>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-4 text-center">
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-bold leading-tight 
                   [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">
                    Hi
                </h2>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-bold leading-tight 
                   [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">
                    I'M NIKHIL S RICHIE
                </h2>
                <h2 className="text-green-500 text-xs sm:text-sm md:text-base italic">
                    WEB DEVELOPER
                </h2>
            </div>
        </div>

    )
}