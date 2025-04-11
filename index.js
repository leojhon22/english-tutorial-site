import { useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Speak Fluent English Online</h1>
        <p>Connect with certified, friendly tutors. Anytime. Anywhere.</p>
        <button>Book a Free Trial</button>
      </header>

      <section style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        {[1, 2, 3].map((tutor) => (
          <div key={tutor} style={{ flex: 1, border: '1px solid #ddd', borderRadius: '10px', padding: '1rem' }}>
            <img src={`/tutor${tutor}.jpg`} alt={`Tutor ${tutor}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>Tutor {tutor}</h3>
            <p>Experienced English tutor with a passion for teaching conversational English.</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Student Testimonials</h2>
        <p><i>"This platform helped me speak confidently at work! Highly recommended."</i></p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact Us</h2>
        <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <textarea placeholder="Your Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br />
        <button>Send Message</button>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: '#666' }}>
        © {new Date().getFullYear()} Your English Tutorial Business. All rights reserved.
      </footer>
    </div>
  );
}