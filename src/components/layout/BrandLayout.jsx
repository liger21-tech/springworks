export default function BrandLayout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F6F4EF]">

      {/* Global Brand Abstract Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-140px] left-[-200px] w-[700px] h-[420px] bg-[#2F6B3A] rounded-[140px] opacity-20" />
        
        <div className="absolute top-[220px] right-[-260px] w-[760px] h-[440px] bg-[#1F2D1B] rounded-[160px] opacity-15" />
        
        <div className="absolute bottom-[-200px] left-[10%] w-[820px] h-[360px] bg-[#2F6B3A] rounded-[180px] opacity-15" />
      </div>

      {children}

    </div>
  );
}
