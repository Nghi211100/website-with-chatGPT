import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    [
      {
        content:
          "Thanks to OmniStack's cloud solutions, our business has been able to scale more efficiently and reduce our IT costs. They're a valuable partner that we trust to keep our systems running smoothly.",
        author: {
          img: "/images/mike200.jpg",
          name: "Mike Palumbo",
          pos: "Supply Chain Director",
        },
      },
      {
        content:
          "OmniStack's web application development team helped us create a custom e-commerce platform that has significantly increased our online sales. Their attention to detail and communication were top-notch.",
        author: {
          img: "/images/bryan.jpg",
          name: "Bryan Nguyen",
          pos: "Delivery Director - Aleph Labs",
        },
      },
    ],
    [
      {
        content:
          "We've been working with OmniStack's mobile application development team for over a year and have been consistently impressed with their professionalism and expertise. They're always available to answer questions and provide guidance.",
        author: {
          img: "/images/glints200.jpg",
          name: "Brian Lee",
          pos: "Country Manager - Glints Intern PTE",
        },
      },
      {
        content:
          "OmniStack's cloud solutions helped us transition our on-premise systems to the cloud, resulting in improved performance and greater flexibility. We're grateful for their expertise and guidance throughout the process.",
        author: {
          img: "/images/client.jpg",
          name: "Huynh Van Viet",
          pos: "Founder - Ecom HV Group",
        },
      },
    ],
    [
      {
        content:
          "We were impressed with OmniStack's expertise in web application development. They built us a responsive and user-friendly platform that has helped us reach more customers than ever before.",
        author: {
          img: "/images/Muji200x200.jpg",
          name: "Tetsuya Nagaiwa",
          pos: "General Manager - MUJI",
        },
      },
      {
        content:
          "OmniStack's mobile application development team was fantastic to work with. They took the time to understand our needs and delivered an app that exceeded our expectations.",
        author: {
          img: "/images/gforce200.jpg",
          name: "Thuy Nguyen",
          pos: "Country Manager - GForces",
        },
      },
    ],
    [
      {
        content:
          "We needed a custom mobile application for our restaurant and OmniStack's mobile application development team delivered exactly what we needed. Our customers love using the app to place orders and make reservations.",
        author: {
          img: "/images/reapra200.jpg",
          name: "Nguyen Pham",
          pos: "Manager - Reapra Technology",
        },
      },
    ],
  ];

  return (
    <section className="bg-[linear-gradient(85deg,#0e3a68_20%,#158eb1_100%)]">
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings} className="h-full">
          {testimonials.map((testimonial, index) => (
            <div
              className="md:!grid md:!grid-cols-2 md:!px-6 lg:!px-8 h-full"
              key={index}
            >
              <div className="py-12 px-6 md:flex md:flex-col md:border-r md:border-[#137894] md:py-16 md:pl-0 md:pr-10 lg:pr-16 h-full">
                <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                  <div className="relative text-base font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{testimonial[0].content}</p>
                  </div>
                  <footer className="mt-8">
                    <div className="flex items-start">
                      <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={testimonial[0].author.img}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-white">
                          {testimonial[0].author.name}
                        </div>
                        <div className="text-base font-medium text-blue-200">
                          {testimonial[0].author.pos}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
              {testimonial[1] && (
                <div className="border-t-2 border-[#137894] py-12 px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
                  <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                    <div className="relative text-base font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">{testimonial[1].content}</p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-start">
                        <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={testimonial[1].author.img}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-white">
                            {testimonial[1].author.name}
                          </div>
                          <div className="text-base font-medium text-blue-200">
                            {testimonial[1].author.pos}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
