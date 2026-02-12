export const resumeData = {
  contact: {
    name: 'Samuel Stidham'
  },
  summary: [
    'Software Engineer with 12 years of professional experience who returned to school for a CS degree to master the theory behind the code. Specialize in full-stack development, backend technologies, CI/CD automation, and cloud-native solutions—with particular expertise in unglamorous, high-stakes migrations, refactoring legacy systems into stable architectures, and optimizing performance at scale.',
    'Certified Scrum Master and Agile advocate committed to building high-performing teams, establishing engineering best practices, and fostering a culture of continuous improvement.'
  ],
  experience: [
    {
      title: 'WP Engine',
      role: 'Software Engineer',
      date: 'January 2022 – August 2025',
      bullets: [
        'Executed a critical Cloudflare migration by developing an idempotent PHP automation (Symfony Console) to transfer 1M+ custom hostnames to new shared zones, utilizing AWS Lambda for scheduled operations.',
        'Managed and maintained a core Go service (chi-based API) responsible for the lifecycle of Cloudflare custom certificates for multisite hosting, reducing certificate overhead and simplifying customer configurations.',
        'Enhanced a Ruby on Rails domain-mapping service acting as the source of truth for custom records by implementing intelligent caching, multi-cloud networking, and DNS-based health checks to ensure correctness and prevent unsafe configurations.'
      ]
    },
    {
      title: 'Averitt Express Inc',
      role: 'Senior PHP Programmer',
      date: 'February 2019 – January 2022',
      bullets: [
        'Designed and built a core Symfony (PHP) application composed of modular bundles supporting internal logging and freight workflows, including routing and risk management, using test-driven development to ensure robust, business-critical logging that enabled event to support international height operations.',
        'Led a modernization effort migrating legacy systems from Symfony to Laravel and from AngularJS to Vue.js, including transitioning server-rendered templates from Bootstrap 3 to 5, improving maintainability, development velocity, and long-term platform scalability.',
        'Implemented enterprise authentication and authorization by integrating LDAP and Active Directory, managing security protocol access aligned with corporate identity management and permission controls.'
      ]
    },
    {
      title: 'Webbed Spine Inc.',
      role: 'Senior Programmer',
      date: 'November 2013 – February 2018; November 2018 – February 2019',
      bullets: [
        'Designed and built a buylist platform (online shopping cart) using a PHP REST backend and AngularJS frontend to manage large-scale operations, streamlining the acquisition and supply chain logistics.',
        'Developed an idempotent PHP automation using Rackspace\'s paginated APIs to reprocess and optimize product images in-place, reducing storage usage from 40GB to under 10GB significantly.',
        'Continued development and modernization of a large-scale e-commerce platform, including refactoring legacy PHP cache architecture and building PHP API integrations for third-party marketplaces such as Walmart, Sellbrite, eBay, and Amazon.'
      ]
    }
  ],
  education: [
    {
      title: 'Southern New Hampshire University',
      degree: 'Bachelor of Science in Computer Science | Sept 2025 – Current',
      bullets: [
        'Concentration: Software Engineering',
        'Minor: Mathematics',
        'Expected Graduation: October 2028',
        'Current Accumulated GPA: 4.0'
      ]
    },
    {
      title: 'Somerset Community College',
      degree: 'Associates of Applied Science in Information Technology | August 2007 – May 2009',
      bullets: []
    }
  ],
  certifications: [
    {
      title: 'Certified Scrum Master | Scrum Alliance',
      issued: 'October 2022 – Present',
      bullets: [
        'Credential ID: 1665584',
        'Micro Credential: Getting Started with AI Prompt Engineering'
      ]
    }
  ]
}
