import React from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import projectList from "../data/projects.json";

const Projects = () => {
    return (
        <div id='projects' className='projects-container'>
            <h2 className='projects-title'>PROJECTS</h2>
            <div className="projects-list">
                {
                    projectList.map((project) => {
                        return (
                            <a
                                href={project.url}
                                key={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card style={{ margin: '10px', height: '450px', width: '300px', overflow: 'hidden' }}>
                                    <Card.Img title={project.name}
                                        alt="Screenshot of Project" src={`/images/projects/${project.img}`} 
                                        style={{ width: '100%', height: '40%', objectFit: 'cover' }}/>
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text style={{ fontSize: '15px', color: 'gray' }}>
                                            {project.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
