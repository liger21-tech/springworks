export default function VirtualTour() {
  return (
    <section id="tour" className="pt-0 md:pt-0 flex justify-center">
      <div className="w-full max-w-8xl   ">
        {/* <h1 className="text-[#333018] font-extrabold text-[3rem] font-mono text-center mb-16 " > SpringWorks Virtual Tour </h1> */}
        {/* Responsive iframe – shows on mobile & desktop */}
        <div
          className="relative w-full overflow-hidden  "
          style={{ paddingTop: "75%" }}
        >
          <iframe
            src="https://springworks.shapespark.com/walkthroughthecampus/"
            title="SpringWorks Virtual Tour"
            className="absolute inset-0 w-full h-full"
            scrolling="no"
            allow="gyroscope; accelerometer; xr-spatial-tracking; "
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
