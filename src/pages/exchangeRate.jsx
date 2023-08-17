import React, { useState, useEffect } from "react";
import http from "../services/httpServices";

const ExchangeRate = () => {
  const [data, setData] = useState({
    coins: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    setData({ ...data, loading: true });
    await http
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setData({ ...data, loading: false, coins: res.data, error: null });
      })
      .catch((err) => {
        setData({ ...data, loading: false, error: err.message });
      });
  };

  const render = () => {
    if (data.coins.length !== 0) {
      return data.coins.slice(0, 30).map((item, index) => {
        return (
          <div
            key={index}
            className="container flex items-center justify-between p-2 px-3 mt-5 text-white bg-white rounded-lg bg-opacity-10 backdrop-blur-3xl"
          >
            <span>{index + 1}</span>
            <div className="">
              <div className="flex items-center justify-between gap-x-4 ">
                <img
                  src={`https://currency.javadyousefi.com/icons/${item.symbol}.png`}
                  alt="icon"
                  className="w-[27px]"
                />
                <div className="flex flex-col ">
                  <span className="text-sm">
                    {item.name.split("").splice(0, 8)}
                  </span>
                  <span className="text-xs">{item.symbol.toUpperCase()}</span>
                </div>
              </div>
            </div>
            <span className="text-[14px]">
              $ {item.current_price.toFixed(2)}
            </span>
            <span
              className={
                Math.sign(item.price_change_percentage_24h) === -1
                  ? "text-red-500 text-[14px]"
                  : "text-green-500 text-[14px]"
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}
              <span className="ml-[1px] text-xs">%</span>
            </span>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className=" h-[calc(100vh-92px)] w-full overflow-y-scroll relative container">
        <div className="px-6">
          <div className="flex justify-between px-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-700">
            <span className="">#</span>
            <span className="">coin</span>
            <span className="">price</span>
            <span className="">24 h</span>
          </div>
          {data.loading && (
            <h1 className="mt-20 font-bold text-center text-white">
              Loading...
            </h1>
          )}
          {data.error && (
            <h1 className="mt-20 font-bold text-center text-white">
              {data.error}
            </h1>
          )}
          {render()}
        </div>
      </div>
    </div>
  );
};

export default ExchangeRate;
