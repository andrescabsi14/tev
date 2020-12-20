import React from "react";
import LogoImage from "./_assets/logo.png";
import styles from "./Logo.module.scss";

interface BackgroundProps {
  width: string;
  height: string;
}

const Logo: React.FC<BackgroundProps> = ({ width, height }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <div
        className={styles.logo}
        style={{
          background: `url(${LogoImage}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <img className={styles.image} src={LogoImage} alt={`Logo`} />
      </div>
    </div>
  );
};

export default Logo;
