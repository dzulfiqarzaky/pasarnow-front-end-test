import editorDesktop from '../images/illustration-editor-desktop.svg';
import editorMobile from '../images/illustration-editor-mobile.svg';

const FirstContent = () => {
    return (
        <div className='content'>
            <h2>Designed for the future</h2>

            <div className='flex-desktop'>
                <div className='flex-desktop-img'>
                    <img src={editorDesktop} id='content-editor-desktop' alt='desktop' />
                    <img
                        src={editorMobile}
                        id='content-editor-mobile'
                        className='content-img'
                        alt='desktop'
                    />
                </div>
                <div className='flex-desktop-text'>
                    <div>
                        <h2>Introducing an extensible editor</h2>
                        <p>
                            Blogr features an exceedingly intuitive interface which lets you
                            focus on one thing: creating content. The editor supports
                            management of multiple blogs and allows easy manipulation of embeds
                            such as images, videos, and Markdown. Extensibility with plugins
                            and themes provide easy ways to add functionality or change the
                            looks of a blog.
                        </p>
                    </div>
                    <div>
                        <h2>Robust content management</h2>
                        <p>
                            Flexible content management enables users to easily move through
                            posts. Increase the usability of your blog by adding customized
                            categories, sections, format, or flow. With this functionality,
                            you’re in full control.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstContent;
