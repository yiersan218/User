const frontendBadges = [
  'https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
  'https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  'https://img.shields.io/badge/-JavaScript-orange?style=flat-square&logo=javascript&logoColor=white',
  'https://img.shields.io/badge/-Pinia-FFD43B?style=flat-square&logo=pinia&logoColor=black',
  'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black',
  'https://img.shields.io/badge/-Vue3-4FC08D?style=flat-square&logo=vue.js&logoColor=white',
  'https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white',
  'https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white',
  'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'
];

const backendBadges = [
  'https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white',
  'https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white',
  'https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white',
  'https://img.shields.io/badge/-MyBatis-000000?style=flat-square&logo=mybatis&logoColor=white',
  'https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white',
  'https://img.shields.io/badge/-Maven-C71A36?style=flat-square&logo=apache-maven&logoColor=white',
  'https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white',
  'https://img.shields.io/badge/-Steam-1C2838?style=flat-square&logo=steam&logoColor=white'
];

const skillIcons =
  'https://skillicons.dev/icons?i=ps,ai,pr,c,cpp,cs,ts,discord,twitter,mongodb,instagram,idea,git';

const centerIcons = [
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/cssgif.webp',
    alt: 'CSS'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/react.webp',
    alt: 'React'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/vscode.webp',
    alt: 'VS Code'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/vue.webp',
    alt: 'Vue'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/js.webp',
    alt: 'JavaScript'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/github.webp',
    alt: 'GitHub'
  }
];

const iconBanner = 'https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/icon.png';

export function ReadmeShowcase() {
  return (
    <section className="readme-card" aria-label="Profile README preview">
      <p className="readme-kicker">
        coderxiaoluo / <span>README.md</span>
      </p>

      <a className="typing-title" href="https://www.yuque.com/coderxiaoluo" target="_blank" rel="noreferrer">
        <img
          src="https://readme-typing-svg.herokuapp.com/?lines=console.log(%22Hello%2C%20World!%22);小波同学祝您今天愉快!&center=true&size=27"
          alt="小波同学祝您今天愉快"
        />
      </a>

      <div className="badge-cloud" aria-label="Frontend technology badges">
        {frontendBadges.map((src) => (
          <img src={src} alt="" key={src} />
        ))}
      </div>

      <div className="badge-cloud badge-cloud-tight" aria-label="Backend technology badges">
        {backendBadges.map((src) => (
          <img src={src} alt="" key={src} />
        ))}
      </div>

      <div className="skill-icons" aria-label="Skill icons">
        <img src={skillIcons} alt="Skill icons" />
      </div>

      <div className="center-icons" aria-label="Main technology icons">
        {centerIcons.map((icon) => (
          <img src={icon.src} alt={icon.alt} key={icon.alt} />
        ))}
      </div>

      <div className="readme-banner" aria-label="Technology banner">
        <img src={iconBanner} alt="Technology logo banner" />
      </div>
    </section>
  );
}
