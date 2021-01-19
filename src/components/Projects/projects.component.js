import './projects.scss';
import Project from '../Project/project.component';

function Projects() {
    return (
        <section className="projects-wrapper">
            <div className="row">
                <div className="col-md-12 section-titles">Projects</div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Project />
                </div>
                <div className="col-lg-6">
                    <Project />
                </div>
            </div>
            
            
        </section>
    )
}

export default Projects;