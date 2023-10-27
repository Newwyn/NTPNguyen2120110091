import React from 'react';

export default function FooterMenu() {
  const styles = {
    column: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '20px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
    },
    heading: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '0 0 5px 0',
    },
    paragraph: {
      margin: '5px 0',
      color: '#FFFFFF',
    },
    footerMenu: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    link: {
      textDecoration: 'none',
      color: '#FFFFFF',
    },
  };

  return (
    <div style={styles.footerMenu}>
      <div style={styles.column}>
        <h3 style={styles.heading}>Về Newwyn Shop</h3>
        <p style={styles.paragraph}>
          Trang thương mại chính thức của Newwyn Gaming, <br />
          luôn tìm kiếm những sản phẩm tốt nhất
        </p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Thông tin liên hệ</h3>
        <p style={styles.paragraph}>90/05 Phước Bình.TPHCM,</p>
        <p style={styles.paragraph}>0000 9999 333</p>
        <p style={styles.paragraph}>newwyn@gmail.com</p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Hỗ trợ</h3>
        <a href="1b" style={styles.link}>Tài khoản ngân hàng</a>
        <a href="1b" style={styles.link}>Vận chuyển</a>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Chính sách</h3>
        <a href="1b" style={styles.link}>Chính sách bảo mật</a>
        <a href="1b" style={styles.link}>Chính sách đổi trả</a>
        <a href="1b" style={styles.link}>Quy định bảo hành</a>
      </div>
    </div>
  );
}
