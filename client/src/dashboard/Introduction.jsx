import React from 'react';

function Introduction(props) {
    return (
        <div
            style={{
                backgroundImage: "url('https://wagner.edu/communications/files/2020/03/Pano2-1920.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundColor: '#1e3a8a', // fallback blue
            }}
            className="flex items-center justify-center"
        >
            <section className="bg-white/30 backdrop-blur-md py-12 px-6 md:px-12 rounded-xl shadow-lg max-w-3xl mx-auto mt-12">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
                        Welcome to <span className="text-blue-700">SkyLine Institute of Technology</span>
                    </h1>
                    <p className="text-xl text-gray-700 font-medium">
                        Excellence in Education, Research & Holistic Development
                    </p>
                </header>
                <article className="space-y-6 text-black leading-relaxed">
                    <p>
                        SkyLine Institute of Technology is a premier institution dedicated to providing quality education in engineering, technology, and management. Established with a vision to nurture innovation and excellence, we offer a student-centric environment that blends academic rigor with real-world application.
                    </p>
                    <p>
                        Our modern campus features state-of-the-art infrastructure and is supported by a team of well-qualified faculty. We are committed to holistic student development, encouraging participation in research, entrepreneurship, and co-curricular activities alongside a structured academic framework.
                    </p>
                    <p>
                        At SkyLine, we empower students to become not just job seekers, but future leaders and innovators in their fields. Whether it's academic excellence, practical exposure, or personality development, SkyLine continues to be a trusted name in technical education.
                    </p>
                </article>
            </section>
        </div>
    );
}

export default Introduction;