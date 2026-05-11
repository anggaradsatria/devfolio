function About() {
    const skills = [
        'HTML & CSS',
        'JavaScript',
        'React',
        'Node.js & Express',
        'MongoDB',
        'Git & GitHub',
    ];

    return (
        <div className="page">
            <h1>About Me</h1>
            <p style={{color: '#a8a8b3', marginBottom: '32px', lineHeight: '1.8'}}>
                Gue Anggara, berbasis di Bekasi. Lagi serius belajar web development 
                dengan target fullstack development. Mulai dari nol dan terus gas setiap hari.
            </p>
            <h2 style={{color: '#a8a8b3', marginBottom: '16px'}}>Skills</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                {skills.map((skill, i) => (
                    <span key={i} className="card" style={{padding: '8px 16px'}}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default About;