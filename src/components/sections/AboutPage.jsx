export default function AboutPage() {
  return (
    <div className=" abt-bg bg-size   text-black">

      {/* HERO SECTION */}
      <section className="  pt-20 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-5xl font-bold mb-6 text-center">
            SPRINGWORKS
          </h1>
          <p className="text-xl font-medium mb-4">
            Non-Negotiable Vision & Ecosystem Statement
          </p>
          <p className="text-lg">
            SpringWorks exists because access — not talent — is the real barrier to creative and brentrepreneurial success.
          </p>
        </div>
      </section>

      {/* WHY SPRINGWORKS EXISTS */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="bg-[#000000] w-[500px] text-[#FFFFFF] text-3xl font-semibold p-4 text-center">
            1. Why SpringWorks Exists
          </h2>
          <p>
            Most people who want to build something — a product, a brand, a craft, <br /> a service, or a business — fail not becausethey lack ability,  But because they lack:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Affordable space</li>
            <li>Shared equipment and materials</li>
            <li>Guidance and peer support</li>
            <li>Time to experiment without catastrophic risk</li>
          </ul>
          <p>
            SpringWorks removes these barriers systematically — not symbolically.
          </p>
          <p className="font-semibold">
            This is not a building that rents rooms.  
            It is an ecosystem that converts potential into output.
          </p>
        </div>
      </section>

      {/* WHAT SPRINGWORKS IS */}
      <section className="py-8 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-3xl font-semibold text-center">
            2. What SpringWorks Is
          </h2>
          <p>
            A membership-driven Creative Campus built around shared resources — not isolated tenancy.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Physical infrastructure (studios, workshops, hot desks, café)</li>
            <li>Practical resources (tools, equipment, materials)</li>
            <li>Structured membership tiers</li>
            <li>Learning & skill-building workshops</li>
            <li>Commercial pathways</li>
            <li>Digital extension</li>
          </ul>
          <p>
            Everything is designed to work together.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP MODEL */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            3. The Membership Model
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#f9df19] p-4">
              <h3 className="text-xl font-bold mb-3">Tier 1 — £50/month</h3>
              <p className="font-medium mb-2">Community Access</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Building access</li>
                <li>Workshop eligibility</li>
                <li>Limited shared resources</li>
                <li>Reduced cost materials</li>
                <li>Ecosystem entry</li>
              </ul>
            </div>

            <div className="bg-[#EF72AA] p-4">
              <h3 className="text-xl font-bold mb-3">Tier 2 — £120/month</h3>
              <p className="font-medium mb-2">Hot Desk + Resources</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Hot desk access</li>
                <li>Expanded facilities access</li>
                <li>Priority booking</li>
                <li>Tool & equipment access</li>
                <li>Discounted materials</li>
              </ul>
            </div>

            <div className="bg-[#f05a41] p-4">
              <h3 className="text-xl font-bold mb-3">Tier 3 — £240/month</h3>
              <p className="font-medium mb-2">Studio + Full Access</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Dedicated studio space</li>
                <li>Full workshop access</li>
                <li>Priority ecosystem access</li>
                <li>On-site prototyping & production</li>
                <li>Digital showcase integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES MODEL */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            4. The Resources Model
          </h2>
          <p>
            SpringWorks provides inputs — not just space.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Members list required materials</li>
            <li>SpringWorks sources at scale</li>
            <li>Stocked on-site</li>
            <li>Reduced cost access</li>
          </ul>
          <p className="font-medium">
            This lowers overhead, increases success rates, and creates loyalty.
          </p>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            5. Workshops & Skill-Building
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Candle making</li>
            <li>Product development</li>
            <li>Craft skills</li>
            <li>Content creation</li>
            <li>Business fundamentals</li>
            <li>Branding, pricing & selling</li>
          </ul>
        </div>
      </section>

      {/* CORPORATE ENGAGEMENT */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            6. Corporate Engagement
          </h2>
          <p>Annual Packages:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>£2,500</li>
            <li>£5,000</li>
            <li>£10,000</li>
          </ul>
          <p>
            Corporates are partners funding capability — not donors.
          </p>
        </div>
      </section>

      {/* DIGITAL LAYER */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            7. Digital Layer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Online galleries</li>
            <li>Digital walkthroughs</li>
            <li>Creator showcases</li>
          </ul>
        </div>
      </section>

      {/* REVENUE STREAMS */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] p-4 w-[500px] text-[#FFFFFF] text-center">
            8. Revenue Streams (By Design, Not Hope)
          </h2>
          <p>SpringWorks generates revenue from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Memberships (recurring)</li>
            <li>Workshops and classes</li>
            <li>Corporate packages</li>
            <li>Café operations</li>
            <li>Materials and supplies</li>
            <li>Digital galleries</li>
            <li>Events and space usage</li>
          </ul>
          <p>No single stream carries the entire business. That is intentional.</p>
        </div>
      </section>

      {/* HOW IT IS BUILT */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-center">
            9. How It Is Built (Reality-First)
          </h2>
          <p>SpringWorks is built in phases, not fantasies.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Start smaller than the vision</li>
            <li>Prove the model</li>
            <li>Reinvest</li>
            <li>Expand deliberately</li>
          </ul>
          <p>The ecosystem works at 25%, 50%, or 100% scale.</p>
        </div>
      </section>

      {/* WHAT SPRINGWORKS IS NOT */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-center">
            10. What SpringWorks Is NOT
          </h2>
          <p>SpringWorks is not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A landlord business</li>
            <li>A generic co-working space</li>
            <li>A charity</li>
            <li>A vanity project</li>
            <li>A single-revenue model</li>
          </ul>
          <p>It is a platform for making and building, economically and socially.</p>
        </div>
      </section>

      {/* THE NON-NEGOTIABLE LINE */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-center">
            11. The Non-Negotiable Line
          </h2>
          <p>
            SpringWorks will never be reduced to: “Just studios for rent.”<br />
            Space without resources is failure disguised as simplicity.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Membership + resources + community + production is the model.</li>
          </ul>
          <p>It is a platform for making and building, economically and socially.</p>
        </div>
      </section>

      {/* MUSIC & MEDIA STUDIOS */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold bg-[#000000] w-[500px] text-[#FFFFFF] p-4 text-center">
            12. Music & Media Studios
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {["Recording Studio", "Rehearsal Studio", "Vocal Booth", "DJ Studio"].map((studio, i) => (
              <div
                key={i}
                className={`p-4 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[6px_6px_0_#000] cursor-pointer focus:outline-none focus:ring-2 focus:ring-black ${
                  i === 0
                    ? "bg-[#f9df19]"
                    : i === 1
                    ? "bg-[#EF72AA]"
                    : i === 2
                    ? "bg-[#FFA800]"
                    : "bg-[#023020] text-white"
                }`}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${studio}`}
              >
                <h3 className="font-semibold">{studio}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL NON-NEGOTIABLE */}
      <section className="pt-20  pb-[27rem] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">The Non-Negotiable Line</h2>
          <p className="text-xl font-medium">
            Membership + Resources + Community + Production
          </p>
          <p>
            Space without resources is failure disguised as simplicity.
          </p>
        </div>
      </section>

    </div>
  );
}