import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import TestimonialsCol from './TestimonialsCol';

import p1 from '/assets/person-1.png';
import p2 from '/assets/person-2.png';
import p3 from '/assets/person-3.png';

const TESTIMONIALS_LIST = [
    {
        color: 'bg-violet-500',
        person: p1,
        delay: 0,
        quote: `Good looking and very handsome programmer. Also he built an online store for me.`,
    },
    {
        color: 'bg-red',
        person: p2,
        delay: 0.2,
        quote: `Dedicated, good looking and also he woke up early in the morning for me and for computer.`,
    },
    {
        color: 'bg-blue',
        person: p3,
        delay: 0.4,
        quote: `Imagine a world without UI experience.`,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="pt-20 pb-20">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-montserrat font-semibold text-4xl mb-5 text-cyan-300">
                    TESTIMONIALS
                </p>
                <LineGradient width="mx-auto w-2/5" />
                <p className="mt-10">
                    Here's What People are Saying About My Work.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
                {TESTIMONIALS_LIST.map((person, i) => (
                    <TestimonialsCol
                        key={i}
                        color={person.color}
                        delay={person.delay}
                        quote={person.quote}
                        person={person.person}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
