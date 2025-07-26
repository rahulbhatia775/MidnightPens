import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Express Yourself",
      description: "Write freely and share your stories, poems, and thoughts with the world.",
      icon: <path d="M12 20h9" />,
    },
    {
      title: "Personalized Dashboard",
      description: "Manage your drafts, published posts, and reader feedback all in one place.",
      icon: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </>
      ),
    },
    {
      title: "Community Interaction",
      description: "Read, comment, and collaborate with fellow bloggers and creatives.",
      icon: (
        <>
          <path d="M17 20h5v-1a4 4 0 00-4-4h-1" />
          <path d="M9 20H4v-1a4 4 0 014-4h1" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="7" r="4" />
        </>
      ),
    },
    {
      title: "Dark Mode Ready",
      description: "Write in comfort anytime with an elegant, eye-friendly dark interface.",
      icon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />,
    },
    {
      title: "Mobile Friendly",
      description: "Write, edit, and publish on the go from any device.",
      icon: (
        <>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </>
      ),
    },
    {
      title: "Safe & Secure",
      description: "Your content is protected and backed up, giving you peace of mind.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    },
  ];

  return (
    <section className="text-gray-700 body-font bg-white py-20" id="features">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">
            Why MidnightPens?
          </h1>
          <p className="lg:w-1/2 mx-auto text-base leading-relaxed text-gray-500">
            MidnightPens isn’t just a blog platform — it's your digital notebook, your public journal, and your voice to the world.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:w-1/2 xl:w-1/3">
              <div className="border border-gray-200 p-6 rounded-lg h-full">
                <div className="w-10 h-10 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
