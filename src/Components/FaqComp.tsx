import React, { useState } from "react";
import "./FaqComp.css";
type FaqCompprops = {
  title: string;
  content1: string;
  content2?: string
};
function FaqComp({ title, content1, content2 }: FaqCompprops) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="Faq_Comp">
      <div
        className="FC_head"
        onClick={() => {
          handleOpen();
        }}
      >
        <p>{`${title ? title : "YOUR FAQ QUEST ?"}`}</p>
        <span className="FC_closebtn">
          <i
            className={`${open ? "fas fa-times" : "fas fa-plus"}`}
            onClick={(e) => {
              handleOpen();
            }}
          ></i>
        </span>
      </div>
      {open ? <div className="FC_content">{content1} <br /> <br />{content2}</div> : <></>}
    </div>
  );
}

export default FaqComp;
