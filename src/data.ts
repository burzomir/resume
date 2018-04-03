export const data = {
  timeline: {
    sections: [1, 2],
    intro: `
      A front-end developer who cares about the results and the quality of the code.
      Developed and maintained over 10 advanced applications based on the provided specification and design.
      Introduced new technologies to help Bitcraft team develop their products better and faster.
    `
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
      'Estabilished regular code review in the front-end team',
      'Actively participated in work standard improvement meetings',
      'Carried out the technical part of the interview',
      'Organized trips to the Code Europe conference and HACKYEAH hackathon'
    ]
  },{
    id: 2,
    name: 'Front-end Developer',
    started: new Date(2016, 10),
    ended: new Date(2017, 5),
    achievements: [
      'Created a set of tools that automated repetitive tasks done by the team',
      'Improved a project architecture that made project modules less dependant and more reusable',
      'Introduced new technologies like ES6 and Webpack to the team',
      'Participated in project meetings with staff and clients',
      'Mentored over 4 developers',
      'Developed over 5 web and mobile applications'
    ]
  },{
    id: 3,
    name: 'Web Developer',
    started: new Date(2015, 10),
    ended: new Date(2016, 10),
    achievements: [
      'Designed and developed better UI controls that improved big data browsing experience',
      'Improved projects build process that reduced total client application size by 70%',
      'Developed integration service for exchanging data between SOAP and RESTful web-services',
      'Developed and maintained over 3 web applications'
    ]
  },{
    id: 4,
    name: 'Web Developer',
    started: new Date(2014, 1),
    ended: new Date(2017, 8),
    achievements: [
      'Diament Meblarstwa furniture competition - Web app that helps with planning, competitors registration, voting and summarizing entire competition',
      '3D shopping mall widget - Web widget that allows to use 3D interactive models on shopping mall kiosks'
    ]
  },{
    id: 5,
    name: 'Web Developer',
    started: new Date(2015, 1),
    ended: new Date(2016, 8),
    achievements: [
      'Wspólna przestrzeń - wspólne sprawy - Supraśl Town interactive map application',
      'Crisis in mind mapping - Collaborative photo mind-map editor for photography workshops'
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
      skills: [1, 3, 4, 7, 8, 9, 11]
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
