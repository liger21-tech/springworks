export default function Gallerie() {
    return (

        <section  className="pt-0 md:  justify-center">
            <div className="w-full max-w-8xl   ">
                {/* Responsive iframe – shows on mobile & desktop */}
                <div
                    className="relative w-full overflow-hidden  "
                    style={{ paddingTop: "75%" }}
                >
                   <iframe
                   className="absolute inset-0 w-full h-full" 
  allowfullscreen allow="gyroscope; accelerometer; xr-spatial-tracking; "
  src="https://springworks.shapespark.com/10galleryrooms/">
</iframe>
                </div>
            </div>

        </section>
    )
}
