import React from 'react';
import { Container, Image, Nav} from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className="px-0">
            <section>
                {/* div holding image banner set to relative position so 
                "Find your next event" div can sit on top of image */}
                <div className="position-relative"> 
                {/* Different images for smaller screens with display controls to hide
                 and unhide depending on breakpoint */}
                    <div className="d-md-none px-0">
                        <Image src='/images/home-banner-mobile.png' alt='banner-mobile-image' fluid />
                    </div>
                    <div className="d-none d-md-block">
                        <Image src='/images/home-banner-image.png' alt='banner-image' fluid />
                    </div>
                    {/* New container to hold nav icon settings to keep consistent layout
                    with card event area */}
                    <Container fluid="xxl" className="px-md-5">
                        {/* div set to absolute position to sit on top of image */}
                        <div className="position-absolute bottom-0">
                            <Nav href="/local-events" className="mb-5 rounded-2 px-2 py-1 bg-danger" >
                                <Nav.Link className="text-light fw-bold">
                                    Find your next event
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Container>

                </div>
            </section>
        </Container>
    );
};

export default Banner;