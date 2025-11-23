import React from 'react';

export const Transition: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 bg-brand-dark text-white flex items-center overflow-hidden">
            {/* Diagonal cut design */}
            <div className="absolute top-0 left-0 w-full h-12 md:h-20 bg-brand-paper -skew-y-2 origin-top-left z-10"></div>

            <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Abstract Graphic on Left */}
                <div className="w-full md:w-1/3 h-48 md:h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-lg transform -rotate-6 shadow-2xl border border-neutral-800"></div>
                    <div className="absolute inset-0 bg-neutral-900 rounded-lg transform rotate-3 flex items-center justify-center overflow-hidden shadow-2xl border border-neutral-800">
                        <img
                            src="/images/transition_abstract_graphic.png"
                            alt="Abstract AI visualization"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-2/3 text-center md:text-right">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4">
                        Still there?
                    </h2>
                    <p className="text-lg md:text-3xl font-light text-neutral-400">
                        I know you are more excited to see <span className="text-brand-orange font-bold">my agents</span>.
                    </p>

                    <div className="mt-8 flex justify-center md:justify-end">
                        <div className="h-1 w-24 md:w-32 bg-brand-orange"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};