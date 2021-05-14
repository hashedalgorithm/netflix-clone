import React from "react";
import "./MidSection.css";
type Midsectionprops = {
  title: string;
  content: string;
  img: string;
  video?: string;
  diffimg?: boolean;
  position: "l" | "r";
};
type DiffimgProps = {
  img: string;
  video?: string;
};
function MidSection({
  title,
  content,
  img,
  position,
  video,
  diffimg,
}: Midsectionprops) {
  return (
    <>
      <div
        className={`${
          position === "l" ? "MidSection" : "MidSection flexDirection"
        } `}
      >
        <div className="MS_s1">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        {diffimg ? (
          <Diffimg img={img} video={video} />
        ) : (
          <div className="MS_s2">
            <img className="MS_s2_img" src={img} alt="" />
            {video ? (
              <video
                className="MS_s2-video"
                autoPlay
                playsInline
                muted
                loop
                src={video}
              ></video>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
}
const Diffimg = ({img,video}:DiffimgProps) => {
  return (
    <>
      <div className="MS_s2">
        <img className="MS_s2_diffimg" src={img} alt="" />
        {video ? (
          <video
            className="MS_s2-diffvideo"
            autoPlay
            playsInline
            muted
            loop
            src={video}
          ></video>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default MidSection;
