const logotext = "Mayank";
const meta = {
  title: "Mayank Bhadaraka",
  description:
    "I’m Mayank Bhadaraka MERN Stack Developer _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I’m Mayank Bhadaraka",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop Website",
  },
  description:
    "I am enthusiastic about designing, maintaining, and delivering high-quality single page and eCommerce apps as a full stack web developer with expertise in the MERN stack. My knowledge and expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB enable me to provide solid and efficient online solutions.",
  your_img_url: "Images/Logo1.png",
};

const dataabout = {
  title: "Know more about my self",
  aboutme: `I am enthusiastic about designing, maintaining, and delivering high-quality single page and eCommerce apps as a full stack web developer with expertise in the MERN stack. My knowledge and expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB enable me to provide solid and efficient online solutions.
What distinguishes me is my ability to quickly get used to new technologies, allowing me to work on any tech stack. I am a dedicated and hardworking learner that is constantly attempting to keep up with the newest web development trends and best practices.
I think that cooperation and communication are critical to project success, and I constantly endeavor to work closely with my clients to understand their individual needs and goals. 
I am confident in my ability to create great outcomes that meet and surpass expectations with my experience and devotion.
I am thrilled to help you bring your idea to life, whether you are wanting to develop a new website from start, optimise an existing one, or add additional features and functionality. Let's collaborate to make something truly extraordinary!`,
};
const worktimeline = [
  {
    jobtitle: "Prabhu Studio",
    where: "Full Stack Developer",
    date: "2023",
  },
  {
    jobtitle: "Lucent Innovation",
    where: "Full Stack Developer",
    date: "2023",
  },
  {
    jobtitle: "Baroda-Web",
    where: "Full Stack Developer",
    date: "2022",
  },

  {
    jobtitle: "Freelancing",
    where: "TutorPoint",
    date: "2020",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "React",
    value: 85,
  },
  {
    name: "Node",
    value: 82,
  },
  {
    name: "Express",
    value: 80,
  },
  {
    name: "SQL",
    value: 80,
  },
  {
    name: "NoSQL",
    value: 75,
  },
  {
    name: "Python",
    value: 70,
  },
];

const services = [
  {
    title: "Front-End Developer",
    description:
      "I specialize in creating user-friendly and visually appealing websites using HTML, CSS, and JavaScript. I can help you bring your vision to life and ensure that your website looks great on all devices.",
  },
  {
    title: "Back-End Developer",
    description:
      " I am experienced in building server-side applications using Node.js, PHP, and other technologies. I can help you build secure and scalable web applications that meet your business needs.",
  },
  {
    title: "Full Stack Developer",
    description:
      " I have extensive experience in both front-end and back-end development, allowing me to create end-to-end solutions for your web development needs. Whether you need a simple website or a complex web application, I can help you deliver results.",
  },
];

