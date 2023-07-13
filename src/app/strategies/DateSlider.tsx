"use client";
import "keen-slider/keen-slider.min.css";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  fetchOptionStrategySelection,
  optionStrategiSelectionData,
} from "@/redux/slices/optionStrategySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxCommon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  fetchOptionGreek,
  optionGreekData,
} from "@/redux/slices/optionGreekSlice";

const DateSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [dateSelected, setDateSelected] = useState<any>();
  const [expirationDate, setExpirationDate] = useState("");
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: "auto",
      spacing: 15,
    },
    created() {
      setLoaded(true);
    },
  });

  const dispatch = useAppDispatch();
  const optionStrategiSelectionDates: any = useAppSelector(
    optionStrategiSelectionData
  );
  const selectedExpirationDate: any = useAppSelector(optionGreekData);
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("q");
  const expiration: string | null = searchParams.get("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (search) {
      dispatch(fetchOptionStrategySelection(search));
    }
  }, [search]);

  useEffect(() => {
    if (optionStrategiSelectionDates?.date?.length > 0) {
      setExpirationDate(optionStrategiSelectionDates.date[0]);
    }
  }, [search, optionStrategiSelectionDates]);

  useEffect(() => {
    if (search && expirationDate) {
      router.push(
        `${pathname}?q=${search}&expiration=${expirationDate}&greeks=true`
      );
      dispatch(
        fetchOptionGreek({ searchKey: search, expiration: expirationDate })
      );
    }
  }, [search, expirationDate]);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: any = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const handleDateData = (search: any, expiration: any) => {
    if (search && expiration) {
      setExpirationDate(expiration);
    }
  };

  return (
    <div className="navigation-wrapper strategies-slide">
      <div ref={sliderRef} className="keen-slider">
        {optionStrategiSelectionDates?.date?.map((item: any) => {
          return (
            <div
              className="keen-slider__slide"
              onClick={() => handleDateData(search, item)}
            >
              {formatDate(item)}
            </div>
          );
        })}
      </div>
      {loaded && instanceRef?.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef?.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef?.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef?.current?.track?.details?.slides?.length - 1
            }
          />
        </>
      )}
    </div>
  );
};

function Arrow(props: {
  disabled?: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <span
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
    >
      {props.left && <span className="icon-arrow"></span>}
      {!props.left && <span className="icon-arrow"></span>}
    </span>
  );
}

export default DateSlider;
