import React from "react";
import SingleShowV1Data from "../../jsonData/SingleShowV1Data.json";
import SingleServiceV4 from "./SingleShowCaseV1";
import ShowCaseProgress from "./ShowCaseProgress";
import ShowCaseData from "../../jsonData/ShowCaseData.json";

const ShowCaseV1 = () => {
  return (
    <>
      <div id="features" className="service-range-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <h4 className="sub-title">What we offer</h4>
              <h2 className="title mb-30">
                Built for Security <br />
                Teams, Made for Everyone
              </h2>
              <p>
                We know security isn't one-size-fits-all. That’s why we built
                Web Scanner for:
              </p>
              <ul className="list-double mt-40">
                {SingleShowV1Data.map((service) => (
                  <SingleServiceV4 service={service} key={service.id} />
                ))}
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-1">
              <div className="seo-progress text-center">
                <div className="circle-progress">
                  {ShowCaseData.map((progress) => (
                    <ShowCaseProgress progress={progress} key={progress.id} />
                  ))}
                </div>
                <div className="seo-progess-items">
                  <div className="process-item">
                    <h5>Global Rank</h5>
                    <p>Internationally</p>
                  </div>
                  <div className="process-item">
                    <h5>Business Growth</h5>
                    <p>Upto 100%</p>
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

export default ShowCaseV1;
