import "../../App.css";

export const Intro = () => {
    return (
        <section className="font-poppins">
            <div className="flex h-[90vh] items-center justify-center bg-black">
                <h1 className="mx-5 h-[40vh] text-6xl text-white text-center animate-slidein opacity-0 [--slidein-delay:600ms]">Get a Website with No Fuss.</h1>
            </div>
            <div className="flex h-[30vh] items-center justify-center bg-black">
                <p className="mx-5 text-2xl text-white text-center leading-10">
                    Creating websites that are fast, secure, and easy to
                    manage. We specialize in websites for small businesses,
                    non-profits, and individuals.
                </p>
            </div>
        </section>
    );
};
