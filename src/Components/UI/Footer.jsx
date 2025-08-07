import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      color: '#495057',
      padding: '50px 20px',
      borderTop: '1px solid #e9ecef',
      fontFamily: 'sans-serif',
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
    },
    footerColumn: {
      flex: 1,
      minWidth: '220px',
      margin: '10px',
    },
    footerLogo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0A2463',
      marginBottom: '15px',
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#343a40',
      marginBottom: '20px',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      marginBottom: '10px',
    },
    link: {
      color: '#495057',
      textDecoration: 'none',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
    },
    footerBottom: {
      textAlign: 'center',
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid #e9ecef',
    },
    footerBottomP: {
      margin: 0,
      color: '#6c757d',
      fontSize: '0.9rem',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerColumn}>
          <h3 style={styles.footerLogo}>StaySpot</h3>
          <p>
            Your next stay, just a click away. The best stays across India, guaranteed.
          </p>
        </div>

        <div style={styles.footerColumn}>
          <h4 style={styles.h4}>Quick Links</h4>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="/" style={styles.link}>Home</a></li>
            <li style={styles.li}><a href="/destinations" style={styles.link}>Destinations</a></li>
            <li style={styles.li}><a href="/hotels" style={styles.link}>Hotels</a></li>
            <li style={styles.li}><a href="/about" style={styles.link}>About Us</a></li>
          </ul>
        </div>

        <div style={styles.footerColumn}>
          <h4 style={styles.h4}>Support</h4>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
            <li style={styles.li}><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
            <li style={styles.li}><a href="/contact" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        <div style={styles.footerColumn}>
          <h4 style={styles.h4}>Follow Us</h4>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          </div>
        </div>
      </div>

  
      <div style={styles.footerBottom}>
        <p style={styles.footerBottomP}>&copy; 2025 StaySpot. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
