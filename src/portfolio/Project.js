import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import LinkIcon from "@material-ui/icons/Link";
import db from "../firebase/config";
import CommentIcon from "@material-ui/icons/Comment";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("project").onSnapshot((snapshot) =>
      setProjects(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <Container>
        <Row>
          {projects.map((project, index) => (
            <Col md="12" key={index}>
              <div className="projectCard">
                <img src={project.image} alt="..." className="projectImage" />
                <div className="projectTitles">
                  <div className="projectAbout">
                    <h3 className="projectName">{project.projectName}</h3>
                    <p className="projectDesc">{project.projectDesc}</p>
                  </div>
                  <div className="projectButtons">
                    <a href={project.code} className="buttons" target="_blank">
                      Źródło <CommentIcon />
                    </a>
                    <a href={project.demo} className="buttons" target="_blank">
                      Więcej <LinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Project;
