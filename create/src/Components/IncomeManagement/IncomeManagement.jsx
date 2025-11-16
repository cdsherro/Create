import React, { useState } from "react";
import "./IncomeManagement.css";
import { Button, Table, Card, Container, Row, Col, Dropdown } from "react-bootstrap";

export default function IncomeManagement() {
  const [incomeData, setIncomeData] = useState([
    {
      name: "Job Salary",
      amount: "$5,000",
      nextPayday: "Sep 30",
      lastPayday: "Aug 30",
      frequency: "weekly",
      status: "Active"
    },
    {
      name: "Primary Job Salary",
      amount: "$5,500.50",
      nextPayday: "Oct 30",
      lastPayday: "Sep 30",
      frequency: "Monthly",
      status: "Active"
    }
  ]);
  
  const totalIncome = 4500.00;

  // Convert sorting
  const amountToNumber = amountStr =>
    parseFloat(amountStr.replace(/[^0-9.]/g, ""));

  // Helper 
  const frequencyOrder = freq => {
    if (!freq) return 99;
    if (freq.toLowerCase() === "monthly") return 1;
    if (freq.toLowerCase() === "weekly") return 2;
    return 3;
  }

  // handler
  const handleSort = sortType => {
    let sorted = [...incomeData];
    if (sortType === "amount-desc") {
      sorted.sort((a, b) => amountToNumber(b.amount) - amountToNumber(a.amount));
    } else if (sortType === "frequency") {
      sorted.sort((a, b) => frequencyOrder(a.frequency) - frequencyOrder(b.frequency));
    } else if (sortType === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setIncomeData(sorted);
  };

  return (
    <Container fluid className="income-mgmt-root py-4">
      <Row>
        <Col>
          <div className="income-mgmt-title">Income Management</div>
        </Col>
      </Row>

      <Row className="mb-2 align-items-center">
        <Col xs={12} md={6} lg={6} xl={5}> 
          <Card className="income-summary-card mb-0">
            <Card.Body>
              <Card.Title className="summary-label">Monthly Income (To Date)</Card.Title>
              <Card.Text className="summary-amount">
                ${totalIncome.toLocaleString(undefined,{minimumFractionDigits:2})}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} xl={5}
          className="d-flex justify-content-end align-items-start"
        >
          <img
            src={require("../Assets/SavingsPie.jpg")}
            alt="Income Pie Chart"
            className="income-pie-chart-img"
          />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col xs={12} className="d-flex justify-content-start align-items-center income-btn-row">
          <Button
            className="income-action-btn"
            variant="success"
            size="lg"
            style={{marginLeft: "100px"}}
          >
            Add Income
          </Button>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="income-action-btn"
              id="dropdown-basic"
              size="lg"
              style={{marginLeft: "32px"}}
            >
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSort("amount-desc")}>
                Amount (High → Low)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("frequency")}>
                Frequency (Monthly → Weekly)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("name")}>
                Name (A-Z)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover className="income-table" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Next Payday</th>
                <th>Last Payday</th>
                <th>Frequency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {incomeData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                  <td>{row.nextPayday}</td>
                  <td>{row.lastPayday}</td>
                  <td>{row.frequency}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
