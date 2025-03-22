import { useState } from "react";
import styles from "./SliderAuth.module.css";
// import "./SliderAuth.module.css";
// import "boxicons/css/boxicons.min.css";

const SliderAuth = () => {
    const [isSignup, setIsSignup] = useState(false);
  
    return (
      <div className={`${styles.container} ${isSignup ? styles.active : ""}`}>
        {/* Login Form */}
        <div className={styles["form-box"] + " " + styles.login}>
          <form>
            <h1>Login</h1>
            <div className={styles["input-box"]}>
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className={styles["input-box"]}>
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className={styles["forgot-link"]}>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className={styles.btn}>Login</button>
          </form>
        </div>
  
        {/* Signup Form */}
        <div className={styles["form-box"] + " " + styles["sign-up"]}>
          <form>
            <h1>Sign Up</h1>
            <div className={styles["input-box"]}>
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className={styles["input-box"]}>
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className={styles["input-box"]}>
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className={styles.btn}>Sign Up</button>
          </form>
        </div>
  
        {/* Toggle Panels */}
        <div className={styles["toggle-box"]}>
          <div className={styles["toggle-panel"] + " " + styles["toggle-left"]}>
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className={styles["btn"] + " " + styles["sign-up-btn"]} onClick={() => setIsSignup(true)}>Sign Up</button>
          </div>
          <div className={styles["toggle-panel"] + " " + styles["toggle-right"]}>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className={styles["btn"] + " " + styles["login-btn"]} onClick={() => setIsSignup(false)}>Login</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SliderAuth;