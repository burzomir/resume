export const data = {
  timeline: {
    sections: [1, 2]
  },

  sections: [{
    id: 1,
    name: 'Experience',
    subsections: [1, 2, 3]
  }, {
    id: 2,
    name: 'Education',
    subsections: [4]
  }],

  subsections: [{
    id: 1,
    name: 'Bitcraft',
    entries: [1, 2, 3]
  }, {
    id: 2,
    name: 'YNDO',
    entries: [4]
  }, {
    id: 3,
    name: 'Freelancer',
    entries: [5]
  }, {
    id: 4,
    name: 'Bialystok University of Technology',
    entries: [6]
  }],

  entries: [{
    id: 1,
    name: 'Lead Front-end Developer',
    started: new Date(2017, 5),
    ended: new Date(2018, 3),
    achievements: [
      'Implementation of web and mobile applications (React, React Native)',
      'Standarization of front-end team work (code-review, automation of code quality control)',
      'Participation in interviews'
    ]
  },{
    id: 2,
    name: 'Front-end Developer',
    started: new Date(2016, 10),
    ended: new Date(2017, 5),
    achievements: [
      'Implementation of web applications (AngularJS)',
      'Custom tool based on Webpack that reduced amount of repetitive tasks performed by developers on the long-term project (Webpack, Node.js)',
      'Introducing trending technologies in new projects (Webpack, ES6)'
    ]
  },{
    id: 3,
    name: 'Web Developer',
    started: new Date(2015, 10),
    ended: new Date(2016, 10),
    achievements: [
      'Maintanance of existing projects (Django, Django Rest Framework, Knockout.js)',
      'Improvements and optimization of front-end project (Knockout.js, Gulp)',
      'Integration between SOAP and RESTful web services'
    ]
  },{
    id: 4,
    name: 'Web Developer',
    started: new Date(2014, 1),
    ended: new Date(2017, 8),
    achievements: [
      'Diament Meblarstwa furniture competition (Django, AngularJS) - Web app that helps with planning, competitors registration, voting and summarizing entire competition',
      '3D shopping mall widget (three.js) - Web widget that allows to use 3D interactive models on shopping mall kiosks'
    ]
  },{
    id: 5,
    name: 'Web Developer',
    started: new Date(2015, 1),
    ended: new Date(2016, 8),
    achievements: [
      'Wspólna przestrzeń - wspólne sprawy - Supraśl Town interactive map application (Django, jQuery)',
      'Crisis in mind mapping (Django, jQuery, Leaflet.js) - Collaborative photo mind-map editor for photography workshops'
    ]
  },{
    id: 6,
    name: 'Computer Science',
    started: new Date(2013, 9),
    ended: new Date(2018, 6),
    achievements: []
  }],

  skillSections: [
    {
      id: 1,
      name: 'Skills',
      skills: [1, 3, 4, 7, 8, 9, 11, 12]
    },
    {
      id: 2,
      name: 'Languages',
      skills: [5, 6]
    }
  ],

  skills: [
    {
      id: 1,
      name: 'JavaScript / TypeScript',
      rating: 4
    },
    {
      id: 3,
      name: 'HTML',
      rating: 4
    },
    {
      id: 4,
      name: 'CSS / SCSS',
      rating: 4
    },
    {
      id: 5,
      name: 'Polish',
      rating: 6
    },
    {
      id: 6,
      name: 'English',
      rating: 4
    },
    {
      id: 7,
      name: 'React + Redux',
      rating: 4
    },
    {
      id: 8,
      name: 'AngularJS',
      rating: 4
    },
    {
      id: 9,
      name: 'Webpack',
      rating: 3
    },
    {
      id: 11,
      name: 'GIT',
      rating: 3
    },
    {
      id: 12,
      name: 'Docker',
      rating: 2
    }
  ]
}
