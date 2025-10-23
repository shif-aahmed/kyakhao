import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-content-wrapper">
        {/* Left Column: Contact Form */}
        <div className="contact-form-column">
          <div className="form-card">
            <h2 className="form-title">Drop Us A Line</h2>
            <form className="contact-form">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email*" className="form-input" required />
              <input type="tel" placeholder="Phone" className="form-input" />
              <textarea placeholder="Tell Us About Project *" className="form-textarea" rows="6" required></textarea>
              <button type="submit" className="send-message-btn">
                SEND MESSAGE 
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="send-icon">
                  <path d="M13.1797 0.273438C13.6445 0 14.2461 0.382812 14.1367 0.929688L12.168 12.7422C12.1133 13.1797 11.6484 13.4258 11.2656 13.2617L7.875 11.8125L6.125 13.9453C5.74219 14.4102 4.97656 14.1641 4.97656 13.5078V11.293L11.5391 3.28125C11.6758 3.11719 11.457 2.92578 11.3203 3.0625L3.47266 9.98047L0.546875 8.75C0.0546875 8.55859 0 7.84766 0.492188 7.57422L13.1797 0.273438Z" fill="white"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Information */}
        <div className="contact-info-column">
          <h2 className="info-title">CONTACT US</h2>
          <p className="info-description">
            We look forward to hearing from you. Our team is eager to assist you with any
            inquiries or feedback you have.
          </p>

          <div className="contact-details">
            <div className="contact-details-grid">
            <div className="detail-item">
                <span className="detail-icon">
                  <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 0C20.918 0 24.2578 3.33984 24.2578 7.38281C24.2578 10.7227 19.3945 16.6992 17.5781 18.9258C17.168 19.3359 16.5234 19.3359 16.1133 18.9258C14.2969 16.6992 9.49219 10.7227 9.49219 7.38281C9.49219 3.33984 12.7734 0 16.875 0ZM16.875 9.84375C18.2227 9.84375 19.3359 8.78906 19.3359 7.38281C19.3359 6.03516 18.2227 4.92188 16.875 4.92188C15.4688 4.92188 14.4141 6.03516 14.4141 7.38281C14.4141 8.78906 15.4688 9.84375 16.875 9.84375ZM1.17188 12.6562L8.08594 9.90234C8.37891 10.7812 8.84766 11.6602 9.375 12.5977V26.25L1.23047 29.9414C0.644531 30.2344 0 29.7656 0 29.0625V14.4141C0 13.6523 0.46875 12.9492 1.17188 12.6562ZM16.875 21.0938C17.6953 21.0938 18.457 20.7422 18.9844 20.0977C20.1562 18.75 21.3867 17.2266 22.5 15.5859V30L11.25 26.25V15.5859C12.3047 17.2266 13.5352 18.75 14.707 20.0977C15.2344 20.7422 15.9961 21.0938 16.875 21.0938ZM32.4609 9.49219C33.0469 9.19922 33.75 9.66797 33.75 10.3711V25.0195C33.75 25.7812 33.2227 26.4844 32.5195 26.7773L24.375 30V13.125L32.4609 9.49219Z" fill="#FF6F00"/>
                  </svg>
                </span>
              <div className="detail-text">
                <p>22 KyaKhao St.,</p>
                <p>Karachi, Pakistan,</p>
                <p>12345</p>
              </div>
            </div>

            <div className="detail-item">
                <span className="detail-icon">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.0039 1.58203C29.6484 1.75781 30.1172 2.28516 30.1172 2.92969C30.1172 17.9883 17.9297 30.1172 2.92969 30.1172C2.22656 30.1172 1.69922 29.707 1.52344 29.0625L0.117188 22.9688C0 22.3242 0.292969 21.6211 0.9375 21.3281L7.5 18.5156C8.08594 18.2812 8.73047 18.457 9.14062 18.9258L12.0703 22.5C16.6406 20.332 20.332 16.582 22.4414 12.1289L18.8672 9.19922C18.3984 8.78906 18.2227 8.14453 18.457 7.55859L21.2695 0.996094C21.5625 0.351562 22.2656 0 22.9102 0.175781L29.0039 1.58203Z" fill="#FF6F00"/>
                  </svg>
                </span>
              <div className="detail-text">
                <p>+92-21-1234-5678</p>
                <p>+92-30-9876-5432</p>
              </div>
            </div>

            <div className="detail-item">
                <span className="detail-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5312 0C22.5586 0 29.0625 6.50391 29.0625 14.5312C29.0625 22.5586 22.5586 29.0625 14.5312 29.0625C6.50391 29.0625 0 22.5586 0 14.5312C0 6.50391 6.50391 0 14.5312 0ZM14.5312 26.25C20.9766 26.25 26.25 21.0352 26.25 14.5312C26.25 8.08594 20.9766 2.8125 14.5312 2.8125C8.02734 2.8125 2.8125 8.08594 2.8125 14.5312C2.8125 21.0352 8.02734 26.25 14.5312 26.25ZM18.1055 20.1562L13.125 16.5234C12.9492 16.4062 12.8906 16.1719 12.8906 15.9961V6.32812C12.8906 5.97656 13.1836 5.625 13.5938 5.625H15.4688C15.8203 5.625 16.1719 5.97656 16.1719 6.32812V14.6484L20.0391 17.5195C20.3906 17.7539 20.4492 18.1641 20.2148 18.5156L19.1016 19.9805C18.8672 20.332 18.457 20.3906 18.1055 20.1562Z" fill="#FF6F00"/>
                  </svg>
                </span>
              <div className="detail-text">
                <p>info@kyakhao.com</p>
                <p>support@kyakhao.com</p>
              </div>
            </div>

            <div className="detail-item">
                <span className="detail-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9453 9.66797C29.5898 10.1953 30 10.957 30 11.8359V27.1875C30 28.7695 28.7109 30 27.1875 30H2.8125C1.23047 30 0 28.7695 0 27.1875V11.8359C0 10.957 0.351562 10.1953 0.996094 9.66797C1.23047 9.49219 7.5 4.45312 8.90625 3.28125C10.2539 2.22656 12.4219 0 15 0C17.5195 0 19.7461 2.28516 21.0352 3.28125C22.3828 4.39453 28.6523 9.43359 28.9453 9.66797ZM27.1875 26.8359V12.0117C27.1875 11.8945 27.1289 11.7773 27.0117 11.7188C26.0742 10.957 20.625 6.62109 19.2773 5.50781C18.2227 4.6875 16.3477 2.8125 15 2.8125C13.5938 2.8125 11.7188 4.62891 10.6641 5.50781C9.31641 6.62109 3.86719 10.957 2.92969 11.7188C2.8125 11.7773 2.8125 11.8945 2.8125 12.0117V26.8359C2.8125 27.0703 2.92969 27.1875 3.16406 27.1875H26.8359C27.0117 27.1875 27.1875 27.0703 27.1875 26.8359ZM25.3125 15.8789C25.5469 16.1719 25.4883 16.6406 25.1953 16.875C23.4961 18.2227 21.6797 19.6289 21.0352 20.2148C19.6875 21.2695 17.5195 23.4375 15 23.4375C12.4219 23.4375 10.1953 21.2109 8.90625 20.2148C8.26172 19.6875 6.44531 18.2227 4.74609 16.875C4.45312 16.6406 4.39453 16.1719 4.62891 15.8789L5.56641 14.7656C5.80078 14.4727 6.21094 14.4141 6.5625 14.707C8.20312 16.0547 9.96094 17.4609 10.6641 17.9883C11.7188 18.8086 13.5938 20.625 15 20.625C16.3477 20.625 18.2227 18.8672 19.2773 17.9883C19.9805 17.4609 21.7383 16.0547 23.3789 14.707C23.7305 14.4141 24.1406 14.4727 24.375 14.7656L25.3125 15.8789Z" fill="#FF6F00"/>
                  </svg>
                </span>
              <div className="detail-text">
                <p>info@kyakhao.com</p>
                <p>support@kyakhao.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
