import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';

import skillsImg from '../assets/skills-image.png';
import SkillsCol from './SkillsCol';

const SKILLS = [
    {
        delay: 0,
        color: 'bg-blue',
        number: '01',
        topText: 'Experience',
        bottomText: `I have 4 years of experience. I work for a trading company and I use Angular to build custom stuff for our clients. Why Angular when your project are in React ? Well, I like to build fun stuff in React because React is everywhere.`,
    },
    {
        delay: 0.2,
        color: 'bg-red',
        number: '02',
        topText: 'Innovative',
        bottomText: `When to use iterative development ? You should use iterative development only on projects that you want to succeed !`,
    },
    {
        delay: 0.4,
        color: 'bg-emerald-500',
        number: '03',
        topText: 'Imaginative',
        bottomText: `Optimism is an occupational hazard of programming: feedback is the treatment.`,
    },
];

const MySkills = () => {
    const isAboveLarge = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMG */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-montserrat font-semibold text-4xl mb-5">
                        MY <span className="text-blue">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Some of my skills, I have more but I am very introvert.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src={skillsImg}
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src={skillsImg} />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {SKILLS.map((skill) => (
                    <SkillsCol
                        key={skill.number}
                        delay={skill.delay}
                        color={skill.color}
                        number={skill.number}
                        topText={skill.topText}
                        bottomText={skill.bottomText}
                    />
                ))}
            </div>
        </section>
    );
};

export default MySkills;
