"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@/styles/trade.module.scss";
import Button from "react-bootstrap/Button";
import Up from "@/assets/images/up.svg";
import Down from "@/assets/images/down.svg";
import Buy from "@/assets/images/buy.svg";
import Sell from "@/assets/images/sell.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxCommon";
import { fetchTradeData, tradingData } from "@/redux/slices/tradeDataSlice";
import { exchData } from "../../utils/exchangeValueConstants";
import { SSRProvider } from "react-bootstrap";
import { todayDate, yesterdayDate } from "@/utils/dates";

const TradeChart = dynamic(() => import("@/components/charts/tradestocks"), {
  ssr: false,
});

const Stock = () => {
  const valuesForTrade: any = useAppSelector(tradingData);
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("q");
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (search) {
      router.push(`/trade?q=${search}&start=${yesterdayDate}&end=${todayDate}`);
    }
  }, [search]);

  useEffect(() => {
    if (search) {
      dispatch(fetchTradeData(search));
    }
  }, [search]);
  const tradeDataMap = valuesForTrade.filter(
    (item: any) => item?.symbol === search
  );
  const mapExchData: any = tradeDataMap[0]?.exch;
  const exchDataforLabel = exchData[mapExchData];
  return (
    <SSRProvider>
      <section className={styles.stockMain}>
        <div className="stockDetails">
          <ul>
            <li>
              <label>Exchange</label>
              <strong>
                {exchDataforLabel || "-"}
                {exchDataforLabel && " "}
                {tradeDataMap[0]?.symbol || "-"}
              </strong>
            </li>
            <li>
              <label>Today&#39;s Open</label>
              <strong>${tradeDataMap[0]?.open || "-"}</strong>
            </li>
            <li>
              <label>Previous Close</label>
              <strong>${tradeDataMap[0]?.prevclose || "-"}</strong>
            </li>
            <li>
              <label>Day Range</label>
              <strong>
                ${tradeDataMap[0]?.low || "-"}
                {tradeDataMap[0]?.low && "-"}${tradeDataMap[0]?.high || "-"}
              </strong>
            </li>
            <li>
              <label>Volume</label>
              <strong>{tradeDataMap[0]?.volume || "-"}</strong>
            </li>
          </ul>
          <div className={styles.btnGrp}>
            <Button variant="success">
              <Image
                src={Buy}
                alt="Picture of the author"
                width={12}
                height={12}
              />
              Buy Stock
            </Button>
            <Button variant="danger">
              <Image
                src={Sell}
                alt="Picture of the author"
                width={12}
                height={12}
              />
              Sell Stock
            </Button>
          </div>
        </div>
        <div className={styles.stockinformation}>
          <div className={styles.priceMain}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>{tradeDataMap[0]?.open || "-"}</span>
            <span className={styles.change}>
              $ {tradeDataMap[0]?.change || "-"} (
              {tradeDataMap[0]?.change_percentage || "-"})
              <Image src={Up} alt="Up" width={14} height={14} />
            </span>
          </div>
          {/* <div className='filterBtns'>
                    <Button variant="primary">1D</Button>
                    <Button variant="link">1M</Button>
                    <Button variant="link">3M</Button>
                    <Button variant="link">1Y</Button>
                    <Button variant="link">YTD</Button>
                </div> */}
        </div>
        <TradeChart />
      </section>
    </SSRProvider>
  );
};

export default Stock;
