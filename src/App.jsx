
import './App.css'
// import About from './components/About'
// import ConnectMe from './components/ConnectMe'
// import LearningStack from './components/LearningStack'
// import Navbar from './components/Navbar'
// import Profile from './components/Profile'
// import Projects from './components/Projects'
// import Tech from './components/Tech'

const projects = [
  // {
  //   title: 'Full-Stack Netflix Clone',
  //   description: 'A full-stack streaming-style application built to practice modern React development, authentication and backend integration.',
  //   image: '/netflix_fullstack.png',
  //   tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  //   link: 'https://github.com/nkill-star/Full-Stack-Netflix-Clone.git',
  // },
  {
    title: 'QuickCarz',
    description: 'QuickCarz is a full-stack car rental platform where users can search and book cars by location and availability. Car owners can list, manage, and toggle the availability of their vehicles. A smooth, responsive interface built with modern technologies ensures a seamless rental experience.',
    image: '/quickcarz.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'React Hot Toast'],
    link: 'https://github.com/nkill-star/QuickCarz.git',
  },
  {
    title: 'Conference Ticket Generator',
    description: 'This is my solution to the Conference Ticket Generator challenge on Frontend Mentor. This project helped me strengthen my React skills, improve form validation, and practice responsive design.',
    image: '/ticket-generator.png',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://github.com/nkill-star/Conference-Ticket-Generator.git',
  },
  // {
  //   title: 'User Authentication & Admin Panel',
  //   description: 'Authentication-focused web application with sessions, protected routes and an admin interface for user management.',
  //   image: '/userwebapp.webp',
  //   tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
  //   link: 'https://github.com/nkill-star/userAuthentication-with-Admin-panel.git',
  // },
  // {
  //   title: 'Netflix Clone',
  //   description: 'Responsive Netflix-inspired landing experience created to sharpen frontend layout, responsive design and UI implementation skills.',
  //   image: '/netflixland.webp',
  //   tags: ['HTML', 'CSS', 'Bootstrap'],
  //   link: 'https://github.com/nkill-star/netflix-clone.git',
  // },
  // {
  //   title: 'Instagram Clone',
  //   description: 'A frontend recreation focused on responsive layouts, spacing, typography and component-style UI thinking.',
  //   image: '/instaland.webp',
  //   tags: ['HTML', 'CSS'],
  //   link: 'https://github.com/nkill-star/Instagram-clone.git',
  // },
  // {
  //   title: 'Starbucks Clone',
  //   description: 'Responsive landing page recreation with a focus on visual accuracy and clean CSS structure.',
  //   image: '/starbucksland.webp',
  //   tags: ['HTML', 'CSS'],
  //   link: 'https://github.com/nkill-star/starbucks-clone.git',
  // },
  {
    title: 'Blog Preview Card',
    description: 'Frontend Mentor - Blog Preview Card Solution This is my solution to the Blog Preview Card challenge on Frontend Mentor. Frontend Mentor challenges help me improve my coding skills by building realistic and hands-on projects.',
    image: '/blog-preview-card.png',
    tags: ['React', 'CSS', 'Tailwind CSS'],
    link: 'https://github.com/nkill-star/Blog-Preview-Card.git',
  },
  {
    title: 'To-Do App',
    description: 'A simple and responsive To-Do List application built with React and styled using Tailwind CSS. This app allows users to add, delete, and manage their daily tasks efficiently.',
    image: '/todo.png',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://github.com/nkill-star/ToDo-App.git',
  },
  // {
  //   title: 'Xs & Os Game',
  //   description: 'A lightweight browser game built to practice JavaScript logic, interaction handling and state updates.',
  //   image: '/game.webp',
  //   tags: ['JavaScript', 'HTML', 'CSS'],
  //   link: 'https://github.com/nkill-star/Xs-and-Os-game.git',
  // },
]

const stack = [
  ['EC2', '/aws-ec2.svg'],
  ['VPC', '/AWS-VPC.png'],
  ['S3', '/s3.png'],
  ['HTML5', '/html.webp'],
  ['CSS3', '/css.webp'],
  ['JavaScript', '/javascript.webp'],
  ['Bootstrap', '/bootstrap.webp'],
  ['Node.js', '/node.png'],
  ['Express.js', '/express.webp'],
  ['MongoDB', '/mongo.webp'],
  ['React', '/react.png'],
  ['Tailwind CSS', '/tailwind.png'],
  
]

