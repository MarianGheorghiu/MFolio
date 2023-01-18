import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
    return (
        <footer className="h-64 bg-slate-800 pt-10">
            <div className="w-10/12 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-montserrat font-semibold text-2xl text-white">
                        MARIAN GHEORGHIU
                    </p>
                    <p className="font-montserrat mt-2 text-md text-white">
                        ©2023 MG. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
