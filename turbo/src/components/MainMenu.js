import React, { Component } from 'react';

class MainMenu extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <header className="header">
          <nav className="navbar navbar-default" id="sticker">
            <div className="container">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                                                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html"><img src="./img/company-logo.png" alt=""/></a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="index.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                        aria-haspopup="true" aria-expanded="false">Home <span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="index-two.html">Home Version Two</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="car-listing-grid.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                                   aria-haspopup="true" aria-expanded="false">Listing <span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="car-listing-grid.html">Car listing grid</a></li>
                      <li><a href="car-listing-list.html">Car listing list</a></li>
                      <li><a href="listing-detail.html">Listing details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="blog-listing.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                               aria-haspopup="true" aria-expanded="false">Blog <span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-listing.html">Blog Listing</a></li>
                      <li><a href="post-single.html">Blog Post</a></li>
                    </ul>
                  </li>
                  <li className="dropdown active">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                               aria-haspopup="true" aria-expanded="false">Page <span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="about-us.html">About</a></li>
                      <li><a href="contact-us.html">Contact us</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="shopping-cart.html">shopping cart</a></li>
                      <li><a href="registration.html">Registration</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="elements.html">Elements</a>
                  </li>
                  <li className="login-register-link right-side-link"><a href="registration.html">
                      <i className="icon_lock-open_alt"></i>Login</a>
                  </li>
                  <li className="dropdown right-side-link">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                               aria-haspopup="true" aria-expanded="false">ENG<span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu with-language">
                      <li><a href="#">Fr</a></li>
                      <li><a href="#">De</a></li>
                    </ul>
                  </li>
                  <li className="dropdown right-side-link last">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                               aria-haspopup="true" aria-expanded="false">USD<span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu with-language">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">Eur</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="rq-page-content">
          <div className="inner-page-banner">
            <div className="rq-overlay"></div>
            <div className="container">
              <div className="rq-title-container bredcrumb-title">
                <h2 className="rq-title">About Us</h2>
                <ol className="breadcrumb rq-subtitle">
                  <li><a href="#">Home</a></li>
                  <li className="active">About Us</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="rq-content-block">
            <div className="rq-about-us-content-wrapper">
              <div className="container">
                <div className="about-us-content-single">
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="brand-title">The Brand<span className="dot">.</span></h2>
                    </div>
                    <div className="col-md-8">
                      <div className="about-us-text">
                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong></p>
                        <p>
                        Suspendisse ultricies scelerisque turpis, elementum ornare arcu posuere mollis.
                        Donec vitae tempor ante, ut tempus augue. Maecenas aliquam, ante quis egestas molestie,
                        ipsum sapien faucibus lorem, ac placerat magna purus id quam. Proin id felis sapien.
                        </p>
                        <p>Mauris metus eros, finibus et eros eget, vehicula tincidunt ex.
                        Integer dictum turpis felis, at gravida lectus vestibulum et. Mauris vitae massa pellentesque,
                        rutrum lacus sit amet, dictum massa.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-content-single">
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="brand-title">Contact Us<span className="dot">.</span></h2>
                    </div>
                    <div className="col-md-8">
                      <div className="contact-single">
                        <i className="icon_pin"></i>
                        <p>1234 New Design St. Melbourne, Australia</p>
                      </div>
                      <div className="contact-single">
                        <i className="icon_mail_alt"></i>
                        <p>hello@turbotheme.com</p>
                      </div>
                      <div className="contact-single">
                        <i className="icon_phone"></i>
                        <p>+880 1738 567864</p>
                      </div>
                      <div className="opening-hour">
                        <p> HOUR WORK:  <span> MONDAY - FRIDAY  /  08AM - 05PM</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-content-single">
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="brand-title">Our Team<span className="dot">.</span></h2>
                    </div>
                    <div className="col-md-8">
                      <div className="rq-team-members">
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single">
                              <div className="member-info">
                                <a href="#">Alex Luthar</a>
                                <p>Co-founder</p>
                                <ul className="list-unstyled social-list">
                                  <li><a href="#"><i className="social_twitter"></i></a></li>
                                  <li><a href="#"><i className="social_facebook"></i></a></li>
                                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single"
                              >
                              <div className="member-info">
                                <a href="#">Alex Luthar</a>
                                <p>Co-founder</p>
                                <ul className="list-unstyled social-list">
                                  <li><a href="#"><i className="social_twitter"></i></a></li>
                                  <li><a href="#"><i className="social_facebook"></i></a></li>
                                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single">
                              <div className="member-info">
                                <a href="#">Alex Luthar</a>
                                <p>Co-founder</p>
                                <ul className="list-unstyled social-list">
                                  <li><a href="#"><i className="social_twitter"></i></a></li>
                                  <li><a href="#"><i className="social_facebook"></i></a></li>
                                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single">
                              <div className="member-info">
                                <a href="#">Alex Luthar</a>
                                <p>Co-founder</p>
                                <ul className="list-unstyled social-list">
                                  <li><a href="#"><i className="social_twitter"></i></a></li>
                                  <li><a href="#"><i className="social_facebook"></i></a></li>
                                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single">
                              <div className="member-info">
                                <a href="#">Alex Luthar</a>
                                <p>Co-founder</p>
                                <ul className="list-unstyled social-list">
                                  <li><a href="#"><i className="social_twitter"></i></a></li>
                                  <li><a href="#"><i className="social_facebook"></i></a></li>
                                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="member-single" >
                              <img src="img/about-us/about-us-join-team.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MainMenu;
