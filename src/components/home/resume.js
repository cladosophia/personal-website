import React from 'react';


class AppResume extends React.Component {
  state = { visible: false };

  render() {
    return (
      
     

      <div id="resume" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2><b>MY RESUME</b></h2>
           
          </div>
        </div>
     
        <div class="col bg-lightblue">
        <img src="https://github.com/cladosophia/imgs-for-portolio/blob/main/Resume.png?raw=true" width="600"/>
        </div>
      </div>

      
    );
    
  }
}

export default AppResume;