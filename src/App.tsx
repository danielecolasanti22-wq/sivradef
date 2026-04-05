import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense, useEffect } from 'react';

import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then((m) => ({ default: m.CaseStudies })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then((m) => ({ default: m.CookiePolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then((m) => ({ default: m.TermsConditions })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CanonicalLinkManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = 'https://www.sivragp.com';
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${baseUrl}${normalizedPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        {/* @ts-expect-error - React Router v6 Routes accepts key but types don't reflect it */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="cookies" element={<CookiePolicy />} />
            <Route path="terms" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CanonicalLinkManager />
      <AnimatedRoutes />
    </Router>
  );
}
