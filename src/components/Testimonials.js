import React from "react"
import Slider from "react-slick"
import Fade from "react-reveal/Fade"

import testimonial1 from "../assets/images/testimonial/testimonial1.jpg"
import testimonial2 from "../assets/images/testimonial/testimonial2.jpg"
import testimonial3 from "../assets/images/testimonial/testimonial3.jpg"
import testimonial4 from "../assets/images/testimonial/testimonial4.jpg"

export default function Testimonials() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="row  mt-md-0 mt-lg-4">
          <Fade up>
            <div className="col-sm-6 text-white">
              <p className="font-weight-bold mb-3">Testimonials</p>
              <h3 className="font-weight-medium">
                See what like-minded people <br />
                are saying
              </h3>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <Slider
                dots
                dotsClass="flipster-custom-nav"
                slidesToShow={1}
                arrows={false}
                infinite
                autoplay
              >
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial1}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Mark Spenser</h6>
                    <p className="testimonial-destination">Accounts</p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial2}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Tua Manuera</h6>
                    <p className="testimonial-destination">
                      Director,Dj market
                    </p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial3}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Sarah Philip</h6>
                    <p className="testimonial-destination">Chief Accountant</p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial4}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Mark Spenser</h6>
                    <p className="testimonial-destination">
                      Director,Dj market
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
