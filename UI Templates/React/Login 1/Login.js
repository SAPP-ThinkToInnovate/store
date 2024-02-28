import classes from "./Login.module.css";
export default function test() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.content}>
          <form>
            <img
              src="/images/transparentColorLogo.png"
              className={classes.logo}
            />
            <h1>Welcome Back!</h1>
            <div className={classes.inputBox}>
              <i className="fa fa-user" />
              <input type="text" required />
              <span>Username</span>
            </div>
            <div className={classes.inputBox}>
              <i className="fa fa-lock" />
              <input type="password" required />
              <span>Password</span>
            </div>
            <div className={classes.links}>
              <a href="#">Forgot Password</a>
              <a href="#">Sign Up</a>
            </div>
            <div className={classes.inputBox}>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
