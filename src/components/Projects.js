import React, { useState, useEffect, useRef  } from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import projectList from "../data/projects.json";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('projects');
                    console.log(isVisible);
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = projectsRef.current;
        if (currentRef) {
            console.log(isVisible);
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div id='projects' ref={projectsRef} className={`Projects ${isVisible ? 'fadeinslide projects-container' : 'projects-container-none'}`}>
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
                                        style={{ width: '100%', height: '40%', objectFit: 'cover' }} />
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
