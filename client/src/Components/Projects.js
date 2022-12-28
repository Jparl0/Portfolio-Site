import React from 'react'

function Projects({mappedProj}) {
  // Individual mapped objects input into html below
  return (
        <div className='project-cards'>
            <h3 className='proj-card-titles'>{mappedProj.title}</h3>
            <p>{mappedProj.description}</p>
              <img
                src={require(`${mappedProj.img_src}`)}
                alt={mappedProj.title}
                className='proj-card-images'
              /> 
            <form action={mappedProj.link}>
              <button type='submit'>GitHub Link</button>
            </form>
            {/* <button> Favorite </button> */}
        </div>
      )
    }

export default Projects