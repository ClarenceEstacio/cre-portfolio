import { motion } from "framer-motion";
import "./Home.css";
const Home = () => {
  return (
    <main className="Home">
      <div className="home-image">
        <div className="image-border">
          <motion.div
            className="cursor-grab"
            drag
            dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          >
            <img src="/bg/me.jpg" alt="Clarence" className="round-image  " />
          </motion.div>
        </div>
      </div>

      <div className="home-content">
        <h1 className="content-name">
          Hi, I'm <span className="highlight-name">Clarence R. Estacio</span>
        </h1>
        <p className="content-course">Computer Engineer</p>
        <p className="content-goal">Aspiring Web Developer</p>
        <p className="content-text">
          Passionate about building{" "}
          <span className="blush-text">beautiful</span> and{" "}
          <span className="coral-text">functional</span> web experiences using{" "}
          <span className="highlight-tech">modern technologies</span>.
        </p>
      </div>
    </main>
  );
};

export default Home;
