import Mock from "../mock";

const database = {
  information: {
    name: 'Kacper Matuszczak',
    aboutContent: "I am a Devops Engineer and Python Developer. At this moment I can provide a solution to automate small boring everyday tasks and larger projects.",
    age: 25,
    aboutPageContent: "I work as Devops Engineer and Python Developer. At this moment I can provide a solution to automate small boring everyday tasks and larger projects.",
    phone: '+48 601-457-255',
    nationality: 'Polish',
    language: 'Polish, English',
    email: 'k.matuszczak94@gmail.com',
    address: 'Wrocław',
    freelanceStatus: 'Busy',
    socialLinks: {
      facebook: 'https://www.facebook.com/kacper.matuszczak.336',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/kacper-matuszczak-928539197/',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Linux",
      icon: 'ubuntu',
      details: "Most servers work on one of Linux distribution, so good to know how to handle, configure and debug them."
    },
    {
      title: "Python",
      icon: 'python',
      details: "Quick task synchronize two different type databases with extra data processing? Perfect job for Python."
    },
    {
      title: "Ansible",
      icon: 'cloud-network',
      details: "Before we have for example Bash script, but why not to execute them on a hundred or even a thousand servers"
    },
  ],
  skills: [
    {
      title: "Linux",
      value: 85
    },
    {
      title: "Python",
      value: 75
    },
    {
      title: "LAMP / LEMP Stack",
      value: 75
    },
    {
      title: "Ansible",
      value: 65
    },
    {
      title: "SQL",
      value: 60
    },
    {
      title: "Virtualization",
      value: 65
    },
    {
      title: "Jenkins",
      value: 45
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Apr 2018 – Present",
        position: "IT Team Lead",
        company: "RGB ELEKTRONIKA",
        details: "Leading a team consisting of programmers and system administrators. Management of servers with Linux (most) and Windows OS. Automation of business processes and time-consuming operations using Python"
      },
      {
        id: 2,
        year: "Jul 2016 – Apr 2018",
        position: "IT specialist",
        company: "RGB ELEKTRONIKA",
        details: "Preparation of workstations, management and modernization of networks, IP Cam systems and physical servers with VMWare ESXi and Hyper-V"
      },
    ],
    certyficates: [
      {
        id: 1,
        year: "Jun 2020",
        position: "Ansible In 2 Days! All You Need To Know",
        details: "SysOps/DevOps Polska"},
      {
        id: 2,
        year: "Dec 2019",
        position: "Linux - Administration, Advanced Level Part 1",
        details: "Comarch"
      },
      {
        id: 3,
        year: "Aug 2019",
        position: "Docker - Quick Start",
        details: "Stacja.it"
      },
      {
        id: 4,
        year: "Jul 2019",
        position: "Practical Ways of Detecting Vulnerabilities in Web Applications",
        details: "Stacja.it"
      },  
      {
        id: 5,
        year: "Jul 2019",
        position: "Machine Learning & Deep Learning",
        details: "Stacja.it"
      },  
      {
        id: 6,
        year: "Apr 2019",
        position: "GIT and GIT Flow for Teams Working in CI/CD",
        details: "Stacja.it"
      },  
      {
        id: 7,
        year: "May 2018",
        position: "Red Hat OpenStack - Configuring and Managing",
        details: "Copernicus University of Information Technology and Management in Wrocław"
      },  
      {
        id: 8,
        year: "Feb 2018",
        position: "Windows Server Advanced Services",
        details: "Copernicus University of Information Technology and Management in Wrocław"
      },  
      {
        id: 9,
        year: "Feb 2018",
        position: "Windows Server Active Directory Services with Hyper-V",
        details: "Copernicus University of Information Technology and Management in Wrocław"
      },  
    ],
    educationExperience: [
      {
        id: 1,
        year: "2014 – 2018",
        graduation: "Engineer, Industrial Electronics",
        university: "Politechnika Wrocławska",
        details: "Work in programming languages: Assembler, C, C ++, Java, VHDL and work with embedded systems. Knowledge of reading and construction of low-level electrical circuits"
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['+48 601-457-255',],
    emailAddress: ['k.matuszczak94@gmail.com',],
    address: "Wrocław"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});