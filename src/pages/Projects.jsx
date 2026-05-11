import { useState, useEffect } from 'react';

function Projects() {
    const projects = [
        { id: 1, nama: 'Todo List App', tech: 'HTML, CSS, JavaScript', desc: 'App manajemen tugas dengan fitur tambah dan hapus tugas.' },
        { id: 2, nama: 'ATM Simulator', tech: 'HTML, CSS, JavaScript', desc: 'Simulasi ATM dengan validasi saldo dan transaksi.' },
        { id: 3, nama: 'Keranjang Belanja', tech: 'HTML, CSS, JavaScript', desc: 'App belanja dengan kalkulasi total otomatis.' },
        { id: 4, nama: 'Devfolio', tech: 'React, Node.js, MongoDB', desc: 'Portofolio website pribadi.' },
    ];

    return (
        <div className="page">
            <h1>Projects</h1>
            {projects.map((p) => (
                <div key={p.id} className="card">
                    <h3>{p.nama}</h3>
                    <p>{p.tech}</p>
                    <p>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;