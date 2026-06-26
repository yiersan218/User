const frontendBadges = [
  '/images/badge-java.svg',
  '/images/badge-python.svg',
  '/images/badge-pytorch.svg',
  '/images/badge-mysql.svg',
  '/images/badge-postgresql.svg',
  '/images/badge-elasticsearch.svg',
  '/images/badge-redis.svg',
  '/images/badge-mongodb.svg'
];

const backendBadges = [
  '/images/badge-spring-boot.svg',
  '/images/badge-mybatis.svg',
  '/images/badge-rocketmq.svg',
  '/images/badge-kafka.svg',
  '/images/badge-agent.svg',
  '/images/badge-docker.svg',
  '/images/badge-maven.svg',
  '/images/badge-github.svg',
  '/images/badge-steam.svg'
];

const skillIcons = '/images/animated-skills.svg';

const iconBanner = '/images/technology-banner.png';

export function ReadmeShowcase() {
  return (
    <section className="readme-card" aria-label="Profile README preview">
      <a className="typing-title" href="https://www.yuque.com/coderxiaoluo" target="_blank" rel="noreferrer">
        <img
          src="/images/typing-title.svg"
          alt="灏忓粬鍚屽绁濇偍浠婂ぉ鎰夊揩"
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
        <img src={skillIcons} alt="Animated skill icons" />
      </div>

      <div className="readme-banner" aria-label="Technology banner">
        <img src={iconBanner} alt="Technology logo banner" />
      </div>
    </section>
  );
}
