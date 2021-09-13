import React, { useState, useEffect } from "react";
import db from "../firebase/config";

const Main = () => {
  const [aboutInfos, setAboutInfos] = useState([]);

  useEffect(() => {
    db.collection("about").onSnapshot((snapshot) =>
      setAboutInfos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="aboutmeMain">
      {aboutInfos.map((about) => (
        <>
          <img src={about.myImage} alt="..." className="myImage" />
          <span>
            <p className="aboutmeText">
              {about.text1}
              <div>
                <b>{about.text2}</b>
              </div>
              <em>{about.text3}</em>
            </p>
          </span>
        </>
      ))}
      ;
    </div>
  );
};

export default Main;
