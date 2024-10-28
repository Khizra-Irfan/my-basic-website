export default function Home() {
  return (
    <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <main style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.8', textAlign: 'center' }}>
        {/* Main Heading with split layout */}
        <h1 style={{ color: '#2f4f4f', fontSize: '2.5rem', marginBottom: '20px' }}>
          ~Welcome to My Website~
        </h1>

        {/* Centered Flipping Picture */}
        <div className="group perspective w-96 h-96 mb-10" style={{ margin: '0 auto' }}>
          <div className="relative preserve-3d w-full h-full duration-1000 group-hover:rotate-y-180">
            {/* Front side of the image */}
            <div className="absolute backface-hidden w-full h-full">
              <img
                src="/images/profile-picture.jpg" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Back side of the image */}
            <div className="absolute backface-hidden rotate-y-180 w-full h-full bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg p-6">
              <p className="text-xl font-semibold">
                Hi, I'm a passionate web developer focused on creating impactful web experiences!
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <button style={{
          backgroundColor: '#4682b4',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          Learn More
        </button>
      </main>
    </div>
  );
}
