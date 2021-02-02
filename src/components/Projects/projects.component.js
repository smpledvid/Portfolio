import './projects.scss';
import Project from '../Project/project.component';
import Fade from 'react-reveal/Fade';

function Projects() {
    return (
        <section className="section-wrapper" id="Projects">
            <div className="row">
                <Fade bottom><div className="col-md-12 section-titles">Projects</div></Fade>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Fade bottom>
                        <Project />
                    </Fade>
                </div>
                <div className="col-lg-6">
                    <Fade bottom>
                        <Project />
                    </Fade>
                </div>
            </div>
            
            
        </section>
    )
}

export default Projects;