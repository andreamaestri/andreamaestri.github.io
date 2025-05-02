import React, { useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Home, 
  Blog, 
  Portfolio, 
  UserProfile,
  Email 
} from '@carbon/icons-react';


interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode; 
  delay?: number; 
}

interface Props {
  SITE_NAME: string;
  navLinks: NavLink[];
}

// Helper function to get the appropriate icon for a link
function getIconForLink(label: string, iconSize: number): React.ReactNode {
  switch(label.toLowerCase()) {
    case 'home':
      return <Home size={iconSize} />;
    case 'blog':
      return <Blog size={iconSize} />;
    case 'projects':
    case 'portfolio':
      return <Portfolio size={iconSize} />;
    case 'about':
    case 'work':
      return <UserProfile size={iconSize} />;
    case 'contact':
      return <Email size={iconSize} />;
    default:
      return null;
  }
}

export default function HeaderScrollAnimation({ SITE_NAME, navLinks }: Props) {
  const { scrollY } = useScroll();
  // Use a fixed scroll threshold for SSR safety; use CSS for responsive layout
  const scrollThreshold = 60;
    // Apply a smooth spring to the raw scroll progress with optimized spring settings
  const scrollProgressRaw = useTransform(scrollY, [0, scrollThreshold], [0, 1]);
  const scrollProgress = useSpring(scrollProgressRaw, { stiffness: 200, damping: 30 });

  // Optimized transforms with simplified ranges
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 2]);
  const headerScale = useTransform(scrollProgress, [0, 1], [1, 0.97]);
  const headerShadow = useTransform(
    scrollProgress,
    [0, 0.7],
    ["0 0 0 rgba(0,0,0,0)", "0 6px 12px rgba(0,0,0,0.1)"]
  );
  
  // Simplified transforms for better performance
  const headerY = useTransform(scrollProgress, [0, 1], [0, -1]);
  const headerPadding = useTransform(scrollProgress, [0, 1], ["0.8rem", "0.5rem"]);
  
  // More moderate title transformations
  const titleSize = useTransform(scrollProgress, [0, 1], ["1.8rem", "1rem"]);
  const titleWeight = useTransform(scrollProgress, [0, 1], ["200", "700"]);

  // Reduced range for icon size change
  const iconSize = useTransform(scrollProgress, [0, 1], [24, 32]);
  
  // Simplified container max-width
  const containerMaxWidth = useTransform(scrollProgress, [0, 1], ["58rem", "26rem"]);

  // Define wiggle keyframe with simplified animation
  const wiggle = {
    hover: {
      rotate: [0, -1.5, 1.5, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.3, 0.7, 1],
        type: 'tween',
        ease: "easeInOut"
      }
    }
  };

  // Memoize links with calculated delays to avoid recalculation
  const linksWithIcons = useMemo(
    () => navLinks.map((link, i) => ({
      ...link,
      icon: null, 
      delay: 0.1 + i * 0.07
    })),
    [navLinks]
  );  // Cache icon components to avoid recreation on every render
  const cachedIcons = useMemo(() => {
    return {
      home: Home,
      blog: Blog,
      projects: Portfolio,
      portfolio: Portfolio,
      work: UserProfile,
      about: UserProfile,
      contact: Email
    };
  }, []);
    // Optimized icon size value getter with better performance
  const getIconSizeValue = useMemo(() => 
    () => {
      const size = iconSize.get();
      return typeof size === "number" ? size : 24;
    }
  , [iconSize]);

  return (
    <motion.div
      className="
        glass-nav
        backdrop-blur-md
        bg-black/20
        border border-white/15
        rounded-full
        relative
        w-full sm:w-auto
      "
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}      
      style={{
        perspective: 600,
        rotateX,
        boxShadow: headerShadow,
        scale: headerScale,
        y: headerY,
        "--scroll-progress": scrollProgress as any
      }}      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="glass-grain absolute inset-0 z-[1]"></div>
      <motion.div
        className="container w-full mx-auto h-full flex items-center justify-center"
        style={{
          maxWidth: containerMaxWidth,
          transition: "max-width 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <motion.div
          className="flex flex-row items-center justify-between gap-1 sm:gap-2 w-full"
          style={{
            paddingTop: headerPadding,
            paddingBottom: headerPadding,
          }}
        >
          <a href="/" className="no-underline flex-shrink-0">
            <motion.div
              variants={wiggle}
              whileHover="hover"
              whileTap={{ scale: 0.95, rotate: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="site-name font-semibold tracking-tight text-center"
              style={{
                fontSize: titleSize,
                fontWeight: titleWeight,
              }}
              tabIndex={0}
              aria-label="Go to homepage"
            >
              {SITE_NAME}
            </motion.div>
          </a>
          <nav aria-label="Main navigation" className="flex-grow flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-row items-center justify-end flex-nowrap"
            >
              {linksWithIcons.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={wiggle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: link.delay,
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                  }}
                  whileHover="hover"
                  className="inline-block m-0.5 flex-shrink-0"
                >
                  <a href={link.href} className="nav-link inline-block" aria-label={link.label}>                    <motion.span
                      className="nav-link-label"
                      initial={{ filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                        filter: "drop-shadow(0 3px 2px rgba(0, 0, 0, 0.12))",
                      }}
                      whileTap={{ y: 1, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10, mass: 0.8 }}
                    >
                      <span className="nav-icon-wrapper">
                        <motion.span
                          style={{
                            width: iconSize,
                            height: iconSize,
                          }}
                          className="flex items-center justify-center"
                        >                          {React.createElement(cachedIcons[link.label.toLowerCase()] || 'span', {
                            size: getIconSizeValue(),
                            style: { display: "block" }
                          })}
                        </motion.span>
                        <span className="nav-text overflow-hidden">{link.label}</span>
                      </span>
                    </motion.span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
