import { motion } from 'framer-motion';

const TestimonialsCol = ({ color, person, delay, quote }) => {
    return (
        <motion.div
            className={`mx-auto relative ${color} max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delay, duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <img
                className="h-[200px] ml-[-85px]  absolute top-[-120px]  left-1/2"
                src={person}
                alt="person"
            />
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">{quote}</p>
        </motion.div>
    );
};

export default TestimonialsCol;
