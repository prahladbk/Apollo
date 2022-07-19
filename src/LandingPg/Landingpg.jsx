import React from "react";
import "./Assets/css/ud-styles.css";
import dottedShape from "./Assets/images/hero/dotted-shape.svg";
import aboutImage from "./Assets/images/about/about-image.svg";

import Shape from "./Assets/images/faq/shape.svg";
import author01 from "./Assets/images/testimonials/author-01.png";
import author02 from "./Assets/images/testimonials/author-02.png";
import author03 from "./Assets/images/testimonials/author-03.png";

import fshape01 from "./Assets/images/footer/shape-1.svg"
import fshape02 from "./Assets/images/footer/shape-2.svg"
import fshape03 from "./Assets/images/footer/shape-3.svg"
import favicon from "./Assets/images/logo/favicon.ico";



import pbk from "./Assets/images/team/pbk.jpeg"



const LandingPg =()=>{
    return (
        <div>
           
  
  
    
    <header class="ud-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">
                <h1 class="ap">Apollo</h1>
              </a>
              <button class="navbar-toggler">
                <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
              </button>

              <div class="navbar-collapse">
                <ul id="nav" class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#about">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#pricing">Explore</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#team">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div class="navbar-btn d-none d-sm-inline-block">
                <a href="login.html" class="ud-main-btn ud-login-btn">
                  Sign In
                </a>
                <a class="ud-main-btn ud-white-btn" href="javascript:void(0)">
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    

  
    <section class="ud-hero" id="home">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <h1 class="ud-hero-title">
                Experience the NEW age of Learning!
              </h1>
              <p class="ud-hero-desc">
               Learn and Earn together with us to a better future.
              </p>
              <ul class="ud-hero-buttons">
                <li>
                  <a href="login.html" rel="nofollow noopener" target="_blank" class="ud-main-btn ud-white-btn">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="https://github.com/adithyamandody/Apollo1" rel="nofollow noopener" target="_blank" class="ud-main-btn ud-link-btn">
                    Learn More <i class="lni lni-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="ud-hero-brands-wrapper wow fadeInUp"
              data-wow-delay=".3s"
            >
            
            </div>
            <div class="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
          
              <img
                src={dottedShape}
                alt="shape"
                
                class="shape shape-1"
              />
              <img
                src={dottedShape}
                alt="shape"
                class="shape shape-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section id="features" class="ud-features">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-section-title">
              <span>Features</span>
              <h2>Main Features of Apollo</h2>
              <p>
                Making all concepts worth learning. If we are rewarded for learning it acts as a motivation to learn more.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
              <div class="ud-feature-icon">
                <i class="lni lni-gift"></i>
              </div>
              <div class="ud-feature-content">
                <h3 class="ud-feature-title">Learn & Earn</h3>
                <p class="ud-feature-desc">
                  We will gift you with our Letto coin which will pay you as well.
                </p>
                <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
              <div class="ud-feature-icon">
                <i class="lni lni-move"></i>
              </div>
              <div class="ud-feature-content">
                <h3 class="ud-feature-title">Multipurpose Learning</h3>
                <p class="ud-feature-desc">
                  Learning is a never ending process so anyone can learn anything here.
                </p>
                <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
              <div class="ud-feature-icon">
                <i class="lni lni-layout"></i>
              </div>
              <div class="ud-feature-content">
                <h3 class="ud-feature-title">High-quality Design</h3>
                <p class="ud-feature-desc">
                  The design is set to minimal so that anyone visiting us for first time can easly understand.
                </p>
                <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
              <div class="ud-feature-icon">
                <i class="lni lni-layers"></i>
              </div>
              <div class="ud-feature-content">
                <h3 class="ud-feature-title">All Essential Elements</h3>
                <p class="ud-feature-desc">
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
                <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="about" class="ud-about">
      <div class="container">
        <div class="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
          <div class="ud-about-content-wrapper">
            <div class="ud-about-content">
              <span class="tag">About Us</span>
              <h2>Platform to learn anything </h2>
              <p>
                Rather than promising students a vibrant future that may or may not happen, we believe in a short-term reward approach without compromising on the former.
In our format, a student that advances to the next level will be rewarded with an ordained amount of a specific cryptocurrency. Students may also earn additional rewards on completion of quizzes , tests, mentoring and other activities which uplift's the spirit of learning.
By doing so, we ensure that the spirits of the students are kept unwaveringly high as we give them incentives to work harder and achieve greater.
              </p>

              <p>
                The main ‘thrust’ is to focus on educating attendees on how to
                be the best of themselfs.
              </p>
              <a href="javascript:void(0)" class="ud-main-btn">Learn More</a>
            </div>
          </div>
          <div class="ud-about-image">
            <img src={aboutImage} alt="about-image" />
          </div>
        </div>
      </div>
    </section>


    <section id="pricing" class="ud-pricing">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-section-title mx-auto text-center">
              <span>Explore</span>
              <h2>Our Course Plans</h2>
              <p>
                Start now find out which is the best learning platform for your interests.
              </p>
            </div>
          </div>
        </div>

        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div
              class="ud-single-pricing first-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div class="ud-pricing-header">
                <h4>App Development</h4>
              </div>
              <div class="ud-pricing-body">
                <ul>
                  <li>Flutter</li>
                  <li>All UI components</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Earn Letto on the way</li>
                  <li>Active Community </li>
                </ul>
              </div>
              <div class="ud-pricing-footer">
                <a href="javascript:void(0)" class="ud-main-btn ud-border-btn">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div
              class="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"
            >
              <span class="ud-popular-tag">POPULAR</span>
              <div class="ud-pricing-header">
                <h4>Web Development</h4>
              </div>
              <div class="ud-pricing-body">
                <ul>
                  <li>MERN Stack</li>
                  <li>All UI components</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Earn Letto coin on the way</li>
                  <li>Active Community</li>
                </ul>
              </div>
              <div class="ud-pricing-footer">
                <a href="javascript:void(0)" class="ud-main-btn ud-white-btn">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div
              class="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div class="ud-pricing-header">
                <h4>Digital Marketing</h4>
              </div>
              <div class="ud-pricing-body">
                <ul>
                  <li>Google Digital Unlocked</li>
                  <li>Zero to Hero</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Real life projects</li>
                  <li>Active Community</li>
                </ul>
              </div>
              <div class="ud-pricing-footer">
                <a href="javascript:void(0)" class="ud-main-btn ud-border-btn">
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="ud-faq">
      <div class="shape">
        <img src={Shape} alt="shape" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Any Questions? Answered</h2>
              <p>
                Most of the frequent question. Go through it to have a clear understanding.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>What is Letto coin?</span>
                </button>
                <div id="collapseOne" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Letto coin is basically a type of cryptocurrency build based on poligon. 
                    You can use Letto to reward mentors as well as it act as a store of 
                    value so you can trade it for real money in future.

                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>How do I learn best skills?</span>
                </button>
                <div id="collapseTwo" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Go through the explore section where you
                    will get a clear understanding.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>How am I rewarded Letto coin?</span>
                </button>
                <div id="collapseThree" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Letto coin is rewarded based on your performance
                    which will be tested by us through queizzes and be active in community.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>What is this new learnig method?</span>
                </button>
                <div id="collapseFour" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    The new learning method helps students to set goals and work towards
                    it through which they become better versions of themselfs.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>Do I have to pay for anything?</span>
                </button>
                <div id="collapseFive" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Everything available here is free of cost.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div class="accordion">
                <button
                  class="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <span class="icon flex-shrink-0">
                    <i class="lni lni-chevron-down"></i>
                  </span>
                  <span>What if I cant finish it on time?</span>
                </button>
                <div id="collapseSix" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    There is no time limit its upto you to finish so 
                    you have the flexiblity to finish it as you wish.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="ud-testimonials">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-section-title mx-auto text-center">
              <span>Testimonials</span>
              <h2>What our Customers Says</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div class="ud-testimonial-ratings">
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <img
                    src={author01}
                    alt="author"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <h4>Sabo Masties</h4>
                  <p>Founder @UIdeck</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div class="ud-testimonial-ratings">
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <img
                    src={author02}
                    alt="author"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <h4>Margin Gesmu</h4>
                  <p>Founder @Lineicons</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="ud-testimonial-ratings">
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
                <i class="lni lni-star-filled"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <img
                    src={author03}
                    alt="author"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <h4>William Smith</h4>
                  <p>Founder @GrayGrids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-brands wow fadeInUp" data-wow-delay=".2s">
              
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="team" class="ud-team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-section-title mx-auto text-center">
              <span>Our Team</span>
              <h2>Meet The Team</h2>
              <p>
                We came up with this idea from out day to day life , the problems that we face.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-team wow fadeInUp" data-wow-delay=".1s">
              <div class="ud-team-image-wrapper">
                <div class="ud-team-image">
                  <img src={pbk} alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  class="shape shape-2"
                />
              </div>
              <div class="ud-team-info">
                <h5>Prahlad bk</h5>
                <h6>UI Designer</h6>
              </div>
              <ul class="ud-team-socials">
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-instagram-filled"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-team wow fadeInUp" data-wow-delay=".15s">
              <div class="ud-team-image-wrapper">
                <div class="ud-team-image">
                  <img src="assets/images/team/team-02.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  class="shape shape-2"
                />
              </div>
              <div class="ud-team-info">
                <h5>Jezmin uniya</h5>
                <h6>Product Designer</h6>
              </div>
              <ul class="ud-team-socials">
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-instagram-filled"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-team wow fadeInUp" data-wow-delay=".2s">
              <div class="ud-team-image-wrapper">
                <div class="ud-team-image">
                  <img src="assets/images/team/team-03.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  class="shape shape-2"
                />
              </div>
              <div class="ud-team-info">
                <h5>Andrieo Gloree</h5>
                <h6>App Developer</h6>
              </div>
              <ul class="ud-team-socials">
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-instagram-filled"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div class="ud-team-image-wrapper">
                <div class="ud-team-image">
                  <img src="assets/images/team/team-04.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  class="shape shape-2"
                />
              </div>
              <div class="ud-team-info">
                <h5>Jackie Sanders</h5>
                <h6>Content Writer</h6>
              </div>
              <ul class="ud-team-socials">
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MusharofChy">
                    <i class="lni lni-instagram-filled"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section id="contact" class="ud-contact">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-7">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title">
                <span>CONTACT US</span>
                <h2>
                  Let’s talk about ideas<br />
                  Love to hear from you!
                </h2>
              </div>
              <div class="ud-contact-info-wrapper">
                <div class="ud-single-info">
                  <div class="ud-info-icon">
                    <i class="lni lni-map-marker"></i>
                  </div>
                  <div class="ud-info-meta">
                    <h5>Our Location</h5>
                    <p>Mes college of Engineering Kuttippuram,Malappuram</p>
                  </div>
                </div>
                <div class="ud-single-info">
                  <div class="ud-info-icon">
                    <i class="lni lni-envelope"></i>
                  </div>
                  <div class="ud-info-meta">
                    <h5>How Can We Help?</h5>
                    <p>apollo@gmail.com</p>
                    <p>helpdeskapollo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div
              class="ud-contact-form-wrapper wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h3 class="ud-contact-form-title">Send us a Message</h3>
              <form class="ud-contact-form">
                <div class="ud-form-group">
                  <label for="fullName">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Adam Gelius"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="phone">Phone*</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="message">Message*</label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="type your message here"
                  ></textarea>
                </div>
                <div class="ud-form-group mb-0">
                  <button type="submit" class="ud-main-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div class="shape shape-1">
        <img src={fshape01} alt="shape" />
      </div>
      <div class="shape shape-2">
        <img src={fshape02} alt="shape" />
      </div>
      <div class="shape shape-3">
        <img src={fshape03} alt="shape" />
      </div>
      <div class="ud-footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="ud-widget">
                <a href="index.html" class="ud-footer-logo">
                  <img src={favicon} alt="logo" />
                </a>
                <p class="ud-widget-desc">
                  Hope You have a great time learning with us.
                </p>
                <ul class="ud-widget-socials">
                  <li>
                    <a href="#">
                      <i class="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">About Us</h5>
                <ul class="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Features</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div class="ud-widget">
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">Features</h5>
                <ul class="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">How it works</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms of service</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Refund policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10">
              <div class="ud-widget">
                ....
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ud-footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <ul class="ud-footer-bottom-left">
                <li>
                  <a href="javascript:void(0)">Privacy policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Support policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms of service</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <p class="ud-footer-bottom-right">
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="javascript:void(0)" class="back-to-top">
      <i class="lni lni-chevron-up"> </i>
    </a>

    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/main.js"></script>
    {/* <script>
      // ==== for menu scroll
      const pageLink = document.querySelectorAll(".ud-menu-scroll");

      pageLink.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
          });
        });
      });

      // section menu active
      function onScroll(event) {
        const sections = document.querySelectorAll(".ud-menu-scroll");
        const scrollPos =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;

        for (let i = 0; i < sections.length; i++) {
          const currLink = sections[i];
          const val = currLink.getAttribute("href");
          const refElement = document.querySelector(val);
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            document
              .querySelector(".ud-menu-scroll")
              .classList.remove("active");
            currLink.classList.add("active");
          } else {
            currLink.classList.remove("active");
          }
        }
      }

      window.document.addEventListener("scroll", onScroll);
    </script> */}
  


        </div>
    );
};

export default LandingPg;