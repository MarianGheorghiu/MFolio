import { motion } from 'framer-motion';

import Project from './Project';
import LineGradient from '../components/LineGradient';

import p1 from '../assets/project-1.jpeg';
import p2 from '../assets/project-2.jpeg';
import p3 from '../assets/project-3.jpeg';
import p4 from '../assets/project-4.jpeg';
import p5 from '../assets/project-5.jpeg';
import p6 from '../assets/project-6.jpeg';
import p7 from '../assets/project-7.jpeg';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const PROJECTS_LIST = [
    {
        title: 'Project 1',
        img: p1,
    },
    {
        title: 'Project 2',
        img: p2,
    },
    {
        title: 'Project 3',
        img: p3,
    },
    {
        title: 'Project 4',
        img: p4,
    },
    {
        title: 'Project 5',
        img: p5,
    },
    {
        title: 'Project 6',
        img: p6,
    },
    {
        title: 'Project 7',
        img: p7,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="pt-10 pb-20">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-montserrat font-semibold text-4xl">
                        <span className="text-teal-300">PRO</span> JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Here a some projects, some of them are removed because I
                    focused more to MVP projects like MBank and MSchool, so
                    yeah... Isn't much but it's honest work.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div
                        className="flex justify-center text-center items-center p-10 bg-sky-600
                max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    {PROJECTS_LIST.map((project, i) => (
                        <Project
                            key={i}
                            title={project.title}
                            img={project.img}
                        />
                    ))}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
