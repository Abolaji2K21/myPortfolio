import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diploma in Business Education</h3>
                                <span className="qualification__subtitle">Henley Business School, UK</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma in Software Engineering</h3>
                                <span className="qualification__subtitle">Semicolon Africa, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 – 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Masters in Business Management</h3>
                                <span className="qualification__subtitle">Girne American University, Cyprus</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 – 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">B.Sc. Pure and Applied Chemistry</h3>
                                <span className="qualification__subtitle">University of Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2013 – 2017
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Engineer</h3>
                                <span className="qualification__subtitle">GadgetVerse, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 – Present
                                </div>
                                {/*<ul className="qualification__description">*/}
                                {/*    <li>Built and maintained scalable REST APIs with Node.js integrated into React.js frontend.</li>*/}
                                {/*    <li>Developed responsive UI components using React.js.</li>*/}
                                {/*    <li>Set up CI/CD pipelines with GitHub Actions and deployed on Render.</li>*/}
                                {/*    <li>Delivered features from concept to production in a startup environment.</li>*/}
                                {/*</ul>*/}
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Quality Assurance Tester (Intern)</h3>
                                <span className="qualification__subtitle">Enum Africa, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                                {/*<ul className="qualification__description">*/}
                                {/*    <li>Tested backend APIs, frontend components, and mobile features.</li>*/}
                                {/*    <li>Performed manual and automated testing using Jest and Cypress.</li>*/}
                                {/*    <li>Tracked and verified bugs for smooth user experience.</li>*/}
                                {/*    <li>Contributed to sprint reviews and daily standups.</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Digital Trainee</h3>
                                <span className="qualification__subtitle">Semicolon Africa, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 – 2024
                                </div>
                                {/*<ul className="qualification__description">*/}
                                {/*    <li>Built full-stack apps using Java, Python, Go, React, and JavaScript.</li>*/}
                                {/*    <li>Involved in full SDLC: planning to deployment.</li>*/}
                                {/*</ul>*/}
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Medical Data Analyst</h3>
                                <span className="qualification__subtitle">Damilola Clinic & Maternity, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 – 2023
                                </div>
                                {/*<ul className="qualification__description">*/}
                                {/*    <li>Managed clinical data with Excel, Sheets, and SQL.</li>*/}
                                {/*    <li>Supported improved operations and care with data insights.</li>*/}
                                {/*    <li>Integrated insights from MSc in Business Administration.</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
