import React from "react";
import "./Photos.css";

function Photos(props) {
  if (props.photos) {
  return (

    <div className="photos-gallery">
    <div className="photos-row">

      {props.photos.map((photo, index) => {
        if (index < 4) {
        return (
            <div className="photo" key={index}>
              <a rel="noreferrer" href={photo.src.original} target="_blank" className="photo-link">
                <img src={photo.src.portrait} className="img-fluid image" alt={photo.alt} />
              </a>
            </div>
        );
        } else {
          return null;
        }
      })}
    </div>

      <div className="last-row">
      {props.photos.map((photo, index) => {
       if (index === 4) {
        return (
            <div className="photo" key={index}>
              <a rel="noreferrer" href={photo.src.original} target="_blank" className="photo-link">
                <img src={photo.src.portrait} className="img-fluid image" alt={photo.alt} />
              </a>
          </div>
        );
        } else {
          return null
        }
        })}
      </div>
    </div>
  );
  } else {
    return null;
  }
}

export default Photos;