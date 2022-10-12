import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Events all month long';
const DESCRIPTION =
  'Join forces in virtual and in-person events to get your pull/merge requests done as a team, learn new skills, and meet lifelong friends.';
const ITEMS = [
  {
    title: 'Hacktoberfest Kick-Off',
    date: 'October 3',
    time: '08:00 PM EST',
    description: 'Eastern daylight time',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Twitter Spaces',
    date: 'October 6',
    time: '11:00 AM EST',
    description: 'An -audio-only discussion session about open-source technologies, carear-path, best use cases, and much more.',
    link: 'https://twitter.com/i/spaces/1rmxPkWaAeLJN',
  },
  {
    title: 'Meet The Contributor',
    date: 'October 6',
    time: '12:00 PM EST',
    description: 'An ask-me-anything-like format discussion, with open source maintainers and contributors, where the host and the audience explore their motivations, world view, career path, technologies preferences, and much more!',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Open Source GeekOut Stream',
    date: 'October 7',
    time: '7:00 AM EST',
    description: 'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Open Source GeekOut Stream',
    date: 'October 14',
    time: '7:00 AM EST',
    description: 'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Meet The Contributor',
    date: 'October 17',
    time: '8:00 AM EST',
    description: 'An ask-me-anything-like format discussion, with open source maintainers and contributors, where the host and the audience explore their motivations, world view, career path, technologies preferences, and much more!',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Novu Special with Vincent Ge (Appwrite)',
    date: 'October 17',
    time: '12:00 PM EST',
    description: 'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Novu AMA Session',
    date: 'October 18',
    time: '11:00 AM EST',
    description: 'Eastern daylight time',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Novu Live Demo',
    date: 'October 19',
    time: '11:00 AM EST',
    description: 'Eastern daylight time',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Novu Special with Hila Fish (Wix)',
    date: 'October 20',
    time: '01:00 PM EST',
    description: 'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Open Source GeekOut Stream',
    date: 'October 21',
    time: '7:00 AM EST',
    description: 'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Pull Request Party',
    date: 'October 25',
    time: '07:00 AM EST',
    description: 'Live event where Novu’s core team, moderators, and contributors are helping people to create their first Pull Request, solve problems and conflicts, do live code reviews, and much more!',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Office Hours',
    date: 'October 25',
    time: '11:00 AM EST',
    description: 'Community-based live event where Novu’s core team members show and tell about the latest features, development process, roadmap view, discuss potential plans, feature ideas,  and answer questions.',
    link: 'https://discord.com/events/895029566685462578/1025554506504732702',
  },
  {
    title: 'Collaboration Event by AppWrite',
    date: 'October 27',
    time: '12:00 PM EST',
    description: 'AppWrite is hosting Novu’s team members to showcase the project, demonstrate how it works and how to contribute.',
    link: 'https://www.youtube.com/watch?v=obRy9Afsxs0&ab_channel=Appwrite',
  },
  {
    title: 'Open Source GeekOut Stream',
    date: 'October 28',
    time: '7:00 AM EST',
    description: 'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Novu Special with Joshua Poddoku',
    date: 'October 30',
    time: '10:00 AM EST',
    description: 'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Hacktoberfest Closing Event',
    date: 'October 31',
    time: '10:00 AM EST',
    description: 'Live event where we celebrate the end of this amazing month, going over significant contributions, sharing insights and upcoming events, along with thanking all our collaborators and partners.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  
];
const Events = () => (
  <section className="events safe-paddings mt-8 py-32 md:py-20 sm:py-16">
    <div className="container-lg text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" tag="h2" size="xl" theme="white">
        {TITLE}
      </Heading>
      <p className="mx-auto mt-11 max-w-[716px] text-lg text-gray-9 md:mt-8 md:max-w-none md:text-base">
        {DESCRIPTION}
      </p>
      <div className="mt-16 grid auto-rows-fr grid-cols-4 gap-x-10 gap-y-7 xl:grid-cols-2 md:mt-12 sm:mt-10 sm:auto-rows-auto sm:grid-cols-1 sm:gap-y-6">
        {ITEMS.map(({ title, date, time, description, link }, index) => {
          const isExternal = link.startsWith('http');
          return (
            <div
              className="flex flex-col rounded-[20px] py-6 px-5"
              style={{
                background:
                  'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%), #000000',
              }}
              key={index}
            >
              <Heading
                className="mb-5 font-medium leading-snug md:text-xl"
                tag="h3"
                size="xs"
                theme="purple"
              >
                {title}
              </Heading>
              <div className="mt-auto flex shrink flex-col">
                <span className="flex justify-center space-x-5 text-lg font-medium sm:text-base">
                  <date>{date}</date>
                  <time>{time}</time>
                </span>
                <span className="mt-1 mb-5 text-lg text-gray-9 sm:text-base">
                  {description || 'TBD'}
                </span>
                <Button
                  className="mt-auto h-7 self-center"
                  theme="yellow"
                  to={link}
                  target={isExternal ? '_blank' : null}
                  rel={isExternal ? 'noopener noreferrer' : null}
                  size="xs"
                >
                  Learn more
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Events;
