function Projects() {
    const projects = [
        { nama: 'Todo List App', tech: 'HTML, CSS, JS' },
        { nama: 'ATM Simulator', tech: 'HTML, CSS, JS' },
        { nama: 'Keranjang Belanja', tech: 'HTML, CSS, JS' },
    ];
    return (
        <div className="page">
            <h1>Projects</h1>
            {projects.map((p, i) => (
                <div key={i}>
                    <h3>{p.nama}</h3>
                    <p>{p.tech}</p>
                </div>
            ))}
        </div>
    );
}
export default Projects;