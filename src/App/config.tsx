import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Vineeth Kalyan Cheppalli',
  },
  title: {
    display: 'Software Engineer',
  },
  buttons: [
    // {
    //   name: 'github',
    //   display: 'GitHub',
    //   ariaLabel: 'GitHub profile (opens in new window)',
    //   icon: <GitHub />,
    //   href: '#',
    // },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/vineethkalyancheppalli/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1HOAWyGDs8sjcTGJc1T1ReptePzwY5USq/view?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:vineethkalyancheppalli@gmail.com',
    },
  ],
};
