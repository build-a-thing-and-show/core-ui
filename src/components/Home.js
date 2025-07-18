import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisibleSections(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.3, rootMargin: '-50px 0px' }
        );

        const sections = document.querySelectorAll('[data-scroll-section]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ 
            backgroundColor: '#f8f9fa', 
            color: '#333', 
            minHeight: '100vh',
            scrollBehavior: 'smooth'
        }}>
            {/* Navigation Bar */}
            <Navbar style={{ backgroundColor: '#2b2b2b' }} variant="dark" expand="lg" className="px-3">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="/images/logo-0.1.png"
                        width="40"
                        height="40"
                        className="me-2"
                        alt="Build A Thing And Show"
                    />
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}>
                        Build A Thing And Show
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Hero Section */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#e6e6dd',
                        transform: `translateY(${scrollY * 0.2}px)`,
                        zIndex: -1
                    }}
                />
                <Container 
                    fluid 
                    className="py-5" 
                    id="hero"
                    data-scroll-section
                    style={{ 
                        minHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                <Container>
                    <Row 
                        className="text-center py-5"
                        style={{
                            opacity: visibleSections.hero ? 1 : 0,
                            transform: visibleSections.hero ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out'
                        }}
                    >
                        <Col>
                            <img
                                src="/images/logo-0.1.png"
                                alt="Build A Thing And Show"
                                style={{ 
                                    width: '200px', 
                                    marginBottom: '30px',
                                    transform: `translateY(${scrollY * -0.1}px)`
                                }}
                            />
                            <h1 style={{ 
                                fontFamily: "'Bebas Neue', sans-serif", 
                                fontSize: '3.5rem', 
                                letterSpacing: '2px',
                                marginBottom: '20px'
                            }}>
                                Build A Thing And Show
                            </h1>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
                                Where creativity meets innovation. Build amazing things and showcase them to the world.
                            </p>
                            <Button 
                                as={Link} 
                                to="/login" 
                                size="lg"
                                style={{ 
                                    backgroundColor: '#2b2b2b', 
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '12px 30px',
                                    border: 'none'
                                }}
                            >
                                Get Started
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </div>

            {/* Organization Summary Section */}
            <Container 
                className="py-5" 
                id="summary"
                data-scroll-section
                style={{
                    opacity: visibleSections.summary ? 1 : 0,
                    transform: visibleSections.summary ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1s ease-out',
                    minHeight: '70vh',
                    paddingTop: '100px',
                    paddingBottom: '100px'
                }}
            >
                <Row className="text-center mb-5">
                    <Col>
                        <h2 style={{ 
                            fontFamily: "'Bebas Neue', sans-serif", 
                            fontSize: '2.5rem',
                            marginBottom: '30px'
                        }}>
                            What We Do
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card 
                            style={{ 
                                backgroundColor: '#e6e6dd', 
                                border: '2px solid #2b2b2b',
                                transform: visibleSections.summary ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                                opacity: visibleSections.summary ? 1 : 0,
                                transition: 'all 0.8s ease-out 0.2s'
                            }} 
                            className="h-100"
                        >
                            <Card.Body>
                                <Card.Title style={{ color: '#2b2b2b' }}>🛠️ Build</Card.Title>
                                <Card.Text style={{ color: '#333' }}>
                                    Create innovative projects using cutting-edge technologies. 
                                    From web applications to hardware prototypes, bring your ideas to life.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card 
                            style={{ 
                                backgroundColor: '#e6e6dd', 
                                border: '2px solid #2b2b2b',
                                transform: visibleSections.summary ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                                opacity: visibleSections.summary ? 1 : 0,
                                transition: 'all 0.8s ease-out 0.4s'
                            }} 
                            className="h-100"
                        >
                            <Card.Body>
                                <Card.Title style={{ color: '#2b2b2b' }}>🚀 Launch</Card.Title>
                                <Card.Text style={{ color: '#333' }}>
                                    Deploy your creations with confidence. Get access to deployment tools, 
                                    hosting solutions, and guidance to make your projects production-ready.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card 
                            style={{ 
                                backgroundColor: '#e6e6dd', 
                                border: '2px solid #2b2b2b',
                                transform: visibleSections.summary ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                                opacity: visibleSections.summary ? 1 : 0,
                                transition: 'all 0.8s ease-out 0.6s'
                            }} 
                            className="h-100"
                        >
                            <Card.Body>
                                <Card.Title style={{ color: '#2b2b2b' }}>📢 Showcase</Card.Title>
                                <Card.Text style={{ color: '#333' }}>
                                    Share your work with the community. Get feedback, inspire others, 
                                    and discover amazing projects from fellow builders and creators.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* About Us Section */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#f0f0ea',
                        transform: `translateY(${scrollY * 0.1}px)`,
                        zIndex: -1
                    }}
                />
                <Container 
                    fluid 
                    className="py-5" 
                    id="about"
                    data-scroll-section
                    style={{ 
                        minHeight: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '100px',
                        paddingBottom: '100px',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                <Container>
                    <Row
                        style={{
                            opacity: visibleSections.about ? 1 : 0,
                            transform: visibleSections.about ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out'
                        }}
                    >
                        <Col lg={6}>
                            <h2 style={{ 
                                fontFamily: "'Bebas Neue', sans-serif", 
                                fontSize: '2.5rem',
                                marginBottom: '30px'
                            }}>
                                About Us
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                                Build A Thing And Show is a community-driven platform dedicated to fostering 
                                innovation and creativity. We believe that everyone has the potential to create 
                                something amazing, and we&apos;re here to provide the tools, resources, and 
                                community support to make it happen.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Our mission is to empower builders, makers, and creators by providing a 
                                collaborative environment where ideas can flourish and projects can reach 
                                their full potential.
                            </p>
                        </Col>
                        <Col lg={6} className="d-flex align-items-center justify-content-center">
                            <div style={{ 
                                fontSize: '8rem', 
                                opacity: '0.3',
                                fontFamily: "'Bebas Neue', sans-serif",
                                transform: `translateY(${scrollY * -0.05}px)`
                            }}>
                                🏗️
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </div>

            {/* Contact Us Section */}
            <Container 
                className="py-5" 
                id="contact"
                data-scroll-section
                style={{
                    opacity: visibleSections.contact ? 1 : 0,
                    transform: visibleSections.contact ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1s ease-out',
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '100px',
                    paddingBottom: '100px'
                }}
            >
                <Row className="text-center">
                    <Col>
                        <h2 style={{ 
                            fontFamily: "'Bebas Neue', sans-serif", 
                            fontSize: '2.5rem',
                            marginBottom: '30px'
                        }}>
                            Contact Us
                        </h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                            Ready to start building? Have questions? We&apos;d love to hear from you!
                        </p>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Card 
                                    style={{ 
                                        backgroundColor: '#e6e6dd', 
                                        border: '2px solid #2b2b2b',
                                        transform: visibleSections.contact ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)',
                                        opacity: visibleSections.contact ? 1 : 0,
                                        transition: 'all 0.8s ease-out 0.3s'
                                    }}
                                >
                                    <Card.Body>
                                        <p className="mb-2" style={{ color: '#333' }}>
                                            <strong style={{ color: '#2b2b2b' }}>Email:</strong> hello@build-a-thing-and-show.org
                                        </p>
                                        <p className="mb-2" style={{ color: '#333' }}>
                                            <strong style={{ color: '#2b2b2b' }}>Community:</strong> Join our Discord server
                                        </p>
                                        <p className="mb-0" style={{ color: '#333' }}>
                                            <strong style={{ color: '#2b2b2b' }}>Support:</strong> Available 24/7 through our platform
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer 
                style={{ 
                    backgroundColor: '#2b2b2b', 
                    padding: '20px 0', 
                    marginTop: '0px'
                }}
            >
                <Container>
                    <Row className="text-center">
                        <Col>
                            <p style={{ margin: '0', color: 'white' }}>
                                © 2025 Build A Thing And Show. Empowering creators worldwide.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* Global Styles for Smooth Scrolling */}
            <style>
                {`
                    html {
                        scroll-behavior: smooth;
                    }
                    
                    * {
                        scroll-behavior: smooth;
                    }
                    
                    .navbar-nav .nav-link {
                        transition: all 0.3s ease;
                    }
                    
                    .navbar-nav .nav-link:hover {
                        transform: translateY(-2px);
                        color: #e6e6dd !important;
                    }
                    
                    .btn {
                        transition: all 0.3s ease;
                    }
                    
                    .btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 15px rgba(43, 43, 43, 0.3);
                    }
                    
                    .card {
                        transition: all 0.3s ease;
                    }
                    
                    .card:hover {
                        transform: translateY(-5px) !important;
                        box-shadow: 0 8px 25px rgba(43, 43, 43, 0.15);
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
