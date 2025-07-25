import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactWOW from "react-wow";

const BlogV3 = () => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for Your Email");
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        id="home"
        className="banner-style-three-area overflow-hidden"
        style={{ backgroundImage: "url(/img/shape/banner-5.jpg)" }}
      >
        <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                  <div className="information">
                    <ReactWOW
                      animation="fadeInUp"
                      duration="400ms"
                      delay="500ms"
                    >
                      <h2>
                        Get a hacker's perspective <br /> on your{" "}
                        <strong>web apps</strong> , network, and cloud
                      </h2>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInUp"
                      delay="900ms"
                      duration="400ms"
                    >
                      <p>
                        Web Scanner helps security teams run the key steps of a
                        penetration test, easily and without expert hacking
                        skills.
                      </p>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInDown"
                      delay="1200ms"
                      duration="400ms"
                    >
                      <div className="mt-3">
                        <a href="https://web-defender-admin.vercel.app/">
                          <button>Get Started</button>
                        </a>
                      </div>
                    </ReactWOW>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    <ReactWOW animation="fadeInDown">
                      <img src="/img/illustration/2.png" alt="Thumb" />
                    </ReactWOW>
                    <img src="/img/illustration/3.png" alt="Image Not Found" />
                    {/* <div className="progress-card">
                      <div className="icon">
                        <i className="flaticon-startup-5"></i>
                      </div>
                      <div className="info">
                        <p>Sale Increase</p>
                        <h4>+128%</h4>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV3;
