import React from "react";
import styles from "./Background.module.scss";

interface BackgroundProps {
  image?: string;
  alt?: string;
  color?: string;
  fixed?: boolean;
  repeat?: boolean;
  size?: string;
  actionable?: boolean;
}
const DEFAULT_COLOR = "#ffffff";
const Background: React.FC<BackgroundProps> = ({
  image,
  alt,
  color,
  fixed,
  repeat,
  size,
  actionable,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ position: fixed ? "fixed" : "absolute", zIndex: fixed ? -1 : 1 }}
    >
      {image ? (
        <div
          className={`${styles.imageBackground} ${
            actionable ? styles.actionable : ""
          }`}
          style={{
            background: `url(${image}) ${repeat ? "" : "no-repeat center"}`,
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
    </div>
  );
};

export default Background;
