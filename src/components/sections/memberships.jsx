import { useState } from "react";

const membershipLevels = [
  {
    title: "£50 Community Membership",
    intro:
      "Access to facilities, programmes, and professional business guidance within the SpringWorks network.",
    highlights: [
      "Business setup & strategic guidance",
      "Branding, marketing & e-commerce support",
      "Material & manufacturing sourcing at origin",
    ],
    fullContent: `
Additional £50 Membership Support 

In addition to access to facilities and programmes, your membership includes access to business guidance and practical support from experienced professionals within the SpringWorks network.

Members can access advice and support across areas such as:
	•	Business setup and structure
	•	Banking and finance guidance
	•	Branding, packaging, and marketing
	•	E-commerce, online selling, and digital strategy
	•	Pricing, positioning, and route-to-market planning

This support is designed to help members shape, refine, and build viable businesses, whether you are offering a service or creating a physical product.

Where members are developing physical products, SpringWorks will also support material and supply sourcing. We work to identify manufacturers and suppliers at source — including overseas production where appropriate — to help members access materials and products at significantly lower costs than typical UK retail or trade prices.

This sourcing support forms part of the SpringWorks ecosystem and is aimed at helping members reduce costs, improve margins, and bring products to market more effectively.`,
  },
  {
    title: "£120 Hot Desk Membership",
    intro:
      "Professional workspace with full ecosystem access and structured business support.",
    highlights: [
      "Shared workspace + business address",
      "Meeting rooms & professional facilities",
      "Full ecosystem access + £50 benefits included",
    ],
    fullContent: `
£120 Hot Desk Membership 

The £120 Hot Desk Membership is designed for founders, freelancers, and early-stage businesses who want a professional base, daily structure, and access to a complete entrepreneurial ecosystem.

This membership includes:
	•	Access to a shared hot desk workspace
	•	Superfast broadband
	•	Electricity and utilities included
	•	Use of a professional business address
	•	Phone and meeting facilities (subject to availability)

Members also have access to high-quality meeting rooms and boardrooms, fully equipped for professional use — including presentations, team meetings, client discussions, and collaborative sessions. These are not basic rooms, but properly designed, business-ready spaces suitable for serious work.

Hot Desk members have full access to shared facilities, including:
	•	Toilets and showers
	•	Secure locker storage
	•	Café and communal areas
	•	Founders’ Lounge for networking, collaboration, and informal meetings
	•	A professional environment designed to support focus, productivity, and growth

In addition, members gain access to all SpringWorks shared resources, including:
	•	On-site galleries and exhibition spaces
	•	Retail and showcase opportunities through the SpringWorks shop
	•	Digital exposure via online and 3D galleries
	•	Participation in SpringWorks events, talks, launches, showcases, and annual celebrations such as Christmas parties and large-scale community or corporate events

Beyond workspace, Hot Desk members also receive all the benefits of the £50 membership, including access to SpringWorks’ wider support network.

This includes:
	•	Business guidance from experienced professionals across banking, finance, marketing, branding, packaging, e-commerce, and growth strategy
	•	Access to workshops, programmes, seminars, and talks (priced separately at low, sustainable rates)
	•	Practical support to help shape, structure, and develop your business

For members creating physical products, SpringWorks also provides material and supply-chain support. We help source materials and manufacturing at origin — including overseas production where appropriate — enabling members to access better pricing and reduced costs compared to standard UK routes.

The £120 Hot Desk Membership is ideal for those who want daily professional workspace combined with serious support, visibility, and opportunity, without committing to a private studio.    `,
  },
  {
    title: "£240 Private Studio Membership",
    intro:
      "Dedicated private studio with priority access, visibility, and deep ecosystem integration.",
    highlights: [
      "Private studio with secure access",
      "Priority seminars & corporate partnerships",
      "Enhanced visibility + production support",
    ],
    fullContent: `
£240 Private Studio Membership 

The £240 Studio Membership is designed for founders, creatives, and small teams who need their own dedicated space while being fully embedded within the SpringWorks ecosystem.

This membership includes:
	•	A private, dedicated studio space
	•	Secure access and the ability to personalise your working environment
	•	Superfast broadband and utilities included
	•	Use of SpringWorks as a professional business address
	•	Priority access to shared facilities and resources

Studio members also receive full access to everything included in the £50 and £120 memberships, including business support, workshops, events, shared facilities, and community spaces.

What makes the Studio Membership distinct is depth of access and influence.

Corporate & Seminar Access

SpringWorks delivers a programme of corporate-funded seminars, talks, and learning sessions focused on real-world business growth. These cover areas such as:
	•	Finance and funding
	•	Marketing and branding
	•	Sales, packaging, and distribution
	•	E-commerce and digital growth
	•	Scaling, operations, and leadership

As a Studio member:
	•	You receive priority access to these seminars
	•	You can request specific topics relevant to your business
	•	You benefit directly from corporate partnerships that help subsidise learning and development across the community

These corporate collaborations are designed not just to support SpringWorks, but to directly invest in the people working within it.

Enhanced Visibility & Opportunity

Studio members are positioned at the centre of the SpringWorks story. This includes:
	•	Greater visibility through on-site galleries and showcases
	•	Opportunities to feature in digital content, campaigns, and case studies
	•	Access to SpringWorks’ creative production facilities (subject to booking and usage fees)
	•	Priority consideration for collaborations, pilots, and funded opportunities

Business & Production Support

Studio members receive ongoing access to:
	•	Professional advice from experienced business leaders
	•	Support in shaping, refining, and scaling products or services
	•	Assistance sourcing materials, manufacturing, or production at origin where appropriate — helping reduce costs and improve margins

Where relevant, SpringWorks also supports:
	•	Product development
	•	Packaging and presentation
	•	Routes to market and distribution

Community at Scale

Studio members benefit from being part of a space that regularly hosts:
	•	Large-scale events and talks
	•	Corporate experiences and activations
	•	Networking evenings, launches, and exhibitions
	•	Annual celebrations and flagship gatherings

This is a membership for people who want stability, space, support, and serious opportunity — not just somewhere to work, but somewhere to build.    `,
  },
];

