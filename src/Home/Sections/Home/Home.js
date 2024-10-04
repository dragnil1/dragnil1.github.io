import React from "react";
import Link from "@mui/material/Link";
// import Button from "@mui/material/Button";
// import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  return (
    <React.Fragment>
      <section class="resume-section" id="home">
        <div class="resume-section-content">
          <h1 class="mb-0">
            <span class="text-primary">Kazim Abrar</span> <span style={{ color: "#bc4b49" }}>Mahi</span>
          </h1>
          <Link target="_blank" rel="noopener noreferrer" href="mailto:name@email.com">
            kazimabrarmahi135@gmail.com
          </Link>
          <br />
          <br />
          <p class="lead mb-5">
            <p>
              I am a passionate researcher and software engineer, with a strong background in Robotics, Autonomous Systems, and Software Development. I graduated with a degree in Computer Science and Engineering from the <a href="https://www.buet.ac.bd/web/#/">Bangladesh University of Engineering and Technology (BUET)</a> in May 2023. My journey has since taken me into exciting fields of research and industry, where I continue to explore new challenges and innovations.
            </p>
            <p>
              Currently, I am a remote researcher at the Augmented Design Lab, University of California, Santa Cruz, where I work under the esteemed guidance of Professor <a href="https://users.soe.ucsc.edu/~ejw/">Jim Whitehead</a>. My research is further supported by the supervision of <a href="https://sites.google.com/site/abmalimalislam/home">A. B. M. Alim Al Islam</a>, <a href="https://www.linkedin.com/in/golam-md-muktadir/">Golam Muhammad Muktadir</a>, and <a href="https://jawadefaj.github.io/">Abdul Jawad</a>. In this role, I contribute to groundbreaking work in advanced driving assistance systems (ADAS), autonomous vehicles, and robotics, focusing on creating safe and efficient AI systems that can operate seamlessly in dynamic real-world environments.
            </p>
            <p>
              Parallel to my research, I work as a Software Engineer at <a href="https://therapbd.com/">Therap BD</a>, a subsidiary of <a href="https://www.therapservices.net/">Therap Services LLC</a>, where I engage in developing scalable, high-performance software solutions. My work here involves solving critical computational problems while adhering to the highest standards of clean, maintainable code—skills I also bring into my research endeavors.
            </p>
            <p>
            With expertise spanning across software engineering, autonomous driving technologies, and deep reinforcement learning, I am dedicated to pushing the boundaries of what AI and machine learning can achieve in the realm of robotics and autonomous systems. My work is driven by curiosity, a strong problem-solving mindset, and a commitment to creating technology that can make a real-world impact.
            </p>
          </p>
          <div class="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              href="https://www.linkedin.com/in/kazim-abrar-mahi-959298135/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" class="social-icon" href="https://github.com/dragnil1">
              <i class="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              href="https://www.facebook.com/profile.php?id=100009464551964"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
