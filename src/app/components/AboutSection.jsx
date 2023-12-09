'use client';
import { useTransition, useState, useRef } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, useInView } from 'framer-motion';
import { TAB_DATA } from './constants';

const AboutSection = () => {
    const ref = useRef(null);
    const [tab, setTab] = useState('services');
    const [isPending, startTransition] = useTransition();
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const cardVariants = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };

    return (
        <section className="text-white" id="about">
            <div
                ref={ref}
                className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-20 xl:px-16"
            >
                <motion.span
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{ duration: 1.2, delay: 1.5 }}
                >
                    <Image
                        src="/images/about-image.png"
                        width={500}
                        height={500}
                        alt="about"
                    />
                </motion.span>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        Hi, I'm Marian, a Software Engineer with a CS degree,
                        backed by a Master's in Advanced Computer Science. With
                        5 years in the tech industry, I've honed my expertise in
                        crafting seamless digital experiences. Beyond code, I
                        bring a creative edge with copywriting finesse and SEO
                        mastery. Let's elevate your brand's digital footprint
                        together.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {/* REFACTOR */}
                        <TabButton
                            selectTab={() => handleTabChange('services')}
                            active={tab === 'services'}
                        >
                            {' '}
                            Services{' '}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={tab === 'experience'}
                        >
                            {' '}
                            Experience{' '}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('expertise')}
                            active={tab === 'expertise'}
                        >
                            {' '}
                            Expertise{' '}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