export default function Memberships() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  const openApplicationForm = (plan) => {
    setSelectedPlan(plan);
    setOpenForm(true);
    setTimeout(() => {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="w-full bg-[#DCDCDC] min-h-screen "> 
    <img src="./images/0001111.png" alt="Decorative blocks" className="w-full block " /> 

    <div className="max-w-7xl pt-24 mx-auto px-6 md:px-[10vw] text-[#000000] -mt-[23rem] "> 
      {/* INTRO */} 

      <h2 className=" bg-[#000000] p-4 text-[#FFFFFF] text-4xl md:text-6xl font-extrabold text-center">
         More Than a Desk. 
         <br className="hidden md:block" />
          A Creative Ecosystem. </h2>
           <p className="font-mono text-center mt-8 max-w-3xl mx-auto opacity-80"> Your SpringWorks membership gives you access to everything SpringWorks offers. Individual workshops, seminars, studios, and programmes are priced separately at a low, sustainable cost so we can pay the people running them and keep the space alive. </p>

      <h3 className=" bg-[#000000] p-4 text-[#FFFFFF] text-4xl font-extrabold text-center mt-28">
        Choose Your Membership
      </h3>

      <div className="mt-16 grid md:grid-cols-3">
        {membershipLevels.map((item, index) => (
          <div
            key={index}
            className={`p-8 hover:-translate-y-2 transition ${
  index === 0
    ? "bg-[#FEFF01]"
    : index === 1
    ? "bg-[#FF76F3]"
    : "bg-[#FFA800]"
}`}
          >
            <h4 className="font-mono font-bold text-xl">
              {item.title}
            </h4>

            <p className="font-mono text-sm mt-3 opacity-80">
              {item.intro}
            </p>

            {/* 3 Highlight Points */}
            <ul className="mt-6 font-mono text-sm space-y-2">
              {item.highlights.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <button
              onClick={() => setActiveModal(item)}
              className="mt-4 text-sm bg-[#000000] text-[#ffffff] p-2  "
            >
              View Full Details
            </button>

            <button
              onClick={() => openApplicationForm(item.title)}
              className="mt-8 w-full font-mono border-2 border-black rounded-full py-3 text-sm hover:bg-black hover:text-white transition"
            >
              Apply →
            </button>
          </div>
        ))}
      </div>

      {/* FORM — UNCHANGED */}
      {openForm && (
        <div
          id="form"
          className={`my-10 max-w-4xl mx-auto  p-10  `}
        >
          <h3 className="text-4xl font-extrabold text-center mb-2 bg-black text-white p-2 ">
            Membership Application
          </h3>

          {selectedPlan && (
            <p className="text-center font-mono mb-8 opacity-80">
              Applying for: <strong>{selectedPlan}</strong>
            </p>
          )}

         <form className="space-y-10 bg-form bg-size border-2 border-black px-[150px] py-10   font-mono text-sm">

  {/* 1. PERSONAL DETAILS */}
  <div>
    <h4 className="font-bold text-lg mb-4">1. Personal Details</h4>
    <div className="space-y-4">
      <Input label="Full Name" />
      <Input label="Address" />
      <Input label="Email Address" />
      <Input label="Phone Number" />

      <div>
        <label className="block mb-2">Preferred Method of Contact</label>
        <div className="flex flex-wrap gap-4">
          <Checkbox label="Email" />
          <Checkbox label="Phone" />
          <Checkbox label="Either" />
        </div>
      </div>
    </div>
  </div>

  {/* 2. MEMBERSHIP SELECTION */}
  <div>
    <h4 className="font-bold text-lg mb-4">2. Membership Selection</h4>
    <div className="space-y-2">
      <Radio label="£50 Community Membership" name="membership" />
      <Radio label="£120 Hot Desk Membership" name="membership" />
      <Radio label="£240 Studio Membership" name="membership" />
    </div>
  </div>

  {/* 3. BUSINESS / PROJECT INFORMATION */}
  <div>
    <h4 className="font-bold text-lg mb-4">3. Business / Project Information</h4>
    <div className="space-y-4">
      <Input label="Business Name (if applicable)" />
      <Textarea label="Short description of what you do or want to create" />

      <div>
        <label className="block mb-2">Current Stage</label>
        <div className="flex flex-wrap gap-4">
          <Radio label="Idea" name="stage" />
          <Radio label="Early Stage" name="stage" />
          <Radio label="Trading" name="stage" />
          <Radio label="Scaling" name="stage" />
        </div>
      </div>
    </div>
  </div>

  {/* 4. SPACE & FACILITIES REQUIRED */}
  <div>
    <h4 className="font-bold text-lg mb-4">4. Space & Facilities Required</h4>
    <div className="grid md:grid-cols-2 gap-2">
      <Checkbox label="Desk / Workspace" />
      <Checkbox label="Private Studio" />
      <Checkbox label="Meeting Rooms / Boardroom" />
      <Checkbox label="Founders Lounge" />
      <Checkbox label="Gallery / Exhibition Space" />
      <Checkbox label="On-site Shop / Retail Display" />
      <Checkbox label="Online / 3D Gallery" />
      <Checkbox label="Content Creation / Filming" />
      <Checkbox label="Podcast Studio" />
      <Checkbox label="Photography Studio" />
      <Checkbox label="Music Facilities (Recording / Rehearsal / DJ)" />
      <Checkbox label="Workshops & Programmes" />
    </div>
  </div>

  {/* 5. WORKSHOPS, LEARNING & SUPPORT */}
  <div>
    <h4 className="font-bold text-lg mb-4">5. Workshops, Learning & Support</h4>
    <Textarea label="Areas of interest (business, marketing, finance, content, music, making, etc.)" />
    <Textarea label="What kind of workshops or seminars would you like access to?" />
  </div>

  {/* 6. MATERIALS & PRODUCT SUPPORT */}
  <div>
    <h4 className="font-bold text-lg mb-4">6. Materials & Product Support</h4>

    <div className="mb-4">
      <label className="block mb-2">Are you creating a physical product or service?</label>
      <div className="flex gap-4">
        <Radio label="Product" name="productType" />
        <Radio label="Service" name="productType" />
        <Radio label="Both" name="productType" />
      </div>
    </div>

    <Input label="If product, what materials do you expect to use?" />

    <div>
      <label className="block mb-2">Do you want support sourcing materials or products?</label>
      <div className="flex gap-4">
        <Checkbox label="UK Sourcing" />
        <Checkbox label="Overseas Manufacturing" />
        <Checkbox label="Not Sure Yet" />
      </div>
    </div>
  </div>

  {/* 7. BUSINESS SUPPORT & MENTORING */}
  <div>
    <h4 className="font-bold text-lg mb-4">7. Business Support & Mentoring</h4>
    <div className="grid md:grid-cols-2 gap-2">
      <Checkbox label="Banking & Finance" />
      <Checkbox label="Marketing" />
      <Checkbox label="Branding" />
      <Checkbox label="Packaging" />
      <Checkbox label="E-commerce" />
      <Checkbox label="Operations" />
      <Checkbox label="General Advice" />
    </div>
  </div>

  {/* 8. ADDITIONAL INFORMATION */}
  <div>
    <h4 className="font-bold text-lg mb-4">8. Additional Information</h4>
    <Textarea label="Is there anything else you’d like us to know before you join SpringWorks or anything specific you're hoping to achieve here?" rows="4" />
  </div>

  <button
    type="submit"
    className="mt-8 border-2 border-black rounded-full px-12 py-3 text-sm hover:bg-black hover:text-white transition"
  >
    Submit Application
  </button>

</form>

        </div>
      )}
    </div>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center  z-50">
          <div className="bg-[#FF76F3] border-2 border-black rounded-2xl p-8  max-w-3xl w-full max-h-[80vh] overflow-y-auto no-scrollbar shadow-[8px_8px_0_#0F0F0F]">
            <h3 className="text-2xl font-bold mb-4">{activeModal.title}</h3>
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {activeModal.fullContent}
            </pre>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 border-2 border-black rounded-full px-8 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              Close
            </button>
            
          </div>
        </div>
      )}

      <img src="./images/07.png" alt="" className="w-full block " />
    </section>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input className="w-full border-2 border-black bg-transparent p-3 rounded-md" />
    </div>
  );
}

function Select({ label, children }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <select className="w-full border-2 border-black bg-transparent p-3 rounded-md">
        {children}
      </select>
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <textarea rows="3" className="w-full border-2 border-black bg-transparent p-3 rounded-md" />
    </div>
  );
}
function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="w-4 h-4 border-2 border-black bg-transparent accent-black"
      />
      <span>{label}</span>
    </label>
  );
}

function Radio({ label, name }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="w-4 h-4 border-2 border-black bg-transparent accent-black"
      />
      <span>{label}</span>
    </label>
  );
}
