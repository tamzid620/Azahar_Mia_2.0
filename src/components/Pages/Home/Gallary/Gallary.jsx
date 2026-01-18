
const Gallary = () => {

  return (
      <div>
        {/* About section  */}
        <section id="about" className="py-16  bg-gradient-to-l from-primary_color to-secondary_color text-white">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 uppercase text-[#0ea5e9]">About Our Family Tree</h2>
            <p className="text-gray-100 font-montserrat">
              This website helps you visualize generations, preserve memories,
              and share stories with loved ones.
            </p>
          </div>
        </section>
        {/* Interactive Tree section */}
        <section className="pb-16 px-0 md:px-5 lg:px-5 bg-gradient-to-l from-primary_color to-secondary_color">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Interactive Tree",
                description:
                  "Navigate generations with a dynamic family tree view.",
              },
              {
                title: "Photo Gallery",
                description: "Preserve and share family memories in one place.",
              },
              {
                title: "Timeline",
                description:
                  "Track important family events across generations.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gradient-to-b from-[#64748b]  hover:from-transparent hover:to-[#64748b] text-white font-semibold shadow-lg rounded-lg hover:shadow-xl transition duration-300 "
              >
                <h3 className="text-xl font-semibold mb-2 uppercase">{feature.title}</h3>
                <p className="text-para_color text-sm font-montserrat">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default Gallary;
