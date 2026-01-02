import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      backgroundColor: '#0f172a', // Le fond bleu nuit de votre site
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* Votre Logo */}
      <img 
        src="/Asset/favicon.png" 
        alt="Logo Maki Imagerie" 
        style={{ width: '80px', marginBottom: '20px' }} 
      />

      <h1 style={{ fontSize: '4rem', margin: '0', fontWeight: 'bold', color: '#3b82f6' }}>404</h1>
      
      <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>Oups ! Page introuvable.</h2>
      
      <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '30px' }}>
        Il semble que la page que vous cherchez n'existe pas ou a été déplacée.
      </p>

      {/* Le bouton style "Prendre rendez-vous" */}
      <Link 
        to="/" 
        style={{
          backgroundColor: '#2563EB', // Votre bleu électrique
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;