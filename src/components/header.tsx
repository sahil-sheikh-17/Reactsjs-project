"use client";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ArrowUpward from "@/assets/images/arrow-outward.svg";
import Logo from "@/assets/images/sensa.svg";
import Search from "@/assets/images/search.svg";
import Login from "@/assets/images/login.svg";
import English from "@/assets/images/english.svg";
import {
  Button,
  Dropdown,
  Form,
  InputGroup,
  SSRProvider,
  ButtonGroup,
  Collapse,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { RECENT_SEARCHED } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxCommon";
import { fetchSearchApi, searchData } from "@/redux/slices/recentSearchSlice";
import { debounce } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { todayDate, yesterdayDate } from "@/utils/dates";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const search = useSearchParams();
  const [storeRecentValue, setStoreRecentValue] = useState<string>(
    search.get("q") || ""
  );
  const [recentList, setRecentList] = useState([]);
  const valuesFromArray: any = useAppSelector(searchData);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const closeMenu = (event: any) => {
    if (!event.target.closest("#closeMenu")) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const uniqueArray = valuesFromArray.reduce(
    (index: any, currentValue: any) => {
      const existingObject = index.findIndex(
        (obj: any) =>
          obj.symbol.toLowerCase() === currentValue.symbol.toLowerCase()
      );

      if (existingObject == -1) {
        index.push(currentValue);
      }
      return index;
    },
    []
  );

  const handleInputClick = (e: any) => {
    setStoreRecentValue(e.target.value);
    debouncedSearch(dispatch(fetchSearchApi(e.target.value)));
  };

  const debouncedSearch = debounce((value) => {}, 500);

  const valueToPreSet = (value: any) => {
    router.push(`/trade?q=${value}&start=${yesterdayDate}&end=${todayDate}`);
    setStoreRecentValue(value);
  };

  const filteredData = uniqueArray.filter((item: any) =>
    item.symbol.toLowerCase().includes(storeRecentValue.trim().toLowerCase())
  );

  useEffect(() => {
    let res: any = Cookies.get(RECENT_SEARCHED);
    if (res != undefined) {
      res = JSON.parse(res);
    } else {
      res = [];
    }
    setRecentList(res);
  }, []);

  const storeInCookie = (value: any) => {
    let res: any = Cookies.get(RECENT_SEARCHED);
    if (res != undefined) {
      res = JSON.parse(res);
    }
    let arr: any = [];
    if (res == undefined) {
      arr = [];
    } else {
      arr = [...res];
    }
    if (arr.findIndex((itm: any, idx: any) => itm == value) == -1) {
      arr.push(value.toUpperCase());
    }
    setRecentList(arr);
    Cookies.set(RECENT_SEARCHED, JSON.stringify(arr));
    setStoreRecentValue("");
  };

  const clearSearh = () => {
    setRecentList([]);
    setStoreRecentValue("");
    Cookies.remove(RECENT_SEARCHED);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };
  return (
    <header>
      <SSRProvider>
        <Navbar expand="lg" className={`d-flex flex-column ${styles.header}`}>
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                src={Logo}
                alt="Picture of the author"
                width={100}
                height={54}
              />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navigation">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/trade">Trade</Link>
                <Link href="/strategies">Options Strategies</Link>
              </Nav>
            </Navbar.Collapse>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                storeInCookie(storeRecentValue);
              }}
              className="d-flex align-items-center"
            >
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="searchIconMobile"
              >
                <Image
                  src={Search}
                  alt="login"
                  width={15}
                  height={15}
                  className={styles.searchIcon}
                />
              </Button>
              <Collapse in={open}>
                <InputGroup className={styles.search}>
                  <InputGroup.Text id="basic-addon1" className={styles.label}>
                    Symbol
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Eg. Apple, TSLA"
                    aria-label="Eg. Apple, TSLA"
                    aria-describedby="basic-addon1"
                    type="text"
                    name="name"
                    onFocus={() => {
                      document.removeEventListener("click", closeMenu);
                      setTimeout(() => {
                        setShowDropdown(true);

                        document.addEventListener("click", closeMenu);
                      }, 500);
                    }}
                    value={storeRecentValue}
                    autoComplete="off"
                    onChange={handleInputClick}
                    onClick={() => setShowDropdown(true)}
                  />

                  {showDropdown && (
                    <div className={styles.searchDropdown} id="closeMenu">
                      {!storeRecentValue && (
                        <div className={styles.dropdownHeader}>
                          <div className={styles.dropdownHeading}>
                            Recent Searches
                          </div>
                          <span className={styles.clear} onClick={clearSearh}>
                            Clear All
                          </span>
                        </div>
                      )}
                      {!storeRecentValue
                        ? recentList.map((item: any, index) => {
                            return (
                              <Dropdown.Item
                                className={styles.searchItem}
                                key={item + index.toString()}
                                onClick={() => {
                                  valueToPreSet(item);
                                  selectItem("item");
                                }}
                              >
                                <span className={styles.name}>{item}</span>
                                <span className={styles.price}>
                                  $--{" "}
                                  <span className={styles.change}>(--%)</span>
                                </span>
                                <span className={styles.arrow}>
                                  <Image
                                    src={ArrowUpward}
                                    alt="select"
                                    width={10}
                                    height={10}
                                  />
                                </span>
                              </Dropdown.Item>
                            );
                          })
                        : filteredData.map((item: any, index: any) => {
                            return (
                              <Dropdown.Item
                                className={styles.searchItem}
                                key={item + index.toString()}
                                onClick={() => {
                                  storeInCookie(item.symbol);
                                  valueToPreSet(item.symbol);
                                  selectItem("item");
                                }}
                              >
                                <span className={styles.name}>
                                  {item.symbol}
                                </span>
                                <span className={styles.price}>
                                  $--{" "}
                                  <span className={styles.change}>(--%)</span>
                                </span>
                                <span className={styles.arrow}>
                                  <Image
                                    src={ArrowUpward}
                                    alt="select"
                                    width={10}
                                    height={10}
                                  />
                                </span>
                              </Dropdown.Item>
                            );
                          })}
                    </div>
                  )}
                  <Image
                    src={Search}
                    alt="login"
                    width={15}
                    height={15}
                    className={styles.searchIcon}
                  />
                </InputGroup>
              </Collapse>
              <Button className={styles.btnPrimary}>
                <Image src={Login} alt="login" width={12} height={12} />
                Login
              </Button>
            </Form>
            <Dropdown as={ButtonGroup} align="end">
              <Dropdown.Toggle
                id="dropdown-custom-1"
                className="bg-transparent border-0 text-secondary langDropdown"
              >
                <Image src={English} alt="login" width={20} height={20} />
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu className="">
                <Dropdown.Item eventKey="1">ES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </SSRProvider>
    </header>
  );
};

export default Header;
