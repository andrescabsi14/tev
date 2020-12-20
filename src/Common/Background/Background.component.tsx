import React from "react";
import styles from "./Background.module.scss";

interface BackgroundProps {
  image?: string;
  alt?: string;
  color?: string;
  fixed?: boolean;
  repeat?: boolean;
  size?: string;
}
const DEFAULT_COLOR = "#ffffff";
const Background: React.FC<BackgroundProps> = ({
  image,
  alt,
  color,
  fixed,
  repeat,
  size,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ position: fixed ? "fixed" : "absolute" }}
    >
      {image ? (
        <div
          className={styles.imageBackground}
          style={{
            background: `url(${image}) ${repeat ? "" : "no-repeat"}`,
            backgroundSize: size || "cover",
          }}
        >
          <img className={styles.image} src={image} alt={alt} />
        </div>
      ) : (
        <div
          className={styles.colorBackground}
          style={{ background: color || DEFAULT_COLOR }}
        ></div>
      )}
      <div>BackNav</div>
    </div>
  );
};

export default Background;
