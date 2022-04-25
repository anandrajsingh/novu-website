import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link';
import GITHUB from 'constants/github';
import MENUS from 'constants/menus';
import GitHubLogo from 'images/logo-github.inline.svg';

const RIGHT_BUTTON_TEXT = 'Get Started';
const RIGHT_BUTTON_URL = '/';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    zIndex: 10,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="safe-paddings fixed inset-0 flex h-full w-full flex-col bg-black pt-16"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <nav className="flex h-full w-full overflow-x-hidden overflow-y-scroll">
            <ul className="my-auto flex w-full flex-col">
              {MENUS.header.map(({ to, title }, index) => (
                <li key={index}>
                  <Link
                    className="block w-full py-6 text-center text-2xl"
                    theme="white"
                    size="xl"
                    to={to}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sticky bottom-0 bg-black">
            <div className="container">
              <div className="flex w-full justify-between space-x-4 py-7">
                <Button
                  className="w-full xs:text-xs"
                  to={GITHUB.repoUrl}
                  target="_blank"
                  size="sm"
                  theme="gray-outline"
                >
                  <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
                  <span>Star us</span>
                </Button>

                <Button
                  className="w-full xs:text-xs"
                  to={RIGHT_BUTTON_URL}
                  size="sm"
                  theme="white-filled"
                >
                  {RIGHT_BUTTON_TEXT}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
