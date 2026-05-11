function Contact() {
    return (
        <div className="page">
            <h1>Contact</h1>
            <p style={{color: '#a8a8b3', marginBottom: '32px'}}>
                Tertarik untuk kolaborasi? Hubungi gue!
            </p>
            <div className="card">
                <p>📧 <a href="mailto:anggaradsat@gmail.com" style={{color: '#e94560'}}>anggaradsat@gmail.com</a></p>
            </div>
            <div className="card">
                <p>🐙 <a href="https://github.com/anggaradsatria" target="_blank" style={{color: '#e94560'}}>github.com/anggaradsatria</a></p>
            </div>
            <div className="card">
                <p>💼 <a href="https://linkedin.com/in/anggaradsatria" target="_blank" style={{color: '#e94560'}}>linkedin.com/in/anggaradsatria</a></p>
            </div>
        </div>
    );
}

export default Contact;