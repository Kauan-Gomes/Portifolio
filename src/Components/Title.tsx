import gsap from "gsap";
import { useLayoutEffect } from "react";

const Title = ({ text }: any) => {
    useLayoutEffect(() => {
        const colors = ['#1ae64d', '#189ddb', '#1ae64d', '#189ddb'];
        const durationPerColor = 0.5;

        const gradientElement = document.querySelectorAll(".titulo .borda-inferior");
        if (!gradientElement) {
            console.error("Elemento de gradiente não encontrado");
            return;
        }

        let currentIndex = 0;

        const animateGradient = () => {
            gsap.to(gradientElement, {
                background: `linear-gradient(to right, ${colors[currentIndex]}, ${colors[currentIndex + 1]})`,
                duration: durationPerColor,
                ease: 'none',
                onComplete: () => {
                    currentIndex = (currentIndex + 1) % (colors.length - 1);
                    animateGradient();
                },
            });
        };

        animateGradient();

        return () => {
            gsap.killTweensOf(gradientElement);
        };
    }, []);

    return (
        <div className="titulo">
            <h2 className='text-3xl texto_alternativo relative'>{text}</h2>
            <span className="w-full h-0.5 block mt-2 mx-auto rounded-full borda-inferior" />
        </div>
    )

};

export default Title;