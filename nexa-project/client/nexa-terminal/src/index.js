import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css'
import Dashboard from './pages/Dashboard';
import LegalDocuments from './pages/LegalDocuments';
import LegalHealthCheck from './pages/LegalHealthCheck';
import LegalAI from './pages/LegalAI';
import Marketplace from './pages/Marketplace';
import TrainingVideos from './pages/TrainingVideos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardSidebar from './components/DashboardSidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <div style={{ display: 'flex' }}>
        <DashboardSidebar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/legal-documents" element={<LegalDocuments />} />
            <Route path="/legal-health-check" element={<LegalHealthCheck />} />
            <Route path="/legal-ai" element={<LegalAI />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/training-videos" element={<TrainingVideos />} />
        </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);