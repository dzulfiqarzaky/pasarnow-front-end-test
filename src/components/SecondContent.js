import phoneIllustration from '../images/illustration-phones.svg';

const SecondContent = () => {
    return (
        <div className='content-infra'>
            <div>
                <img
                    src={phoneIllustration}
                    id='phone-illu'
                    className='content-infra-content'
                    alt='phone'
                />
            </div>
            <div className='content-infra-content desktop-text'>
                <h1>State of the Art Infrastructure</h1>
                <p>
                    With reliability and speed in mind, worldwide data centers provide the
                    backbone for ultra-fast connectivity. This ensures your site will load
                    instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </div>
        </div>
    );
};

export default SecondContent;
