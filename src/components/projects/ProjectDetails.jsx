import React from 'react';

class ProjectDetails extends React.Component {

  render() {

    const id = this.props.match.params.id;

    return(
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - { id }</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta explicabo aliquam dolores eaque officiis maxime at neque non quae, excepturi in aut vel dolorem quibusdam nobis voluptates modi ducimus.</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by mariodev</div>
            <div>Aphril 23 of 2019, 9:35 am</div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectDetails;