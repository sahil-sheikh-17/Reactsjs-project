"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/strategies.module.scss";
import Badge from "react-bootstrap/Badge";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import dynamic from "next/dynamic";
import StrategiesSidebar from "../strategies/StrategiesSidebar";
import StrategiesTable from "../strategies/strategiesTable";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Up from "@/assets/images/up.svg";
import Form from "react-bootstrap/Form";
import DateSlider from "../strategies/DateSlider";

const StratergiesChart = dynamic(
  () => import("@/components/charts/stratergychart"),
  {
    ssr: false,
  }
);

const Strategies = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main className={styles.strategies}>
      <div className="row m-0">
        <StrategiesSidebar />
        <section className="col-10 p-0">
          <div className={styles.optionHeader}>
            <div className={styles.leftHead}>
              <h5>
                Long Call &nbsp;
                <Badge bg="success">
                  <span className="icon-bull"></span> Bullish
                </Badge>
              </h5>
              <p>
                A simple bullish strategy for beginners that can yield big
                rewards. <Link href="">Know more</Link>
              </p>
            </div>
            <div className={styles.rightBtn}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-primary"
                  id="dropdown-split-basic"
                >
                  + &nbsp; Add
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.ItemText>Options</Dropdown.ItemText>
                  <Dropdown.Item href="#/action-1">
                    Buy (Call) <span className="icon-double_arrow"></span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Buy (Put) <span className="icon-double_arrow"></span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Sell (Call) <span className="icon-double_arrow red"></span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Sell (Put) <span className="icon-double_arrow red"></span>
                  </Dropdown.Item>
                  <Dropdown.ItemText>Underlying</Dropdown.ItemText>
                  <Dropdown.Item href="#/action-5">
                    Buy APPL <span className="icon-double_arrow"></span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    Sell APPL <span className="icon-double_arrow"></span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="primary" onClick={handleShow}>
                <span className="icon-link"></span> Buy strategies
              </Button>
            </div>
          </div>
          <DateSlider></DateSlider>
          <div className="stockDetails">
            <ul>
              <li>
                <label>Net Debit</label>
                <strong>$645</strong>
              </li>
              <li>
                <label>Max Loss</label>
                <strong>$645</strong>
              </li>
              <li>
                <label>Max Profit</label>
                <strong>Infinite</strong>
              </li>
              <li>
                <label>Chance of Profit</label>
                <strong>$173.13- $173.38</strong>
              </li>
              <li>
                <label>Breakeven</label>
                <strong>Above $181.45(+2.3%)</strong>
              </li>
            </ul>
          </div>
          <div className={styles.chartMain}>
            <div className="ChartContainer">
              <ButtonGroup>
                <Button variant="link" id="one_day" className="btn-primary">
                  Profit loss ($)
                </Button>
                <Button variant="link" id="one_month" className="">
                  Profit loss (%)
                </Button>
              </ButtonGroup>

              <Tabs
                defaultActiveKey="chart"
                id="uncontrolled-tab-example"
                className=""
              >
                <Tab eventKey="chart" title="Chart">
                  <StratergiesChart />
                </Tab>
                <Tab eventKey="table" title="Table">
                  <StrategiesTable />
                </Tab>
              </Tabs>
            </div>
            <div className="RangeSelector">
              <div className="row">
                <div className="col-6">
                  <label>Range:</label>
                  <Slider />
                </div>
                <div className="col-6">
                  <label>Implied Volatility:</label>
                  <Slider />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>

      <Offcanvas show={show} onHide={handleClose} bottom>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Buy Strategies</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="labelValue">
            <li>
              <label>Account</label>
              <strong>Account</strong>
            </li>
            <li>
              <label>Balance</label>
              <strong>$599.5</strong>
            </li>
          </ul>
          <div className={styles.stockDetails}>
            <div className={styles.info}>
              <h3>Apple</h3>
              <span>NASDAQ:APPL</span>
            </div>
            <div className={styles.priceMain}>
              <span className={styles.currency}>$</span>
              <span className={styles.price}>171.52</span>
              <span className={styles.change}>
                $ +2.50 (1.02 %)
                <Image src={Up} alt="Up" width={14} height={14} />
              </span>
            </div>
          </div>
          <form>
            <Form.Select aria-label="Default select example">
              <option>Open Buy</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example">
              <option>Market</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example">
              <option>Day</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                aria-describedby="cost"
              />
              <Form.Text id="cost">
                Estimated cost: <span>$599.5</span>
              </Form.Text>
            </Form.Group>

            <Button variant="outline-primary">
              Buy APPL <span className="icon-arrow"></span>
            </Button>
            <Button variant="outline-primary">
              Sell APPL <span className="icon-arrow"></span>
            </Button>
            <p className={styles.additional}>
              Additional Configuration <span className="icon-arrow"></span>
            </p>
            <div className="d-grid gap-2">
              <Button variant="success">
                <span className="icon-buy"></span> Preview & Buy
              </Button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default Strategies;
