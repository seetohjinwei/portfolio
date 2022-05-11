export interface Project {
  name: string;
  technologies: string[];
  description: string;
  coDevelopers?: string[];
  repo?: string;
  website?: string;
}

export const projects: Project[] = [
  {
    name: 'OrgaNiUS (WIP)',
    technologies: ['React', 'Go', 'Telegram API'],
    description:
      'Project Management application that has web and telegram interfaces designed for managing both group and individual projects. Frontend designed with React, backend supported with Go.',
    coDevelopers: ['Saraan'],
  },
  {
    name: 'Task Manager',
    technologies: ['React', 'Ruby on Rails'],
    description:
      'Task Manager web application with a user login system. Frontend designed with React, backend REST API with Rails.',
    repo: 'https://github.com/seetohjinwei/Task-Manager',
    website: 'https://jinwei-task-manager.herokuapp.com/',
  },
  {
    name: 'Portfolio Website (this!)',
    technologies: ['Angular'],
    description:
      'Personal portfolio website built with Angular, the website you are currently on!',
    repo: 'https://github.com/seetohjinwei/portfolio',
    website: 'https://seetohjinwei.github.io/portfolio/',
  },
  {
    name: 'Retyper (WIP)',
    technologies: ['React', 'Firebase'],
    description:
      'Typing game built with React that stores game scores through Firebase.',
    // repo: 'https://github.com/seetohjinwei/Retyper',
  },
  {
    name: 'peCar-Parker',
    technologies: ['React'],
    description:
      'Our website helps users find parking spots in their area, with a simple search.',
    coDevelopers: ['Dexter', 'Humphrey', 'Jishnu'],
    repo: 'https://github.com/ParknRoll/peCar-Parker',
    website: 'https://parknroll.github.io/peCar-Parker/',
  },
];
