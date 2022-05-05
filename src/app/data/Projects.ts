import Project from '../interfaces/IProjects';

export const projects: Project[] = [
  {
    name: 'Orbital',
    technologies: ['React', 'Go Gin', 'Telegram Bot'],
    description:
      'Project Management application that has web and telegram interfaces designed for managing both group and individual projects. Frontend designed with React, backend designed with Go Gin.',
  },
  {
    name: 'Task Manager',
    technologies: ['React', 'Ruby on Rails', 'Typescript'],
    description:
      'Task Manager built with React and Ruby on Rails with a user login system.',
  },
  {
    name: 'Portfolio',
    technologies: ['Angular', 'Typescript'],
    description:
      'Personal portfolio website built with Angular, the one you are currently on!',
  },
  {
    name: 'Retyper',
    technologies: ['React', 'Firebase'],
    description:
      'Typing game built with React and stores data through Firebase.',
  },
];
