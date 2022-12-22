import React from 'react'
import { ReactComponent as CssLogo } from './skill_images/css3-original-wordmark.svg';
import { ReactComponent as GitLogo } from './skill_images/github-original-wordmark.svg';
import { ReactComponent as Html5Logo } from './skill_images/html5-original-wordmark.svg';
import { ReactComponent as JsLogo } from './skill_images/javascript-original.svg';
import { ReactComponent as PostLogo } from './skill_images/postgresql-original-wordmark.svg';
import { ReactComponent as RailsLogo } from './skill_images/rails-original-wordmark.svg';
import { ReactComponent as ReactLogo } from './skill_images/react-original-wordmark.svg';
import { ReactComponent as RubyLogo } from './skill_images/ruby-plain-wordmark.svg';

function TechSkills() {

  return (
    <div>
      <div>
        <CssLogo />
      </div>
      <div>
        <Html5Logo />
      </div>
      <div>
        <JsLogo />
      </div>
      <div>
        <ReactLogo />
      </div>
      <div>
        <GitLogo />
      </div>
      <div>
        <PostLogo />
      </div>
      <div>
        <RubyLogo />
      </div>
      <div>
        <RailsLogo />
      </div>
        {/* <form action={mappedProj.link}>
              <button type='submit'>GitHub Link</button>
        </form> */}

    </div>
  )
}

export default TechSkills