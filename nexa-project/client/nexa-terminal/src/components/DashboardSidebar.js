import '../styles.css';
import { Link } from 'react-router-dom';

function DashboardSidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard Sidebar</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/legaldocuments">LegalDocuments</Link>
        </li>
        <li>
          <Link to="/legalhealthcheck">LegalHealthCheck</Link>
        </li>
        <li><Link to="/legalai">LegalAI</Link></li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li><Link to="/trainingvideos">TrainingVideos</Link></li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;