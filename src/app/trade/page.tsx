"use client";
import Image from "next/image";
import { Tab, Tabs, Card, Button, SSRProvider } from "react-bootstrap";
import Stock from "./stock";
import Strategies from "./strategies";
import Chains from "./chains";
import Logo from "@/assets/images/apple.svg";
import Wishlist from "@/assets/images/wishlist.svg";
import styles from "@/styles/trade.module.scss";
import {
  fetchWatchlistGraph,
  watchlistGraphData,
} from "@/redux/slices/watchlistSlice";
import {
  closeMarketGraphData,
  fetchCloseMarketData,
} from "@/redux/slices/closeMarketSlice";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxCommon";
import { fetchTradeData, tradingData } from "@/redux/slices/tradeDataSlice";
import { useEffect, useState } from "react";
import { tradingGraphData } from "@/redux/slices/tradeGraphSlice";

const Trade = () => {
  const dispatch = useAppDispatch();
  const valuesForTrade: any = useAppSelector(tradingData);
  const tradingGraph: any = useAppSelector(tradingGraphData);
  const watchlistGraph: any = useAppSelector(watchlistGraphData);
  const closeMarketGraph: any = useAppSelector(closeMarketGraphData);
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("q");
  const [activeTab, setActiveTab] = useState("stocks");

  useEffect(() => {
    // dispatch(fetchTradeDataofGraph());
    dispatch(fetchWatchlistGraph());
    dispatch(fetchCloseMarketData());
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchTradeData(search));
    }
  }, [search]);
  const tradeDataMap = valuesForTrade.filter(
    (item: any) => item?.symbol === search
  );

  const handleTabs = (tabKey: string | null) => {
    if (tabKey !== activeTab && tabKey) {
      setActiveTab(tabKey);
    }
  };

  return (
    <SSRProvider>
      <>
        <main className="main-container">
          <Card className="trade">
            <Card.Header className="d-flex align-items-center">
              <figure className={styles.stockInfo}>
                <div className={styles.stockLogo}>
                  <Image
                    src={
                      !search
                        ? "../assets/images/apple.svg"
                        : `https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${search}.png`
                    }
                    alt="Picture of the author"
                    fill={true}
                  />
                </div>
                <div className={styles.info}>
                  <figcaption>
                    {!search ? "Apple Inc" : tradeDataMap[0]?.description}
                  </figcaption>
                  <span>
                    NASDAQ:{!search ? "NASDAQ" : tradeDataMap[0]?.symbol}{" "}
                  </span>
                </div>
              </figure>
              <Button variant="outline-primary ms-auto">
                <Image
                  src={Wishlist}
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </Button>
            </Card.Header>
            <Card.Body className="tradeContent">
              <Tabs
                activeKey={activeTab}
                onSelect={handleTabs}
                id="justify-tab-example"
                className="mainTabs"
              >
                <Tab eventKey="stocks" title="Stocks">
                  {activeTab === "stocks" && <Stock />}
                </Tab>
                <Tab eventKey="option-strategies" title="Option strategies">
                  {activeTab === "option-strategies" && <Strategies />}
                </Tab>
                <Tab eventKey="chains" title="Chains">
                  {activeTab === "chains" && <Chains />}
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </main>
      </>
    </SSRProvider>
  );
};
export default Trade;
