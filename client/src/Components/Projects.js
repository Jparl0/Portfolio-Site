import React from 'react'



function Projects({mappedProj}) {

  return (
        <div className='project-cards'>
            <h3 className='proj-card-titles'>{mappedProj.title}</h3>
            <p>{mappedProj.description}</p>
              <img
                src={require(`${mappedProj.link}`)}
                alt={mappedProj.title}
                className='proj-card-images'
              /> 
            
            <button> Favorite </button>
        </div>
      )
    }

export default Projects

  // <div className='project-cards'>
  //       <h3 className='proj-card-titles'>Satsifactory Plannner</h3>
  //       <p className='proj-card-descr'>This app allows players of the video game Satisfactory to visualize the game’s data based on their personal factory systems to assist in strategizing future planning.</p>
  //       <img
  //         src='https://media-exp1.licdn.com/dms/image/C4E2DAQFDOIWgWDmf_w/profile-treasury-image-shrink_800_800/0/1658165573093?e=1664395200&v=beta&t=cDfV23X-03mCYG7nraqrDw6eIpjBxdjLx_sf5h1xEoM'
  //          alt='title'
  //          classname='proj-card-img'
  //          height={'220px'}
  //       />
  //       <div>
  //         <button> Favorite </button>
  //       </div>
  //   </div>
// function Projects({mapProj}) {
//   return (
//     <div className='project-cards'>
//         <h5>{mapProj.title}</h5>
//         <p>{mapProj.description}</p>
//         <img
//            src={`${mapProj.imgURL}`}
//            alt={mapProj.title}
//            classname='proj-img'
//         />
//         <button> Favorite </button>
//     </div>
//   )
// }








//  email share link? to email about projects specifically liked