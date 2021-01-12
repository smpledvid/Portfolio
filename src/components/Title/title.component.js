import './title.scss';

import {ReactComponent as LinkedInIcon} from '../../assets/images/LinkedInIcon.svg';
import {ReactComponent as GithubIcon} from '../../assets/images/GithubIcon.svg';
import {ReactComponent as ResumeIcon} from '../../assets/images/ResumeIcon.svg';

function Title() {
  
  function handleIconClick(iconName) {
    switch(iconName) {
      case 'linkedIn':
        window.open('https://www.linkedin.com/in/david-j-liang/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/smpledvid', '_blank');
        break;
      case 'resume':
        break;
      default:
        break;
    }
  }

  return (
    <section>
      <div className="title-component-wrapper">
        <div className="content">
          <div id="title-name">david j. liang</div>
          <div id="icons-container">
            <span className="icon-wrapper"><LinkedInIcon id="linkedin-icon" onClick={() => handleIconClick('linkedIn')}/></span>
            <span className="icon-wrapper"><GithubIcon id="github-icon" onClick={() => handleIconClick('github')}/></span>
            <span className="icon-wrapper"><ResumeIcon id="resume-icon" onClick={() => handleIconClick('resume')}/></span>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Title;
