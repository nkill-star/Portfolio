export default function LearningStack() {
    return (
        <div className="container mx-auto border-b-2 border-green-950 py-5">
            <div className="flex justify-center">
                <h2 className="text-white text-2xl italic font-bold [text-shadow:_0_4px_4px_rgb(0_255_0_/_0.5)]">CURRENTLY LEARNING STACK</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-10 md:px-20 lg:px-32 py-5">
                <div><img className="w-14 sm:w-16 md:w-20" src="/react.png"></img></div>
                <div> <img className="w-14 sm:w-16 md:w-20" src="/next.png"></img></div>
                <div> <img className="w-14 sm:w-16 md:w-20" src="/redux.png"></img></div>
                <div> <img className="w-14 sm:w-16 md:w-20" src="/tailwind.png"></img></div>
            </div>
        </div>
    )
}