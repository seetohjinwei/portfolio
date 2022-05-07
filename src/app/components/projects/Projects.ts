export interface Project {
  name: string;
  technologies: string[];
  description: string;
  repo?: string;
  website?: string;
}

export const projects: Project[] = [
  {
    name: 'OrgaNiUS',
    technologies: ['React', 'Go', 'Telegram API'],
    description:
      'Project Management application that has web and telegram interfaces designed for managing both group and individual projects. Frontend designed with React, backend supported with Go.',
  },
  {
    name: 'Task Manager',
    technologies: ['React', 'Ruby on Rails', 'Typescript'],
    description: 'Task Manager web application with a user login system.',
    repo: 'https://github.com/seetohjinwei/Task-Manager',
    website: 'https://jinwei-task-manager.herokuapp.com/',
  },
  {
    name: 'Portfolio',
    technologies: ['Angular', 'Typescript'],
    description:
      'Personal portfolio website built with Angular, the website you are currently on!',
    repo: 'https://github.com/seetohjinwei/portfolio',
  },
  {
    name: 'Retyper',
    technologies: ['React', 'Firebase'],
    description:
      'Typing game built with React that stores game scores through Firebase.',
    repo: 'https://github.com/seetohjinwei/Retyper',
  },
];
