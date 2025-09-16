// import CarInsuranceBanner from '../assets/img/car_insurance_banner.jpg';
import CarInsuranceBanner from '../assets/img/car_insurance_banner_reduced.webp';
export const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .pulse-animation {
    animation: pulse 2s infinite ease-in-out;
  }

  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }

  .hero-section {
    background-image: url('https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Professional+Home+Services');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  
  .auto-insurance-hero {
    background-image: url('${CarInsuranceBanner}');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
  }
  .auto-insurance-hero::before {
    content: "";
    position: absolute !important;
    z-index: -1 !important;
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    background-color: #00042e;
    opacity: .6;
  }
`;