import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-calendar"></i>,
    title: 'Hobby 1',
    content: 'I love doing paper works. Organizing. Making decisions and Strategic Planning and observing people',
  },
  {
    key: '2',
    icon: <i className="fas fa-heart"></i>,
    title: 'Hobby 2',
    content: 'I do love serving other people.  Serving doesn’t just make your heart feel good but it is a great impact to our community that we help others especially the poor, to the  people who suffer and to those who really needs our help.',
  },
  {
    key: '3',
    icon: <i className="fas fa-dog"></i>,
    title: 'Hobby 3',
    content: 'One of my coping mechanism is dancing, I like spicy foods and a dog lover. :)',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">

          <h2><b>ABOUT ME</b></h2>
         
        </div>
        <div className="contentHolder">
          <p><b>Hi, I am Sophia Nicole N. Clado.</b><br/>

22 years of age. Studied at Caraga State University Main Campus with a course of Bachelor of Science in Information Technology. <br/>

I am currently a student officer and governs our college which is the College of Computing and Information Sciences.  <br/><br/>
</p>
<h2><b>HOBBIES AND INTEREST</b></h2>
        </div>
      
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;