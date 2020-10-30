import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'MINHAZUL ABEDIN',
  subtitle: 'Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
 
  resume: 'https://docs.google.com/document/d/12GJ8nAdb_eenC_KlBVHwX-iVF9mFUSg7Xm0j9rHO9wU/edit?usp=sharing', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'doctor-portal.PNG',
    title: 'Doctors-portal',
    info: 'A mern-stack project, where you can book the appointentment in your preferable day, and a doctor can review his/her appointments so that he/she can prescribe you as well as an admin can add a new doctor and can delete as well.',
    info2: 'Tchnology: Html,Css,Bootstrap,React.Js, Node.js,Express.js,MongoDB, firebase authentication',
    url: 'https://doctors-portal-82bc2.firebaseapp.com/',
    repo: 'https://github.com/minhazu-cmyk/doctors-portal-client', 
  },
   {
    id: nanoid(),
    img: 'emajhon.PNG',
    title: 'Ema-Jhon',
    info3: 'A full stack E-commerce website, where you can buy some product and you review your item.',
    info4: 'Tchnology: Html,Css,Bootstrap,React.Js, Node.js,Express.js.MongoDB,firebase authentication',
    url: 'https://ema-jhon-simple-acee0.firebaseapp.com/',
    repo: 'https://github.com/minhazu-cmyk/ema-jhon-simple-auth', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'agency.PNG',
    title: 'Creative-Agency',
    info5: 'A complete MERN-Stack project,where client can order any product and review the product item and an admin can add a new product and cancel as well. ',
    info6: 'Tchnology: Html,Css,Bootstrap,React.Js, Node.js,Express.js.MongoDB,firebase authentication',
    url: 'https://creative-agency-43325.firebaseapp.com/',
    repo: 'https://github.com/minhazu-cmyk/creative-agency-client', // if no repo, the button will not show up
  },
 
  {
    id: nanoid(),
    img: 'travel.PNG',
    title: 'Travel-Guru',
    info7: 'A tour booking projects,clients can book the tour in different location and also book  the hotel in selected location  ',
    info8: 'Tchnology: Html,Css,Bootstrap,firebase authentication,react-bootstrap,material-ui',
    url: 'https://travel-guru-d5bae.firebaseapp.com/',
    repo: 'https://github.com/minhazu-cmyk/travel-guru', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
