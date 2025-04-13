import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ToolsSection = () => {
  const [activeTab, setActiveTab] = useState('frequentlyUsed');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  // Tool categories and their respective tools
  const toolCategories = {
    frequentlyUsed: [
      { id: 'websiteScanner', title: 'Website Scanner', icon: '🕷️', free: true },
      { id: 'networkScanner', title: 'Network Scanner', icon: 'N', free: true },
      { id: 'subdomainFinder', title: 'Subdomain Finder', icon: '🔍', free: true },
      { id: 'portScanner', title: 'Port Scanner', icon: '👁️', free: true },
    ],
    reconTools: [
      { id: 'dnsEnum', title: 'DNS Enumeration', icon: 'D', free: false },
      { id: 'whois', title: 'WHOIS Lookup', icon: 'W', free: true },
      { id: 'metadataAnalyzer', title: 'Metadata Analyzer', icon: 'M', free: true },
    ],
    vulnerabilityScanners: [
      { id: 'urlFuzzer', title: 'URL Fuzzer', icon: '//', free: true },
      { id: 'wpScanner', title: 'WordPress Scanner', icon: 'W', free: true },
      { id: 'sqlInjection', title: 'SQL Injection Scanner', icon: 'S', free: false },
    ],
    exploitTools: [
      { id: 'xssDetector', title: 'XSS Detector', icon: 'X', free: false },
      { id: 'bruteForce', title: 'Brute Force Tool', icon: 'B', free: false },
      { id: 'fileUploadTester', title: 'File Upload Tester', icon: 'F', free: true },
    ],
  };

  // Mapping category IDs to display names
  const categoryDisplayNames = {
    frequentlyUsed: 'Frequently used',
    reconTools: 'Recon tools',
    vulnerabilityScanners: 'Vulnerability scanners',
    exploitTools: 'Exploit tools',
  };

  return (
    <Container fluid className="py-4 dropdown-menu megamenu-content">
      <Row>
        <Col md={3} className="mb-4">
          <Nav variant="pills" className="flex-column" activeKey={activeTab}>
            {Object.keys(toolCategories).map((category) => (
              <Nav.Item key={category}>
                <Nav.Link 
                  eventKey={category} 
                  onClick={() => handleTabSelect(category)}
                  className={activeTab === category ? 'active' : ''}
                >
                  {categoryDisplayNames[category]}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col md={9}>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {toolCategories[activeTab].map((tool) => (
              <Col key={tool.id}>
                <Card className="h-100 tool-card position-relative">
                  <Card.Body className="text-center">
                    <div className="tool-icon mb-3 mx-auto d-flex justify-content-center align-items-center">
                      {tool.icon}
                    </div>
                    <Card.Title>{tool.title}</Card.Title>
                    {tool.free && (
                      <span className="position-absolute top-0 end-0 mt-2 me-2 text-success">
                        <small>✓</small>
                      </span>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-success me-2">✓</span>
            try light version for free
          </div>
          <Link to="/all-tools" className="text-decoration-none">
            Explore all 24 tools <span>→</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ToolsSection;