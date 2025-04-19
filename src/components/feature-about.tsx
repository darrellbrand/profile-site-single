
import {
    Smartphone,
    Palette,
    Layers3,
    FlaskConical,
    Globe,
    TerminalSquare,
    Server,
    Lock,
} from "lucide-react";
import { SVGProps, useId, } from "react";

export function FeaturesSectionDemoAbout() {
    return (
        <section id="skills"className="bg-neutral-300/80 dark:bg-neutral-200/40">
           
            <div className="flex mb-5 flex-col items-start max-w-7xl mx-auto " >
            <h1 className="text-2xl my-20 font-bold  md:text-3xl lg:text-5xl dark:text-neutral-300 text-neutral-600">Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 ">
                    {grid.map((feature) => (
                        <div
                            key={feature.title}
                            className="relative  bg-gradient-to-b dark:from-neutral-900/20 from-neutral-100 dark:to-neutral-950 to-neutral-400 p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:bg-neutral-200 dark:hover:bg-neutral-700/60"
                        >
                            <Grid size={20} />
                            <div className="text-center ">
                                <feature.icon className="m-4"></feature.icon>
                                <p className="text-base font-bold relative z-20  dark:text-neutral-300 text-neutral-600">
                                    {feature.title}
                                </p>
                                <p className=" mt-4 text-base font-normal relative z-20  dark:text-neutral-300 text-neutral-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const grid = [

    {
        icon: Smartphone,
        title: "Native Android Development",
        description: "Robust Android apps using Kotlin, focusing on performance, maintainability, and modern coding practices.",
    },
    {
        icon: Palette,
        title: "Jetpack Compose & Modern UI Design",
        description: "Sleek, declarative UIs with Jetpack Compose, embracing Material Design, animations, and responsive design tailored for modern Android experiences.",
    },
    {
        icon: Layers3,
        title: "Scalable Modern Android Architecture",
        description: "Clean, modular architectures using MVVM, and Dagger Hilt, ensuring testability and long-term scalability.",
    },
    {
        icon: FlaskConical,
        title: "Appium & End-to-End Mobile Testing",
        description: "Automated mobile testing pipelines using Appium, enabling efficient regression testing and CI integrations for consistent quality assurance.",
    },
    {
        icon: Globe,
        title: "Next.js + TypeScript Web Development",
        description: "Fast, SEO-optimized web applications using Next.js and TypeScript, with a strong focus on reusable components and delivering polished, customer-facing interfaces that meet client requirements.",
    },
    {
        icon: TerminalSquare,
        title: "Scripting & Automation",
        description: "Automated dev tasks and builds using Python, Lua, Bash, and NSIS, streamlining complex workflows and supporting cross-platform development.",
    }, {
        icon: Server,
        title: "Java Spring Boot Backend",
        description: "Scalable backend services with Spring Boot, handling secure API requests.",
    },
    {
        icon: Lock,
        title: "Spring Security & JWT Authentication",
        description: "Secured applications using JWT tokens for authentication and role-based access.",
    },

];
interface GridProps {
    pattern?: Square[];
    size?: number;
}
export const Grid = ({
    pattern,
    size,
}: GridProps) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute  h-full w-full ">
            <div className="absolute inset-0     ">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/20 dark:stroke-white/10 stroke-neutral-950/20 fill-neutral-950/30"
                />
            </div>
        </div>
    );
};
type Square = [number, number];

interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string;
    y: string;
    squares: Square[];
}
export function GridPattern({ width, height, x, y, squares, ...props }: GridPatternProps) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: Square) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
