import React from "react";
import { Link } from "react-router-dom";

import useAuth from "./Context";
function NavEmployee({ dept }) {
  const auth = useAuth();

  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "#ebe7e7",
            padding: "15px",
            width: "77vw",
            margin: "25px",
            textAlign: "center",
          }}
        >
          {dept}
        </div>

        {dept == "IT" ? (
          <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  marginLeft: "40px",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>IT</p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "23%",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>IT</p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "42%",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>IT</p>
                </div>
              </div>

              <div
                style={{
                  marginLeft: "62%",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>IT</p>
                </div>
              </div>

              <br />
            </div>
          </>
        ) : dept == "MARKETING" ? (
          <>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ marginTop: "40px", position: "absolute" }}>
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>MARKETING</p>
                </div>
              </div>
              <div style={{ marginTop: "40px", position: "absolute" }}>
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>MARKETING</p>
                </div>
              </div>
              <div style={{ marginTop: "40px", position: "absolute" }}>
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>MARKETING</p>
                </div>
              </div>

              <br />
            </div>
          </>
        ) : dept == "MANAGEMENT" ? (
          <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  marginLeft: "40px",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>MANAGEMENT</p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "23%",
                  marginTop: "40px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <Link to="/Organization/DepartMentDirectory/NewProfile">
                    {" "}
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        position: "relative",
                        left: "74px",
                        top: "-37px",
                      }}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  </Link>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    S3 - Clarkson Walter
                  </p>

                  <p style={{ textAlign: "center" }}>
                    clarksonwalter@zylker.com
                  </p>
                  <p style={{ textAlign: "center" }}>ADMINISTRATION</p>
                  <p style={{ textAlign: "center" }}>MANAGEMENT</p>
                </div>
              </div>

              <br />
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 style={{ textAlign: "center" }}>No User Found</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavEmployee;
