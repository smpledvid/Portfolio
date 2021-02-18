import './projects.scss';
import Project from '../Project/project.component';
import Fade from 'react-reveal/Fade';

function Projects() {
    return (
        <section className="section-wrapper" id="Projects">
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom><div className="section-titles">PROJECTS</div></Fade>
                </div>
            </div>
            <div className="row">
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