import React from "react";

const MyRoadmaps = () => {
  return (
    <>
      <div className="container-fluid py-3">
        <h2 className="text-center">RoadMaps Tracker</h2>
        <div className="m-2">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                  JAVA
                </a>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                data-bs-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  SPRING BOOT FRAMEWORK
                </a>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseThree"
                >
                  LARAVEL FRAMEWORK
                </a>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="card-body">
                  <input type="checkbox" name="" id="" /> Intro <br />
                  <input type="checkbox" name="" id="" /> Basic <br />
                  <input type="checkbox" name="" id="" /> Intermediate <br />
                  <input type="checkbox" name="" id="" /> Complete <br />
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseFour"
                >
                  POSTMAN /INSOMNIA
                </a>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseFive"
                >
                  POSTGRES DB
                </a>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseSix"
                >
                  DATA ANALYSIS
                </a>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="card-body">Lorem ipsum..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRoadmaps;
