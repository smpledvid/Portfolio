import './projects.scss';
import Project from '../Project/project.component';
import Fade from 'react-reveal/Fade';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Card from '@material-ui/core/Card';

function Projects() {
    return (
        <section className="section-wrapper" id="Projects">
            <div className="row">
                <div className="col-md-12">
                    {/* <Fade bottom> */}
                        <div className="section-titles">
                            <span><SettingsOutlinedIcon className="projects-icon"/></span>
                            <span>PROJECTS</span>
                        </div>
                    {/* </Fade> */}
                </div>
            </div>
            <div className="row projects-list-row">
                <div className="col-md-12">
                    <Fade bottom>
                        <Project />
                    </Fade>
                </div>
                <div className="col-md-12">
                    <Fade bottom>
                        <Project />
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Projects;