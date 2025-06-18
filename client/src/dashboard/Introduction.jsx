import React from 'react';

function Introduction(props) {
    const sections = [
        {
            img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
            text: "SkyLine Institute of Technology is a premier institution dedicated to providing quality education in engineering, technology, and management. Established with a vision to nurture innovation and excellence, we offer a student-centric environment that blends academic rigor with real-world application.",
        },
        {
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
            text: "Our modern campus features state-of-the-art infrastructure and is supported by a team of well-qualified faculty. We are committed to holistic student development, encouraging participation in research, entrepreneurship, and co-curricular activities alongside a structured academic framework.",
        },
        {
            img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
            text: "At SkyLine, we empower students to become not just job seekers, but future leaders and innovators in their fields. Whether it's academic excellence, practical exposure, or personality development, SkyLine continues to be a trusted name in technical education.",
        },
        {
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            text: "Our diverse student community enjoys a vibrant campus life with numerous clubs, cultural events, and sports activities. We believe in fostering a sense of belonging and teamwork, ensuring every student finds their passion and voice.",
        },
        {
            img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
            text: "SkyLine’s strong industry connections facilitate internships, placements, and guest lectures from leading professionals. Our alumni network spans the globe, opening doors to exciting career opportunities and lifelong mentorship.",
        },
        {
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
            text: "We are committed to sustainability and social responsibility, integrating green initiatives and community outreach programs into our curriculum. At SkyLine, education goes beyond the classroom to make a positive impact on society.",
        },
    ];

    return (
        <div
            style={{
                backgroundImage: "url('https://wagner.edu/communications/files/2020/03/Pano2-1920.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundColor: '#1e3a8a',
                backgroundAttachment: 'fixed',
            }}
            className="flex flex-col min-h-screen"
        >
            {/* Heading centered */}
            <header className="mb-8 mt-12 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-extrabold text-blue-900 mb-2 bg-white/70 inline-block px-6 py-2 rounded-xl shadow">
                    Welcome to <span className="text-blue-700">SkyLine Institute of Technology</span>
                </h1>
                <p className="text-xl text-gray-700 font-medium bg-white/60 inline-block px-4 py-1 rounded-lg mt-2">
                    Excellence in Education, Research & Holistic Development
                </p>
            </header>
            <section className="bg-white/30 backdrop-blur-md py-12 px-6 md:px-12 rounded-xl shadow-lg max-w-3xl mx-auto w-full">
                <div className="space-y-8">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row ${
                                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                            } items-center bg-white/80 rounded-lg shadow-md overflow-hidden`}
                        >
                            <img
                                src={section.img}
                                alt="Section visual"
                                className="w-full md:w-1/3 h-48 object-cover"
                            />
                            <div className="p-6 flex-1 text-black text-lg">
                                {section.text}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Add more space before footer */}
            <div className="flex-grow" />
            <div className="h-12" /> {/* Extra space between last box and footer */}
            {/* Minimal Details Footer */}
            <footer className="w-full py-4 bg-blue-900/80 text-white text-center text-sm">
                <span>Contact: info@skyline.edu | +1 (234) 567-8901</span>
            </footer>
        </div>
    );
}

export default Introduction;