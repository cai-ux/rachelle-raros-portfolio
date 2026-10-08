import { ArrowRight, Code2, GraduationCap, Mail, Phone } from "lucide-react";

const interests = ["Software Development", "Web Design", "Computer Networking", "Application Development"];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home"><span className="brand-mark">RR</span> Rachelle Raros<span className="dot">.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="hero wrap" id="home">
        <div>
          <p className="eyebrow">INFORMATION TECHNOLOGY STUDENT</p>
          <h1>Hello, I’m<br /><span>Rachelle Raros.</span></h1>
          <h2>Building Skills Today, Creating Solutions Tomorrow.</h2>
          <p className="muted">I’m a college student interested in programming, digital solutions, and learning how websites and systems are developed. I enjoy exploring technology and finding creative ways to solve problems.</p>
          <a className="button" href="#projects">Explore my projects <ArrowRight size={17} /></a>
        </div>
        <div className="hero-art"><div className="circle"></div><div className="code-card"><Code2 size={28}/><p>const developer = &#123;</p><p className="indent">name: "Rachelle",</p><p className="indent">learning: true</p><p>&#125;;</p><div className="status">● Always learning, always growing</div></div><span className="hero-tag">Future Developer</span></div>
      </section>
      <section className="band"><div className="wrap band-inner"><b>MY APPROACH</b><span>Stay curious. Keep practicing. Build with purpose.</span></div></section>
      <section className="section wrap" id="about">
        <p className="eyebrow">01 / ABOUT</p><h2 className="section-title">A little about <span>me</span></h2>
        <div className="two-col"><article className="panel"><h3>Learning with purpose.</h3><p className="muted">I’m an aspiring programmer who enjoys exploring digital design, learning new concepts, and understanding how technology works. I’m improving my skills through college, practice, and personal projects, one step at a time.</p></article><article className="panel pale"><h3>What I’m interested in</h3>{interests.map((item, i) => <div className="interest" key={item}><span>0{i+1}</span>{item}<ArrowRight size={15}/></div>)}</article></div>
      </section>
      <section className="section pale-bg" id="education"><div className="wrap"><p className="eyebrow">02 / EDUCATION</p><h2 className="section-title">My college <span>journey</span></h2><article className="education panel"><GraduationCap size={34}/><div><p className="eyebrow">CURRENTLY STUDYING</p><h3>Bachelor of Science in Information Technology</h3><h4>Nueva Vizcaya State University (NVSU)</h4><p className="muted">Major: Network Design Management (NDM) · Third Year College</p><p className="muted">My studies help me build a foundation in programming, computer networking, databases, and system development.</p></div></article></div></section>
      <section className="section wrap" id="projects"><p className="eyebrow">03 / PROJECTS</p><h2 className="section-title">Work in <span>progress</span></h2><div className="two-col"><article className="project panel"><div className="project-visual">RR<span>PORTFOLIO WEBSITE</span></div><p className="eyebrow">NEXT.JS · CSS</p><h3>Personal Portfolio Website</h3><p className="muted">A responsive personal website that introduces me, shares my education, and highlights my interests in a clean blue design.</p></article><article className="project panel"><div className="project-visual visual-light">01<span>SYSTEM DEVELOPMENT</span></div><p className="eyebrow">IN PROGRESS</p><h3>System Development Project</h3><p className="muted">An ongoing project where I practice planning features and applying programming concepts to a functional system.</p></article></div><p className="muted center">More projects will be added as I continue learning and building.</p></section>
      <section className="section pale-bg" id="contact"><div className="wrap"><p className="eyebrow">04 / CONTACT</p><h2 className="section-title">Let’s start a <span>conversation.</span></h2><p className="muted">Have a question, an idea, or want to connect? Feel free to reach out.</p><div className="contact panel"><a href="mailto:rarosrachelle1106@gmail.com"><Mail size={21}/><span><small>EMAIL</small><b>rarosrachelle1106@gmail.com</b></span><ArrowRight size={16}/></a><a href="tel:09358126709"><Phone size={21}/><span><small>PHONE</small><b>09358126709</b></span><ArrowRight size={16}/></a></div></div></section>
      <footer className="footer wrap"><a className="brand" href="#home">RR <span>Rachelle Raros.</span></a><span>Designed with Next.js and CSS.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}