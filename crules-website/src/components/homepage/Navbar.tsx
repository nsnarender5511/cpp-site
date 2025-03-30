import React, { useState, useEffect, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';

export default function Navbar(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu links
  const menuLinks = [
    { label: 'Documentation', url: '/docs/README' },
    { label: 'API Reference', url: '/docs/api-reference/README' },
    { label: 'Examples', url: '/docs/examples/README' },
    { label: 'Blog', url: '/blog' },
  ];

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarBrand}>
          <img 
            src="/img/logo.svg" 
            alt={siteConfig.title} 
            className={styles.navbarLogo} 
          />
          <span className={styles.navbarTitle}>{siteConfig.title}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navbarNav}>
          {menuLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                to={link.url} 
                className={styles.navbarLink}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className={styles.navbarActions}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              className={`button button--primary ${styles.navbarCta}`}
              to="/docs/README"
            >
              Get Started
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={styles.githubButton}
          >
            <Link
              to="https://github.com/crules-org/crules-website"
              aria-label="GitHub repository"
            >
              <FiGithub />
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {menuLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.url}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="https://github.com/crules-org/crules-website"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 