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

      <section className="self-intro" aria-label="Self introduction">
        <p className="self-intro-greeting">你好鸭，我是廖栩锐 👋</p>
        <p>
          本科毕业于西安电子科技大学，目前继续在西安电子科技大学攻读研究生 🎓。
          我的研究方向主要是不完备多视图学习和联邦学习，努力让模型在信息不齐和数据分散的现实里都能稳住场面 🔬。
        </p>
        <p>
          目前已在 CCF-A 类会议 ICLR 发表过一篇论文 📝。科研之外，我也持续关注后端开发、
          数据处理和 AI 相关技术，喜欢把想法写成代码，把代码跑成结果，再把结果整理成一点点
          看得懂、用得上、最好还能少踩坑的记录 💻。
        </p>
      </section>

      <div className="readme-banner" aria-label="Technology banner">
        <img src={iconBanner} alt="Technology logo banner" />
      </div>
    </section>
  );
}
