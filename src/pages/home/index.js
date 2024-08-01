import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="Intro-img order-1 order-lg-2 h-100 "
            style={{ "textAlign": "center" }}
          >
            <img src={introdata.your_img_url} />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center paddingSubTitle">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <div className="marquee-container">
                <div className="marquee">
                <img className="first" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png" alt="" />
                  <img src="https://images.velog.io/images/hanblueblue/post/05bdbbea-decd-488a-93f3-019185e557fe/nodejs.png" alt="" />
                  <img src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph?auto=format&fit=max&w=384&q=100" alt="" />
                  <img src="https://scontent.fcok1-1.fna.fbcdn.net/v/t39.30808-1/353427794_646728614158776_8437791729050769556_n.png?stp=dst-png_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=596444&_nc_ohc=35IGAN7zv4QAX8pauV2&_nc_ht=scontent.fcok1-1.fna&oh=00_AfBXSQGL0hZTwJYXmIL9WNqTe6IPC6trhgEauHjRwFD3pw&oe=659AF314" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" alt="" />
                  <img src="https://4bsystems.pl/wp-content/uploads/2023/03/client-conversation-4.png" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                  <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" />
                  <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HLukBZIXXNckYakFwG4za6Z8OwEOIXt0hIzUajrSog&s" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </section>
    </HelmetProvider>
  );
};
