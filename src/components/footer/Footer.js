// import React from "react";
// import styles from "./Footer.module.scss";

// const date = new Date();
// const year = date.getFullYear();

// const Footer = () => {
//   return <div className={styles.footer}>&copy; {year} All Rights Reserved</div>;
// };

// export default Footer;

import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{/* Your main content goes here */}</div>
      <div className={styles.footer}>&copy; {year} All Rights Reserved</div>
    </div>
  );
};

export default Footer;