const dataportfolio = [
  {
    name: "Prabhu Chat",
    img: "https://admin.prabhustudio.com/upload/ps/images/PS_fav_1675794018.jpeg",
    description: ["Comprehensive Internal Communication: Developed a robust internal communication platform enabling real-time messaging, file sharing, and group discussions.",
      "Efficient Time Tracking: Implemented a time tracking system to monitor employee productivity and project timelines accurately.",
      "Centralized Admin Control: Provided administrators with the ability to oversee employee activity, access screens remotely, and manage system settings.",
      "MERN Stack Foundation: Utilized the powerful MERN stack to build a scalable and maintainable application.",
      "Electron.js Integration: Deployed the application as a desktop application using Electron.js, ensuring seamless user experience across different operating systems.",
      "Security and Privacy: Implemented robust security measures to protect sensitive data and ensure privacy for all users."],
    demo: false,
    code: false
  },
  {
    name: "Family Trees",
    img: "https://familytrees.in/assets/images/logo.png",
    description: ["Intuitive Family Tree Builder: Effortlessly create and manage your family tree.",
      "Visualize Your History: Generate stunning family tree charts with photos and details.",
      "Secure Data Storage: Protect your family's legacy with secure data storage.",
      "Collaborate with Family: Invite family members to contribute and share the family tree.",
      "Explore Historical Resources: Access valuable tools to aid your genealogical research."],
    demo: "https://familytrees.in",
    code: false
  },
  {
    name: "SI Messanger",
    img: "data:image/png;base64,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",
    description: ["Real-time Chat: Developed a robust real-time chat application using WebSockets or a similar technology, enabling instant messaging between users.",
      "User Interface: Designed and implemented a user-friendly and intuitive interface, ensuring a seamless user experience across various devices.",
      "MERN Stack Implementation: Leveraged the power of the MERN stack (MongoDB, Express.js, React, Node.js) to build a scalable and efficient application.",
      "Feature-rich Functionality: Incorporated essential features like file sharing, group chats, and message history, enhancing the overall user experience.",
      "Security and Privacy: Prioritized user security by implementing robust security measures to protect sensitive data and prevent unauthorized access.",
      "Scalability: Designed the application to handle a growing user base and increased traffic, ensuring optimal performance."],
    demo: "http://13.234.66.162:4002",
    code: false
  },
  {
    name: "Simply Shipping Protection",
    img: "https://cdn.shopify.com/app-store/listing_images/eaa29711a692568b1be7bf589381f65d/icon/CIzE2oqLw_0CEAE=.png",
    description: ["Developed and implemented a shipping protection application for Shopify and BigCommerce platforms.",
      "Addressed clients’ shipping-related issues and provided tailored solutions to enhance customer satisfaction and minimize risks.",
      "Customized shipping protection settings, integrated third-party APIs, and ensured a seamless customer experience.",
      "Demonstrated problem-solving skills and delivered high-quality solutions to meet client requirements in the e-commerce domain.",
      "Managed extensive database with 500K+ rows, ensuring efficient organization and accessibility for seamless operations."],
    demo: "https://apps.shopify.com/simply-insurance",
    code: false
  },
  {
    name: "Simply Return",
    img: "https://cdn.shopify.com/app-store/listing_images/517e05d0193f5f00d509d81bb6ccf7b8/icon/CIX0ppWhufkCEAE=.png",
    description: [
      "Developed a Shopify-based return management app, streamlining returns processing.",
      "Integrated Fynd/Delhivery for improved shipping logistics.",
      "Collaborated with Unicommerce/Increff for optimized warehouse management.",
      "Crafted a user-friendly interface with live updates and error handling.",
      "Enhanced app functionality using diverse third-party libraries.",
      "Efficiently managed multiple databases, optimizing for diverse functions and data sources. Implemented various technologies to streamline operations across interconnected systems."
    ],
    demo: false,
    code: false
  },
  {
    name: "Ecommerce Website",
    img: "https://res.cloudinary.com/durvski0m/image/upload/v1704297309/DealsDome/4.png",
    description: [
      "Developed an e-commerce platform using React, Redux, Node.js, Express.js, MongoDB, and various technologies. Integrated Stripe payment processing for secure transactions and ensured seamless user experiences.",
      "Utilized MERN stack technologies to build and deploy the website for robust functionality.",
      "Crafted intuitive, responsive user interfaces ensuring seamless customer experiences.",
      "Implemented secure payment processing for reliable and protected transactions.",
      "Integrated backend functionality to support the front-end, ensuring a cohesive user experience."
    ],
    demo: "https://dealsdome.onrender.com/",
    code: "https://github.com/mayankbhadaraka/DealsDome.com"
  },
  {
    name: "Simply Mart",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5V0iFdMMv-gmH1nvXL0zf6smYUwARrcIR7ad25WVl9g&s",
    description: [
      "Simply Mart application designed with Shopify Polaris, ensuring a user-friendly interface for seamless navigation.",
      "Developed on BigCommerce using MongoDB, delivering a robust backend infrastructure for efficient data management.",
      "Simplified product addition, enabling direct publishing to meta-platforms for enhanced customer accessibility and reach.",
      "Integrated WhatsApp functionality for easy customer orders, leveraging Meta APIs to facilitate convenient transactions.",
      "Utilized React, Node.js, Express, and MongoDB to create a highly responsive, scalable, and feature-rich application."
    ],
    demo: "https://simplymart.lucentinnovation.com/",
    code: false
  },
  {
    name: "Chat Application",
    img: "https://th.bing.com/th/id/R.4977fd7c7bf45c82c71c3eb3a7df1408?rik=ciIKvB9EEsCGEA&riu=http%3a%2f%2finkbotdesign.com%2fwp-content%2fuploads%2f2014%2f05%2fChat-App-Logo.png&ehk=Jogv4DO2%2fzg2xzsyBqam22Dr4%2fEzDuhUK%2b%2fYEVt3OLo%3d&risl=&pid=ImgRaw&r=0",
    description: [
      "Utilized Express, Socket.IO for real-time communication, and authentication via JSON Web Tokens (jsonwebtoken).",
      "Implemented MongoDB with Mongoose for efficient data handling and storage.",
      "Leveraged Redux Toolkit for streamlined state management within the React application.",
      "Integrated React Router DOM for efficient navigation and handling of route changes.",
      "Incorporated emoji-picker-react and Moment.js for enhanced user interactions and time formatting.",
      "Deployed cloudinary for image handling, bcrypt for password encryption, and axios for server-client communication."
    ],
    demo: "https://chatapp-sitr.onrender.com",
    code: "https://github.com/mayankbhadaraka/Chat-App-Client-Server"
  }
];

const contactConfig = {
  YOUR_EMAIL: "mayank042002@gmail.com",
  YOUR_FONE: "7016992524",
  description:
    "Thank you for your interest in getting in touch with me. Please use form to send me a message, and I'll do my best to respond as soon as possible. Whether you have a question, feedback, or a business proposal, I'm always happy to hear from you. Your privacy is important to me, and I will only use your contact information to reply to your message. So, please fill out the form with your details and your message, and I'll be in touch soon. Thank you again for your interest!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_jm2xc97",
  YOUR_TEMPLATE_ID: "template_jf2mkpf",
  YOUR_USER_ID: "GIGBbNgYpdwkqbI9A",
};

const socialprofils = {
  github: "https://github.com/mayankbhadaraka",
  facebook: "https://www.facebook.com/mayank.bhadaraka.1",
  linkedin: "https://www.linkedin.com/in/mayankbhadaraka/",
  twitter: "https://twitter.com/Myk_ahir23",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
