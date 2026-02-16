export default function EventPage() {
  return (
    <div className="w-full bg-white px-0 text-black font-mono overflow-hidden">


      {/* MAIN CONTENT */}
      <section className="relative pt-6">

        <div className="max-w-6xl mx-auto  text-center">

          {/* Title */}
          <h1 className="inline-block bg-black text-white px-8 py-3 text-3xl md:text-4xl font-bold">
            Events at SpringWorks
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            SpringWorks hosts a rolling calendar of events designed to support creativity,
            entrepreneurship, collaboration and large-scale community engagement.
          </p>

          {/* Divider */}
          {/* <div className="w-full h-px bg-gray-400 mt-6" /> */}
        </div>

        {/* EVENT GRID */}
        <div className="max-w-8xl h-[480px]  bgka bg-siz bg-repeat  ">

<div className="mx-auto mt-12 p-8   grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16" >
          {/* LEFT COLUMN */}
          <div className="space-y-6">

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Workshops & Skill Sessions
            </div>

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Creative Showcases
            </div>

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Community Events
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Business Seminars & Guest Speakers
            </div>

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Corporate Team Experiences
            </div>

            <div className="bg-white shadow px-6 py-3 font-semibold">
              Large-Scale Seated Events (300+ capacity)
            </div>

          </div>

          {/* CENTER BIG */}
          <div className="md:col-span-2 flex justify-center">
            <div className="bg-white shadow px-10 py-3 font-semibold">
              Launch Events & Seasonal Programmes
            </div>
          </div>
</div>

        </div>


        
      </section>
    </div>
  );
}