const learning = [
  ['AWS', 'EC2 · VPC · IAM · S3', 'Cloud fundamentals and hands-on labs'],
  ['Linux', 'CLI · services · networking', 'Building confidence with server environments'],
  ['DevOps', 'Git · deployment · CI/CD', 'Learning practical cloud workflows'],
]

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const icons = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 4.8 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13.4 13.4 0 0 0-6 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    map: <><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  }
  return <svg {...common}>{icons[name]}</svg>
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nikhil S Richie home">
          <span className="brand-mark">NSR</span>
          <span>Nikhil S Richie</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/Nikhil_S_Richie_Resume.pdf" target="_blank" rel="noreferrer">Resume <Icon name="external" size={15} /></a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
            <p className="hero-kicker">SOFTWARE DEVELOPER - CLOUD & DEVOPS ENTHUSIAST</p>
            <h1>Building digital experiences with <span>curiosity</span> and code.</h1>
            <p className="hero-text">I'm Nikhil S Richie, a Computer Science graduate passionate about cloud technologies, AWS, and DevOps</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={18} /></a>
              <a className="button button-ghost" href="#contact">Let's connect</a>
            </div>
            <div className="hero-meta">
              <span><Icon name="map" size={16} /> Kerala, India</span>
              <span><Icon name="code" size={16} /> React - Node - AWS</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-one">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-top"><span>developer_profile</span><span>01</span></div>
              <div className="profile-photo-wrap"><img src="/Profile.jpeg" alt="Nikhil S Richie" /></div>
              <div className="profile-name">Nikhil S Richie</div>
              <div className="profile-role">Software Developer</div>
              <div className="profile-line" />
              <div className="profile-stats"><div><strong>2024</strong><span>Graduated</span></div><div><strong>∞</strong><span>Learning</span></div><div><strong>04</strong><span>Featured</span></div></div>
              <div className="terminal"><span>$</span> whoami <b>nikhil</b><i>_</i></div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading reveal"><span>01 / ABOUT</span><h2>A developer who likes to <em>build</em> and keep learning.</h2></div>
          <div className="about-grid">
            <div className="about-copy reveal"><p>I'm an aspiring AWS DevOps Engineer with a B.Tech in Computer Science and professional experience in software development. My development background has given me a strong foundation in programming, web technologies, APIs, databases, Git, and application development workflows. Alongside this, I'm currently expanding my knowledge of AWS and cloud technologies, with hands-on learning in services such as EC2, VPC, IAM, and S3, as well as Linux and cloud infrastructure concepts.</p>
                                                <p>I'm passionate about understanding how applications are built, deployed, managed, and scaled in real-world environments. I'm particularly interested in cloud infrastructure, automation, CI/CD, containerization, monitoring, and DevOps practices. I enjoy learning through practical projects and continuously improving my technical skills, with the goal of growing into a well-rounded AWS DevOps Engineer who can bridge software development and cloud infrastructure.</p><a className="text-link" href="/Nikhil_S_Richie_Resume.pdf" target="_blank" rel="noreferrer">View my resume <Icon name="arrow" size={16} /></a></div>
            <div className="about-cards reveal delay-one">
              <div className="mini-card"><span>01</span><strong>Web Development</strong><p>Responsive interfaces and full-stack applications.</p></div>
              <div className="mini-card"><span>02</span><strong>Cloud Fundamentals</strong><p>Hands-on AWS labs and server-side practice.</p></div>
              <div className="mini-card"><span>03</span><strong>Continuous Learning</strong><p>Learning through projects, documentation and experimentation.</p></div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading reveal">
            <span>02 / EXPERIENCE</span>
            <h2>Where I've <em>worked</em>.</h2>
          </div>

          <div className="experience-card reveal">

            <div className="experience-company">
              <div className="company-logo">
                <img src='/pplio-light.png'></img>
              </div>

              <div>
                <h3>PPLIO Technologies</h3>
                <p>Thiruvananthapuram, Kerala, India - Remote</p>
              </div>
            </div>

            <div className="experience-timeline">

              <div className="experience-item">
                <div className="timeline-dot"></div>

                <div className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h4>Associate Software Developer</h4>
                      <span>Full-time</span>
                    </div>

                    <div className="experience-date">
                      Mar 2026 - May 2026
                      <small>3 mos</small>
                    </div>
                  </div>

                  <p>
                    Worked on software development tasks and contributed to
                    application features and development workflows.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="timeline-dot"></div>

                <div className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h4>Associate Software Developer Intern</h4>
                      <span>Internship</span>
                    </div>

                    <div className="experience-date">
                      Sep 2025 - Mar 2026
                      <small>7 mos</small>
                    </div>
                  </div>

                  <p>
                    Gained hands-on experience in software development while
                    working with modern web technologies and application workflows.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* <section className="section" id="stack">
          <div className="section-heading reveal"><span>03 / TOOLKIT</span><h2>Technologies I'm <em>familiar with</em>.</h2></div>
          
          <div className="stack-slider">
          <div className="stack-track">
            {[...stack, ...stack].map(([name, image], index) => (
              <div className="stack-card" key={`${name}-${index}`}>
                <img src={image} alt={name} decoding="async" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        </section> */}

        <section className="section" id="stack">
  <div className="section-heading reveal">
    <span>03 / TOOLKIT</span>
    <h2>
      Technologies I'm <em>familiar with</em>.
    </h2>
  </div>

  <div className="tech-stack">

    {/* CLOUD & DEVOPS */}
    <div className="cloud-section reveal">

      <div className="cloud-header">
        <div>
          <span className="cloud-icon">☁</span>

          <div>
            <h3>Cloud & DevOps</h3>
            <p>
              Building, deploying and managing cloud solutions with AWS.
            </p>
          </div>
        </div>

        <span className="primary-focus">
          ✦ Primary Focus
        </span>
      </div>

      <div className="cloud-content">

        {/* AWS MAIN CARD */}
        <div className="aws-card">
          <img src="/aws-light.webp" alt="AWS" />

          <h4>Amazon Web Services</h4>

          <p>
            Scalable&nbsp; • &nbsp;Secure&nbsp; • &nbsp;Reliable
          </p>
        </div>

        <div className="cloud-divider"></div>

        {/* AWS SERVICES */}
        <div className="services-section">

          <h5>Key Services I Work With</h5>

          <div className="service-grid">

            <div className="service-card">
              <img src="/aws-ec2.svg" alt="Amazon EC2" />
              <h4>Amazon EC2</h4>
              <p>
                Scalable compute
                <br />
                instances in the cloud.
              </p>
            </div>

            <div className="service-card">
              <img src="/s3.png" alt="Amazon S3" />
              <h4>Amazon S3</h4>
              <p>
                Scalable object
                <br />
                storage service.
              </p>
            </div>

            <div className="service-card">
              <img src="/AWS-VPC.png" alt="Amazon VPC" />
              <h4>Amazon VPC</h4>
              <p>
                Isolated virtual
                <br />
                network in the cloud.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>


    {/* OTHER TECHNOLOGIES */}
    <div className="other-tech reveal">

      <h3>Other Technologies</h3>

      <p className="other-description">
        Additional tools and technologies I use for development and deployment.
      </p>

      <div className="tech-categories">

        {/* FRONTEND */}
        <div className="tech-category">
          <h4>Frontend</h4>

          <div className="tech-items">

            <div className="tech-item">
              <img src="/html.webp" alt="HTML" />
              <span>HTML</span>
            </div>

            <div className="tech-item">
              <img src="/css.webp" alt="CSS" />
              <span>CSS</span>
            </div>

            <div className="tech-item">
              <img src="/javascript.webp" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="tech-item">
              <img src="/react.png" alt="React" />
              <span>React</span>
            </div>

          </div>
        </div>


        {/* BACKEND */}
        <div className="tech-category">
          <h4>Backend</h4>

          <div className="tech-items">

            <div className="tech-item">
              <img src="/python.png" alt="Python" />
              <span>Python</span>
            </div>

          </div>
        </div>


        {/* DATABASE */}
        <div className="tech-category">
          <h4>Database</h4>

          <div className="tech-items">

            <div className="tech-item">
              <img src="/mongo.webp" alt="MongoDB" />
              <span>MongoDB</span>
            </div>

            <div className="tech-item">
              <img src="/MySQL.png" alt="MongoDB" />
              <span>MySQL</span>
            </div>

          </div>
        </div>


        {/* TOOLS */}
        <div className="tech-category">
          <h4>Tools</h4>

          <div className="tech-items">

            <div className="tech-item">
              <img src="/git.png" alt="Git" />
              <span>Git</span>
            </div>

            <div className="tech-item">
              <img src="/github.webp" alt="GitHub" />
              <span>GitHub</span>
            </div>

            <div className="tech-item">
              <img src="/vs-code.png" alt="VS Code" />
              <span>VS Code</span>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

        <section className="section learning" id="learning">
          <div className="section-heading reveal"><span>04 / CURRENTLY LEARNING</span><h2>Moving from building apps to understanding the <em>infrastructure</em> behind them.</h2></div>
          <div className="learning-grid">
            {learning.map(([title, tech, description], index) => <article className="learning-card reveal" style={{'--delay': `${index * 100}ms`}} key={title}><div className="learning-number">0{index + 1}</div><h3>{title}</h3><strong>{tech}</strong><p>{description}</p><div className="progress"><span /></div></article>)}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading projects-heading reveal"><span>05 / SELECTED WORK</span><h2>Things I've <em>built</em>.</h2><p>Hands-on projects that helped me turn concepts into working software.</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => <article className="project-card reveal" style={{'--delay': `${index * 70}ms`}} key={project.title}><a className="project-image" href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.title} preview`} /><span className="project-overlay">View on GitHub <Icon name="external" size={16} /></span></a><div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><Icon name="arrow" size={18} /></a></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card reveal">
            <div><span className="section-label">06 / CONTACT</span><h2>Have an idea, opportunity, or just want to talk tech?</h2><p>I'm open to connecting with developers, teams and companies. Feel free to reach out.</p></div>
            <div className="contact-actions"><a className="button button-primary" href="mailto:nikhil.s.richie@gmail.com">Send me an email <Icon name="mail" size={18} /></a><div className="socials"><a href="https://github.com/nkill-star" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href="https://www.linkedin.com/in/nikhil-s-richie/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="https://www.instagram.com/n._kill/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="instagram-icon">?</span></a></div></div>
          </div>
        </section>
      </main>

      <footer className="footer"><span></span><span>© {new Date().getFullYear()} Nikhil S Richie</span><a href="#home">Back to top ?</a></footer>
    </div>
  )
}

export default App
