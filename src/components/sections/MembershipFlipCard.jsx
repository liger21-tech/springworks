import { useState, useEffect } from "react";

export default function MembershipFlipCard({ open }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (open) setFlipped(true);
  }, [open]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl perspective">

        <div
          className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >

          {/* FRONT SIDE */}
          <div className=" w-full backface-hidden rounded-2xl overflow-hidden border-2 border-[#0F0F0F] bg-transparent backdrop-blur-xl shadow-[6px_6px_0_#0F0F0F]">
            <div className="relative">
              <img
                src="./images/bg3.jpg"
                alt="Membership"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-[#FF76F3]/40 backdrop-blur-md flex flex-col items-center justify-center text-[#0F0F0F]">
                <h2 className="text-4xl font-extrabold mb-4">
                  Join SpringWorks
                </h2>

                <p className="mb-6 text-center max-w-md font-mono">
                  A creative campus for founders, makers & freelancers
                </p>

                <button
                  onClick={() => setFlipped(true)}
                  className="border-2 border-[#0F0F0F] px-10 py-3 rounded-full hover:bg-[#0F0F0F] hover:text-white transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute w-full backface-hidden rotate-y-180 border-2 border-[#0F0F0F] rounded-2xl bg-transparent backdrop-blur-xl shadow-[6px_6px_0_#0F0F0F] p-10">

            <button
              onClick={() => setFlipped(false)}
              className="mb-6 text-sm underline font-mono"
            >
              ← Back
            </button>

          

          </div>
        </div>
      </div>
    </div>
  );
}

