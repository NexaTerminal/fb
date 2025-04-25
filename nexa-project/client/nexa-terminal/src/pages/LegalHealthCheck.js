import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles.css';

function LegalHealthCheck() {  
  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
        <div className="content">
          <h1>Legal Health Check</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}    
export default LegalHealthCheck;