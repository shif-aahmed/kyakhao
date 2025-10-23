import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx loaded');

try {
  const rootElement = document.getElementById('root');
  console.log('Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  console.log('React root created');
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error in main.jsx:', error);
  document.body.innerHTML = `
    <div style="padding: 2rem; text-align: center; background-color: #f0f0f0; min-height: 100vh;">
      <h1 style="color: #dc2626;">Application Error</h1>
      <p style="color: #666;">Failed to load the application.</p>
      <p style="color: #999; font-size: 0.9rem;">Error: ${error.message}</p>
    </div>
  `;
}
