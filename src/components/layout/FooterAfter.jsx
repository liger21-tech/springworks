export default function FooterAfter() {
  return (
    <section className="w-full bg-white overflow-hidden">
      
      {/* TOP STRIP */}
      <div className="w-full h-[90px] flex">
        <div className="w-[6%] bg-[#FF553E]" />
        <div className="w-[18%] bg-[#FFF200]" />
        <div className="w-[14%] bg-[#CFCFCF]" />
        <div className="flex-1 bg-white" />
        <div className="w-[6%] bg-[#2C6E3A]" />
        <div className="w-[14%] bg-[#FF553E]" />
        <div className="w-[8%] bg-[#FF9BEF]" />
        <div className="w-[6%] bg-[#CFCFCF]" />
      </div>

      {/* MAIN BLOCK */}
      <div className="w-full h-[220px] flex">
        <div className="w-[18%] bg-[#CFCFCF]" />
        <div className="w-[12%] bg-[#2C6E3A]" />
        <div className="w-[16%] bg-[#2B2B18]" />
        <div className="w-[10%] bg-[#CFCFCF]" />
        <div className="w-[6%] bg-[#FF9BEF]" />
        <div className="flex-1 bg-white" />
      </div>

      {/* BOTTOM STRIP — CORRECTED */}
      <div className="w-full h-[70px] flex">
        <div className="w-[8%] bg-[#FFF200]" />
        <div className="w-[18%] bg-[#2B2B18]" />
        <div className="w-[20%] bg-[#2C6E3A]" />
        <div className="w-[14%] bg-[#CFCFCF]" />
        {/* RIGHT EDGE — FULL GREY, NO GAP */}
        <div className="flex-1 bg-[#CFCFCF]" />
      </div>

    </section>
  )
}
