import React from 'react';
import './Skills.css';
import UIDDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";
function Skills() {
    return (
        <section id="skills">
            <span className="skillsTitle">
                What I Do ?
            </span>
            {/* <span className="skillDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio odit tempore alias explicabo  laudantium voluptate, sequi impedit enim consectetur.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa possimus explicabo aut. Nisi voluptates quam quos animi quas at laudantium mollitia unde et.
            </span> */}
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Web Developing </h1>
                        <p>
I specialize in full-stack web development, proficient in MongoDB, Node.js, Express.js, React.js, HTML, and CSS to create responsive and dynamic web applications.
</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>  Web Design </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus et alias?</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Competitive Programming </h1>
                        <p>
                            I am a passionate programmer with extensive experience in C++,python and C
                        </p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills