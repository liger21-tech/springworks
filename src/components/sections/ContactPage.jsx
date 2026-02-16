export default function ContactPage() {
  return (
    <div className="bg-[#DCDCDC] text-black font-mono ">

      {/* Header Section */}
      <section className="py-10 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="  bg-[#000000] p-2 w-[500px] text-[#FFFFFF] text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            For partnerships, membership enquiries, corporate engagement or general information, please contact the relevant team member below.
          </p>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-8 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Campus Address */}
          <div>
            <h2 className="  bg-[#000000] p-2 w-[500px] text-[#FFFFFF] text-xl font-semibold mb-4">
              SpringWorks Entrepreneurial Campus
            </h2>
            <p className="leading-relaxed">
              246 Flemington Street<br />
              Springburn<br />
              Glasgow<br />
              G21 4BY
            </p>
          </div>

          {/* Registered Office */}
          <div>
            <h2 className="  bg-[#000000] p-2 w-[500px] text-[#FFFFFF] text-xl font-semibold mb-4">
              Registered Office
            </h2>
            <p className="leading-relaxed">
              10 Alloway Quadrant<br />
              Kirkintilloch<br />
              G66 2PF
            </p>

            <p className="mt-6 font-medium">
              Company Number: 16223773
            </p>
          </div>

        </div>
      </section>

      {/* Directors Section */}
      <section className="py-8 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 ">

          {/* David Scotland */}
          <div className="bg-[#00996b] p-8">
            <h3 className="text-xl font-bold mb-2">
              David Scotland
            </h3>
            <p className="font-medium mb-4">
              Director & Founder
            </p>
            <p className="mb-2">
              T: +44 (0)7507 808 779
            </p>
            <p>
              E: david@springworks.studio
            </p>
          </div>

          {/* Frank McGowan */}
          <div className="bg-[#f05a41] p-8">
            <h3 className="text-xl font-bold mb-2">
              Frank C. McGowan
            </h3>
            <p className="font-medium mb-4">
              Director<br />
              Director of Creative & Community Development
            </p>
            <p className="mb-2">
              T: +44 (0)7950 919 487
            </p>
            <p>
              E: frank@springworks.studio
            </p>
          </div>

        </div>
    <img src="./images/07.png" alt="Decorative blocks" className="w-full block " /> 

      </section>
      

      {/* Website Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">
            Website
          </h2>
          <p className="text-lg font-medium">
            www.springworks.studio
          </p>
        </div>
      </section>
    {/* <img src="./images/06.png" alt="Decorative blocks" className="w-full block " />  */}

    </div>
  );
}
