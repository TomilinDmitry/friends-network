import React from "react";
import style from "./style.module.scss";
import avatar from "../../app/icons/avatar.svg";
import arrow from "../../app/icons/arrow.svg";
import { useSelector } from "../../app/services/hooks/hooks";
type TProfileProps = {
  imageStyle: {
    maxWidth: number;
    maxHeight: number;
    transition: string;
  };
};

const Profile = ({ imageStyle }: TProfileProps) => {
  const arrowStyle = {
    marginLeft: 40,
    transition: "0.5s ease",
  };
  const { isHover } = useSelector((state) => state.isHover);
  return (
    <div className={style.container}>
      <img
        src={avatar}
        alt='avatar'
        width={200}
        height={200}
        style={imageStyle}
      />
      <div
        className={`${isHover ? style.hiddenBlock : style.hidden} `}>
        <p className={style.textBlock}>
          <span className={style.text}>Bezzy69</span>
          <span className={style.tag}>@bezzy69</span>
        </p>
        <img
          src={arrow}
          alt='arrow'
          width={10}
          height={16}
          style={arrowStyle}
        />
      </div>
    </div>
  );
};

export default Profile;
