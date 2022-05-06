import imageIlluDesktop from '../images/illustration-laptop-desktop.svg';
import imageIlluMobile from '../images/illustration-laptop-mobile.svg';
const ThirdContent = () => {
    return (
        <div className='content flex-desktop2'>
            <div className='flex-desktop2-img'>
                <img src={imageIlluDesktop} id='content-illu-desktop' alt='laptop-desktop' />
                <img
                    src={imageIlluMobile}
                    id='content-illu-mobile'
                    className='content-img'
                    alt='laptop-desktop'
                />
            </div>
            <div className='flex-desktop2-text'>
                <div></div>
                <div>
                    <div className='content-text'>
                        <h2>Free, open, simple</h2>
                        <p>
                            Blogr is a free and open source application backed by a large
                            community of helpful developers. It supports features such as code
                            syntax highlighting, RSS feeds, social media integration,
                            third-party commenting tools, and works seamlessly with Google
                            Analytics. The architecture is clean and is relatively easy to
                            learn.
                        </p>
                    </div>
                    <div className='content-text'>
                        <h2>Powerful tooling</h2>
                        <p>
                            Batteries included. We built a simple and straightforward CLI tool
                            that makes customization and deployment a breeze, but capable of
                            producing even the most complicated sites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdContent;
