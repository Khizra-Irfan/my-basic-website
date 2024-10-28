export default async function  About() {
    await new Promise((resolve) => {
        setTimeout(resolve,2000)
    });
    
    return (
        <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
        <main style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#2f4f4f', fontSize: '2.5rem' }}>~About Me~</h1>
            <br />
            <h3 style={{ color: '#4682b4', fontSize: '1.5rem' }}>Who I Am</h3>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                I'm a passionate beginner web developer currently learning how to build websites and web applications. 
                I'm excited about the world of coding and the endless possibilities it brings. This website is my personal 
                project to showcase my progress and the skills I'm developing.
            </p>
            <h3 style={{ color: '#4682b4', fontSize: '1.5rem' }}>My Journey</h3>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                I started learning web development because I love creating things that others can interact with on the web. 
                Right now, I'm focusing on mastering technologies like HTML, CSS, JavaScript, TypeScript, and frameworks like 
                Next.js. It's a rewarding process, and I’m always looking forward to learning something new every day.
            </p>
            <h3 style={{ color: '#4682b4', fontSize: '1.5rem' }}>My Goals</h3>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6' }}>
                My main goal is to continue improving my skills and to work on real-world projects. I’m excited to collaborate 
                with others, contribute to open-source projects, and eventually work in the tech industry as a professional 
                web developer.
            </p>
        </main>
    </div>
    );
} 