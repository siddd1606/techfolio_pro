import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HeroExperience from "pages/hero-experience";
import AboutIdentityPortal from "pages/about-identity-portal";
import SkillsVisualizationMatrix from "pages/skills-visualization-matrix";
import ContactConnectionHub from "pages/contact-connection-hub";
import ProjectUniverseShowcase from "pages/project-universe-showcase";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HeroExperience />} />
        <Route path="/hero-experience" element={<HeroExperience />} />
        <Route path="/about-identity-portal" element={<AboutIdentityPortal />} />
        <Route path="/skills-visualization-matrix" element={<SkillsVisualizationMatrix />} />
        <Route path="/contact-connection-hub" element={<ContactConnectionHub />} />
        <Route path="/project-universe-showcase" element={<ProjectUniverseShowcase />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;