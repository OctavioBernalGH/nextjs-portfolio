import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '600px',
      margin: '0 auto',
      color: '#333',
    }}
  >
    <h1 style={{ color: '#4A90E2', marginBottom: '16px' }}>
      Nuevo mensaje de {name}
    </h1>
    <p style={{ fontSize: '16px', margin: '8px 0' }}>
      <strong>Email:</strong> {email}
    </p>
    <p style={{ fontSize: '16px', margin: '8px 0' }}>
      <strong>Asunto:</strong> {subject}
    </p>
    <p style={{ fontSize: '16px', margin: '8px 0' }}>
      <strong>Mensaje:</strong>
    </p>
    <p style={{ fontSize: '16px', lineHeight: '1.5', margin: '8px 0' }}>
      {message}
    </p>
  </div>
);

export default EmailTemplate;
