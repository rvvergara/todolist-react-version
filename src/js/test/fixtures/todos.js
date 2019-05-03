import moment from 'moment';
import projects from './projects';

export default [
  {
    id: 10,
    title: 'First Task',
    description: 'Sunt incididunt eu exercitation irure magna anim quis laboris incididunt ex occaecat.',
    projectName: projects[0].name,
    dueDate: moment().add(2, 'days').valueOf(),
    done: false,
    notes: 'Non anim quis veniam et ea.',
  },
  {
    id: 11,
    title: 'Second Task',
    description: 'Minim proident occaecat nulla ad nisi.',
    projectName: projects[1].name,
    dueDate: moment().add(3, 'days').valueOf(),
    done: false,
    notes: 'Cillum aute eu magna anim id tempor non cupidatat consequat deserunt ad.',
  },
  {
    id: 12,
    title: 'Third Task',
    description: 'Fugiat consequat aliquip anim ad proident consectetur veniam.',
    projectName: projects[2].name,
    dueDate: moment().add(4, 'days').valueOf(),
    done: false,
    notes: 'Commodo duis est occaecat esse quis nulla nostrud consequat proident ex proident non.',
  },
];
