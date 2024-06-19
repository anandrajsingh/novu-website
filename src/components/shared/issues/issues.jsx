import clsx from 'clsx';
// import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import issueIcon from './images/issue.svg';

const TITLE = 'Don’t know where to start?';
const DESCRIPTION =
  'Check our good first issues that help you onboard to Novu project and get first achievement.';

const Issues = ({ className }) => {
  // const [isShownMore, setIsShownMore] = useState(false);

  // TODO:: uncomment issuesData, when GATSBY_CONTRIBUTORS_API_URL will be available
  // const {
  //   issues: { data },
  // } = useStaticQuery(graphql`
  //   query issuesQuery {
  //     issues {
  //       data {
  //         title
  //         url
  //         created_at
  //       }
  //     }
  //   }
  // `);

  // eslint-disable-next-line
  const data = [];

  // const list = useMemo(() => (isShownMore ? data : data.slice(0, 5)), [isShownMore, data]);

  const list = [];

  return (
    <section className={clsx('issues safe-paddings', className)}>
      <div className="container-lg">
        <div className="mx-auto max-w-[787px] text-center">
          <Heading
            className="leading-tight md:text-5xl sm:text-4xl"
            tag="h2"
            size="xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-10 text-lg font-light leading-snug text-gray-9 md:text-base">
            {DESCRIPTION}
          </p>
        </div>
        <div className="mx-auto max-w-[904px]">
          <ul className="mt-10">
            {list.map(({ title, url, created_at }, index) => (
              <li
                className="relative flex items-center py-4 after:absolute after:bottom-0 after:right-0 after:h-px after:w-[calc(100%-54px)] after:bg-gray-3 last:after:hidden"
                key={index}
              >
                <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                  <img src={issueIcon} loading="lazy" alt="Issue icon" aria-hidden />
                </div>

                <Link
                  className="flex w-full justify-between space-x-3 font-light"
                  to={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{title}</span>
                  <span className="flex-shrink-0 text-sm sm:hidden">
                    opened {moment(created_at).fromNow()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* TODO: uncomment the creation of contributors page after this link works - http://contributors.novu.co/ */}
          {/* {!isShownMore && list.length !== data.length && (
            <div className="mt-8 text-center">
              <Link
                className="sm:text-sm"
                type="button"
                size="base"
                theme="primary-underline"
                tag="button"
                onClick={() => setIsShownMore(true)}
              >
                Show more issues
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Issues;
