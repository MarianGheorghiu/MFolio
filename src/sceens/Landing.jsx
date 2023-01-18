import useMediaQuery from '../hooks/useMediaQuery';

import { motion } from 'framer-motion';

import profileImg from '../assets/profile-image.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';

const largeProfileImage = <img src={profileImg} alt="profile" />;

const smallProfileImage = (
    <img
        src={profileImg}
        alt="profile"
        className="z-10 w-full max-w-[500px] md:max-w-[600px]"
    />
);

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Image section */}
            <div className="md:order-2 h-[600px] flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? largeProfileImage : smallProfileImage}
            </div>
            {/* main section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Marian {''}
                        <span
                            className="xs:relative text-center xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            <span className="ml-20 text-white">G</span>
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Software engineer with good experience in Front-End
                        world. I work in Angular, but I like React / Next JS to
                        build fun stuff.
                    </p>
                </motion.div>

                {/* Contact */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm font-montserrat py-3 px-8 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue ml-2 py-0.5 pr-0.5 pl-0.5"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        <div className="bg-deep-blue font-montserrat hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10">
                            Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                {/* SOCIAL MEDIA */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
