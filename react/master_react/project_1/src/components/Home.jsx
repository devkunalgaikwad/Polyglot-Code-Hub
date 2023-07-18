import React from "react";
import vg from '../assets/2.webp';
import instra from '../assets/Instragram.jpg';
import face from '../assets/facebook.jpg';
import linke from '../assets/linkedin.jpg';
import what from '../assets/whatapp.jpg';

const Home = () =>{
    return (
        <>
            <div className="Home" id="Home">
                <main>
                    <h1>Techy star</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="Home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tect problems you face
                        every day. We are lending tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="Home3" id="About">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti magnam tempore facere possimus commodi! Distinctio eaque aspernatur ea! Blanditiis, ad quae similique exercitationem, optio eaque impedit debitis, enim quas eos ea nisi nemo aperiam possimus odio a consectetur temporibus ipsa quasi autem quidem velit labore facere. Iusto eum iste dignissimos rem labore cumque molestiae, et nulla eius sequi similique ea numquam repellendus placeat autem maiores sit voluptas aperiam tempore optio consequuntur veniam? Doloremque debitis incidunt porro fugiat possimus ea quos odio amet repellat, odit deserunt illo itaque provident vero nulla rem consequuntur, aliquid, ipsa blanditiis at cupiditate laborum ab.
                    </p>
                </div>
            </div>
            <div className="Home4" id="Brands">
                <div>
                    <h1>Brands</h1>
                    <article className="Social">
                        <div>
                            <img src={instra} alt="" />
                            <p>Instragram</p>
                        </div>
                        <div >
                            <img src={face} alt="" />
                            <p>Facebook</p>
                        </div>
                        <div>
                            <img src={linke}alt="" />
                            <p>Linkedin</p>
                        </div>
                        <div>
                            <img src={what} alt="fdas" />
                            <p>Whatsapp</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;