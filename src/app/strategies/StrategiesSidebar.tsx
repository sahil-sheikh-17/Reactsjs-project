"use client";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import Bull from "@/assets/images/bull.svg";
import Bear from "@/assets/images/bear.svg";
import Search from "@/assets/images/search.svg";
import styles from "@/styles/strategies.module.scss";
import Link from "next/link";

const StrategiesSidebar = () => {
  return (
    <aside className="col-2 p-0">
    <div className={styles.searchSidebar}>
      <Form.Control
        className={styles.seachForm}
        type="text"
        placeholder="Search Strategy"
      />
      <Image
        src={Search}
        alt="login"
        width={15}
        height={15}
        className={styles.searchIcon}
      />
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Starter</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span className="icon-bull"></span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Proficient</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Spreads</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Condors</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Straddels</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Strangles</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Butterfly</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Ladder</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Synthetic</Accordion.Header>
        <Accordion.Body>
          <ul className={styles.strategiesList}>
            <li>
              <Link href="">
                Long Call
                <span>
                  <Image src={Bull} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Call
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Long Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                Short Put
                <span>
                  <Image src={Bear} alt="Bull" width={16} height={16} />
                </span>
              </Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </aside>
  );
};
export default StrategiesSidebar;
