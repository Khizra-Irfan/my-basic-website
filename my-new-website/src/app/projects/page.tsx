"use client"; // Make this a client component

export default function ProjectPage() {
    // Sample project data
    const projects = [
        {
            id: 1,
            name: "Countdown Timer",
            description: "A countdown timer built with Next.js and HTML/CSS.",
            imageUrl: "/images/countdowntimer.jpg", // Ensure this path is correct
            link: "http://localhost:3002/",
        },
    ];

    return (
        <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '40px' }}>
            <main style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.8' }}>
                <h1 style={{ color: '#2f4f4f', fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>
                    ~My Projects~
                </h1>
                <p style={{ color: '#333', fontSize: '1.25rem', textAlign: 'center', marginBottom: '40px' }}>
                    Check out my projects below:
                </p>

                {/* Map through the projects */}
                {projects.map(project => (
                    <div key={project.id} style={{ marginBottom: '40px', textAlign: 'center' }}>
                        <img
                            src={project.imageUrl}
                            alt={project.name}
                            style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px', margin: '0 auto', display: 'block', marginBottom: '15px' }} // Centered image
                        />
                        <br />
                        <h3 style={{ color: '#4682b4', fontSize: '1.8rem' }}>{project.name}</h3>
                        <p style={{ color: '#555', fontSize: '1rem' }}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <br />
                            <button style={{
                                backgroundColor: '#4682b4',
                                color: '#fff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}>
                                View Project
                            </button>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    );
}
