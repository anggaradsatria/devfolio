function Home() {
    return (
        <div className="page" style={{textAlign: 'center', paddingTop: '80px'}}>
            <h1>Halo, Gue Anggara ✌🏼</h1>
            <p style={{fontSize: '20px', margin: '16px 0', color: '#a8a8b3'}}>
                Junior Web Developer — React, Node.js, MongoDB
            </p>
            <p style={{color: '#a8a8b3', marginBottom: '40px'}}>
                Berbasis di Bekasi, Indonesia.
            </p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
                <a href="/projects" style={{background: '#e94560', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}>
                    Lihat Projects
                </a>
                <a href="/contact" style={{border: '2px solid white', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}>
                    Hubungi Saya
                </a>
            </div>
        </div>
    );
}

export default Home;