import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#f8f9fa",
      color: "#495057",
      padding: "50px 20px",
      borderTop: "1px solid #e9ecef",
      fontFamily: "sans-serif",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
    },
    footerColumn: {
      flex: 1,
      minWidth: "220px",
      margin: "10px",
    },
    footerLogo: {
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#0A2463",
      marginBottom: "15px",
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#343a40",
      marginBottom: "20px",
    },
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    li: {
      marginBottom: "10px",
    },
    link: {
      color: "#495057",
      textDecoration: "none",
    },
    socialLinks: {
      display: "flex",
      gap: "15px",
    },
    footerBottom: {
      textAlign: "center",
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "1px solid #e9ecef",
    },
    footerBottomP: {
      margin: 0,
      color: "#6c757d",
      fontSize: "0.9rem",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerColumn}>
          <h3 style={styles.footerLogo}>StaySpot</h3>
          <p>
            Your next stay, just a click away. The best stays across India,
            guaranteed.
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerBottomP}>
          &copy; 2025 StaySpot. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
