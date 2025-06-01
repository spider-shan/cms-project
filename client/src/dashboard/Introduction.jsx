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
                backgroundColor: '#1e3a8a',
            }}
            className="bg-fixed py-16 px-4"
        >
            <header className="mb-10 text-center">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">
                    Welcome to <span className="text-blue-700">SkyLine Institute of Technology</span>
                </h1>
                <p className="text-2xl text-gray-700 font-medium bg-white/70 backdrop-blur-md inline-block px-6 py-2 rounded-xl shadow">
                    Excellence in Education, Research & Holistic Development
                </p>
            </header>
            <main className="max-w-4xl mx-auto space-y-10">
                {/* Segment 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                        alt="SkyLine Institute Main Building"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        <span className="font-semibold text-blue-800">SkyLine Institute of Technology</span> stands as a beacon of academic excellence and innovation, shaping the future of aspiring engineers, technologists, and leaders. Established in 2002, our institution has consistently ranked among the top colleges in the region, renowned for its commitment to quality education, cutting-edge research, and holistic student development.
                    </p>
                </div>
                {/* Segment 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                        alt="Campus Environment"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        Our sprawling, eco-friendly campus is equipped with state-of-the-art laboratories, modern classrooms, and advanced research centers. The lush green surroundings and thoughtfully designed infrastructure create an inspiring environment for learning and personal growth. Students benefit from a blend of traditional values and modern teaching methodologies, ensuring a well-rounded educational experience.
                    </p>
                </div>
                {/* Segment 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
                        alt="Classroom and Learning"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        At SkyLine, we offer a diverse range of undergraduate and postgraduate programs in engineering, technology, and management. Our curriculum is regularly updated in consultation with industry experts to keep pace with the latest technological advancements and market trends. We emphasize experiential learning through hands-on projects, internships, and industry collaborations, preparing our students to excel in real-world scenarios.
                    </p>
                </div>
                {/* Segment 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80"
                        alt="Faculty and Mentorship"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        Our distinguished faculty comprises experienced educators, researchers, and industry professionals who are passionate about mentoring and guiding students. They foster a culture of curiosity, critical thinking, and innovation, encouraging students to push boundaries and explore new horizons.
                    </p>
                </div>
                {/* Segment 5 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                        alt="Campus Life"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        Beyond academics, SkyLine Institute is dedicated to the holistic development of its students. We offer a vibrant campus life with a wide array of clubs, societies, and sports facilities. From technical fests and cultural events to entrepreneurship cells and community outreach programs, students have ample opportunities to discover their passions, develop leadership skills, and make lifelong friendships.
                    </p>
                </div>
                {/* Segment 6 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                        alt="Placements and Careers"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        Our strong placement cell maintains robust ties with leading national and international companies, ensuring excellent career opportunities for our graduates. Alumni of SkyLine Institute have gone on to achieve remarkable success in diverse fields, making significant contributions to society and industry.
                    </p>
                </div>
                {/* Segment 7 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 rounded-2xl shadow-xl p-6 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                        alt="Join IT"
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                    <p>
                        Join us at SkyLine Institute of Technology and embark on a transformative journey of learning, innovation, and personal growth in the field of Information Technology. Together, let's build a brighter future in IT!
                    </p>
                </div>
            </main>
            <footer className="mt-10 text-center text-blue-900 font-semibold bg-white/70 backdrop-blur-md py-6 px-4 rounded-xl shadow-lg max-w-4xl mx-auto">
                <p>SkyLine Institute of Technology &mdash; Inspiring Excellence, Empowering Futures</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 text-base text-blue-800">
                    <span>📍 123 Knowledge Avenue, Tech City, India</span>
                    <span>📞 +91 12345 67890</span>
                    <span>🌐 <a href="https://cms-project-iota.vercel.app" className="underline hover:text-blue-600">cms-project-iota.vercel.app</a></span>
                </div>
            </footer>
        </div>
    );
}

export default Introduction;