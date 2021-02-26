import React from 'react';
import './projects.scss';
import Project from '../Project/project.component';
import Fade from 'react-reveal/Fade';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { projectDetailsList } from '../../constants/data/projectsData'; 

function Projects() {
    return (
        <section className="section-wrapper" id="Projects">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-titles">
                        <span><SettingsOutlinedIcon className="projects-icon"/></span>
                        <span>Projects</span>
                    </div>
                </div>
            </div>
            <div className="row projects-list-row">
                {projectDetailsList.map((projectData, projectIndex) => (
                    <div className="col-md-12" key={projectIndex}>
                        <Fade bottom>
                            <Project
                                projectData={projectData}
                            />
                        </Fade>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;