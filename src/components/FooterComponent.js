import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faAddressCard,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { thumbsup } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  render() {
    return (
      <React.Fragment className="container mr-0 footer ">
        <Row className="footer-xs d-flex justify-content-center mt-2">
          <Col
            xs={12}
            sm={4}
            md={3}
            className="d-flex flex-column justify-content-center"
          >
            <h4>Navigate</h4>
            <ul className="list-unstyled ">
              <li>
                <Link className="nav-link " to="/home">
                  <FontAwesomeIcon icon={faHome} /> {"  "}Home
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/about">
                  <FontAwesomeIcon icon={faInfo} />
                  {"  "} About
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/contact">
                  <FontAwesomeIcon icon={faAddressCard} />
                  {"  "}
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={3}
            className="d-flex flex-column justify-content-center"
          >
            <h4 className="footer align-self-center">Useful Links</h4>

            <ul className="list-unstyled">
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Traveling
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Finance
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Currencies
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={3}
            className="d-flex flex-column justify-content-center"
          >
            <h4 className="footer align-self-center">Contact Us</h4>

            <ul className="list-unstyled ">
              <li>
                <a
                  className="btn btn-social-icon btn-google"
                  href="mailto:converter@example.com"
                >
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="www.linkedin.com"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  className="btn btn-social-icon btn-foursquare"
                  href="tel:1234567"
                >
                  <i className="fa fa-phone fa-lg" />
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>

              <li className="d-flex pt-2 justify-content-center">
                <Button className="terms" onClick={this.toggleModal}>
                  Terms Of Use
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader
                toggle={this.toggleModal}
                className="bg-primary text-light font-wheight-bold"
              >
                <h3>Term of Use</h3>
              </ModalHeader>
              <ModalBody>
                <h2>Privacy Policy</h2>

                <p>Effective date: September 11, 2019</p>

                <p>
                  converter ("us", "we", or "our") operates the
                  https://converter.nata.enkin.dev/ website and the converter
                  mobile application (hereinafter referred to as the "Service").
                </p>

                <p>
                  This page informs you of our policies regarding the
                  collection, use, and disclosure of personal data when you use
                  our Service and the choices you have associated with that
                  data. The Privacy Policy for converter has been created with
                  the help of <a href="https://www.termsfeed.com/">TermsFeed</a>
                  .
                </p>

                <p>
                  We use your data to provide and improve the Service. By using
                  the Service, you agree to the collection and use of
                  information in accordance with this policy. Unless otherwise
                  defined in this Privacy Policy, the terms used in this Privacy
                  Policy have the same meanings as in our Terms and Conditions.
                </p>

                <h3>Definitions</h3>
                <ul>
                  <li>
                    <p>
                      <strong>Service</strong>
                    </p>
                    <p>
                      Service means the https://converter.nata.enkin.dev/
                      website and the converter mobile application operated by
                      converter
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Personal Data</strong>
                    </p>
                    <p>
                      Personal Data means data about a living individual who can
                      be identified from those data (or from those and other
                      information either in our possession or likely to come
                      into our possession).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Usage Data</strong>
                    </p>
                    <p>
                      Usage Data is data collected automatically either
                      generated by the use of the Service or from the Service
                      infrastructure itself (for example, the duration of a page
                      visit).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cookies</strong>
                    </p>
                    <p>
                      Cookies are small files stored on your device (computer or
                      mobile device).
                    </p>
                  </li>
                </ul>

                <h3>Information Collection and Use</h3>
                <p>
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you.
                </p>

                <h4>Types of Data Collected</h4>

                <h5>Personal Data</h5>
                <p>
                  While using our Service, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you ("Personal Data"). Personally
                  identifiable information may include, but is not limited to:
                </p>

                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h5>Usage Data</h5>

                <p>
                  We may also collect information that your browser sends
                  whenever you visit our Service or when you access the Service
                  by or through a mobile device ("Usage Data").
                </p>
                <p>
                  This Usage Data may include information such as your
                  computer's Internet Protocol address (e.g. IP address),
                  browser type, browser version, the pages of our Service that
                  you visit, the time and date of your visit, the time spent on
                  those pages, unique device identifiers and other diagnostic
                  data.
                </p>
                <p>
                  When you access the Service by or through a mobile device,
                  this Usage Data may include information such as the type of
                  mobile device you use, your mobile device unique ID, the IP
                  address of your mobile device, your mobile operating system,
                  the type of mobile Internet browser you use, unique device
                  identifiers and other diagnostic data.
                </p>

                <h5>Tracking &amp; Cookies Data</h5>
                <p>
                  We use cookies and similar tracking technologies to track the
                  activity on our Service and we hold certain information.
                </p>
                <p>
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device. Other
                  tracking technologies are also used such as beacons, tags and
                  scripts to collect and track information and to improve and
                  analyse our Service.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our Service.
                </p>
                <p>Examples of Cookies we use:</p>
                <ul>
                  <li>
                    <strong>Session Cookies.</strong> We use Session Cookies to
                    operate our Service.
                  </li>
                  <li>
                    <strong>Preference Cookies.</strong> We use Preference
                    Cookies to remember your preferences and various settings.
                  </li>
                  <li>
                    <strong>Security Cookies.</strong> We use Security Cookies
                    for security purposes.
                  </li>
                </ul>

                <h3>Use of Data</h3>

                <p>converter uses the collected data for various purposes:</p>
                <ul>
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>
                    To allow you to participate in interactive features of our
                    Service when you choose to do so
                  </li>
                  <li>To provide customer care and support</li>
                  <li>
                    To provide analysis or valuable information so that we can
                    improve the Service
                  </li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>

                <h3>Transfer Of Data</h3>
                <p>
                  Your information, including Personal Data, may be transferred
                  to - and maintained on - computers located outside of your
                  state, province, country or other governmental jurisdiction
                  where the data protection laws may differ than those from your
                  jurisdiction.
                </p>
                <p>
                  If you are located outside Israel and choose to provide
                  information to us, please note that we transfer the data,
                  including Personal Data, to Israel and process it there.
                </p>
                <p>
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p>
                  converter will take all steps reasonably necessary to ensure
                  that your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of your data
                  and other personal information.
                </p>

                <h3>Disclosure Of Data</h3>

                <h4>Legal Requirements</h4>
                <p>
                  converter may disclose your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul>
                  <li>To comply with a legal obligation</li>
                  <li>
                    To protect and defend the rights or property of converter
                  </li>
                  <li>
                    To prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    To protect the personal safety of users of the Service or
                    the public
                  </li>
                  <li>To protect against legal liability</li>
                </ul>

                <p>
                  As an European citizen, under GDPR, you have certain
                  individual rights. You can learn more about these guides in
                  the{" "}
                  <a href="https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR">
                    GDPR Guide
                  </a>
                  .
                </p>

                <h3>Security of Data</h3>
                <p>
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>

                <h3>Service Providers</h3>
                <p>
                  We may employ third party companies and individuals to
                  facilitate our Service ("Service Providers"), to provide the
                  Service on our behalf, to perform Service-related services or
                  to assist us in analyzing how our Service is used.
                </p>
                <p>
                  These third parties have access to your Personal Data only to
                  perform these tasks on our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>

                <h3>Links to Other Sites</h3>
                <p>
                  Our Service may contain links to other sites that are not
                  operated by us. If you click a third party link, you will be
                  directed to that third party's site. We strongly advise you to
                  review the Privacy Policy of every site you visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>

                <h3>Children's Privacy</h3>
                <p>
                  Our Service does not address anyone under the age of 18
                  ("Children").
                </p>
                <p>
                  We do not knowingly collect personally identifiable
                  information from anyone under the age of 18. If you are a
                  parent or guardian and you are aware that your Child has
                  provided us with Personal Data, please contact us. If we
                  become aware that we have collected Personal Data from
                  children without verification of parental consent, we take
                  steps to remove that information from our servers.
                </p>

                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p>
                  We will let you know via email and/or a prominent notice on
                  our Service, prior to the change becoming effective and update
                  the "effective date" at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul>
                  <li>By email: converter@enkin.co.il</li>
                  <li>
                    By visiting this page on our website:
                    https://converter.nata.enkin.dev/contact
                  </li>
                </ul>
              </ModalBody>
              <Button
                type="close"
                value="close"
                color="primary"
                onClick={this.toggleModal}
              >
                OK
              </Button>
            </Modal>
          </Col>
        </Row>
        <hr className="footer" />
        <Row>
          <Col xs={{ size: 11, offset: 1 }} className="rights">
            <p>© All rights reserved to Converter 2019</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Footer;
