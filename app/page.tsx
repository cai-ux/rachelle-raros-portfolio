const interests = [
  "Technology and Programming",
  "Website Development",
  "Computer Networking",
  "Database Management",
  "System Development",
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">J.</a>
        <div className="navlinks">
          {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
            <a key={item} href={"#" + item.toLowerCase()}>{item}</a>
          ))}
        </div>
      </nav>

      <section id="home" className="section hero">
        <div className="heroText">
          <p className="eyebrow">PROGRAMMER PROFILE</p>
          <h1>Hi, I&apos;m <span>Jharyll.</span></h1>
          <p className="intro">
            Hi! I&apos;m a college student and an aspiring programmer who is passionate
            about learning technology and improving my skills in programming. I enjoy
            exploring new ideas, creating simple projects, and learning how technology
            can solve everyday problems. I&apos;m still growing as a programmer, but I&apos;m
            always willing to learn, practice, and improve.
          </p>
          <a className="button" href="#projects">View My Project</a>
        </div>

        <div className="flowerScene" aria-label="CSS flowers illustration">
          <div className="flower flowerOne"><i></i><i></i><i></i><i></i><b></b></div>
          <div className="flower flowerTwo"><i></i><i></i><i></i><i></i><b></b></div>
          <div className="stem stemOne"></div>
          <div className="stem stemTwo"></div>
          <div className="leaf leafOne"></div>
          <div className="leaf leafTwo"></div>
          <div className="ground"></div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">ABOUT ME</p>
        <h2>My Background, Interests &amp; Learning Goal</h2>
        <div className="aboutGrid">
          <div className="card">
            <h3>Who I Am</h3>
            <p>
              I am a college student who is interested in technology and programming.
              I enjoy learning new things, exploring different programming skills, and
              working on projects that help me improve. I may still be learning, but I
              am hardworking, willing to learn, and always trying to become better at
              what I do.
            </p>
          </div>
          <div className="card">
            <h3>My Interests</h3>
            <ul>{interests.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card goal">
            <h3>My Learning Goal</h3>
            <p>
              My goal is to strengthen my programming and technical skills through
              practice and real projects, while becoming a confident and capable IT
              professional.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section tinted">
        <p className="eyebrow">EDUCATION</p>
        <h2>My College Journey</h2>
        <div className="educationCard">
          <div className="schoolBadge">NVSU</div>
          <div>
            <h3>Nueva Vizcaya State University</h3>
            <p className="degree">Bachelor of Science in Information Technology</p>
            <p><strong>Major:</strong> Network and Data Management (NDM)</p>
            <p><strong>Section:</strong> 3A</p>
            <p className="muted">
              I am currently a third-year college student learning about programming,
              networking, database management, and other areas of Information Technology.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">PROJECTS</p>
        <h2>My Work</h2>
        <div className="projectCard">
          <div className="projectTop">
            <span className="status">IN PROGRESS</span>
            <span className="number">01</span>
          </div>
          <h3>Computer Registration System</h3>
          <p>
            A simple computer registration system designed for a computer laboratory.
            It allows students to register using their Student ID and record their
            computer usage, including time-in and time-out.
          </p>
          <p>
            The system helps keep track of which students are using each computer and
            makes laboratory monitoring more organized.
          </p>
          <div className="tags"><span>System Development</span><span>In Progress</span><span>IT Project</span></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s Connect</h2>
        <p>If you would like to connect with me, you can reach me through:</p>
        <div className="contactGrid">
          <a href="mailto:fuertesjharyll15@gmail.com" className="contactCard">
            <small>EMAIL</small><strong>fuertesjharyll15@gmail.com</strong>
          </a>
          <a href="tel:09072991650" className="contactCard">
            <small>PHONE</small><strong>09072991650</strong>
          </a>
        </div>
      </section>

      <footer>© 2026 Jharyll • Built with Next.js &amp; CSS</footer>
    </main>
  );
}