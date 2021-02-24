import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

import './footer.scss';

function Footer() {
    function footerContentClick() {
        window.open('https://github.com/smpledvid/Portfolio', '_blank');
    }

    return (
        <section>
            <div className="row">
                <div className="col-xs-12 ">
                    <footer id="footer">
                        <div id="footer-content" onClick={footerContentClick}><span id="footer-github-icon"><GitHubIcon/></span><span>Built by David J. Liang</span></div>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Footer;