import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState("");
  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCoin(data.data.coin));
  }, [id]);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          {coin ? (
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-none">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-md">
                  <img src={coin.iconUrl} alt={coin.name} />
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {coin.name}
              </h2>
              <p className="mt-6 text-lg text-gray-500">{coin.description}</p>
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Current Price
                    </dt>
                    <dd
                      className={`order-1 text-2xl font-bold  sm:text-3xl sm:tracking-tight`}
                    >
                      &#36;{parseFloat(coin.price).toFixed(2).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Change in 24H
                    </dt>
                    <dd
                      className={`order-1 text-2xl font-bold  ${
                        coin.change > 0 ? " text-green-600" : "text-red-600"
                      } sm:text-3xl sm:tracking-tight`}
                    >
                      {coin.change > 0 ? "+" : ""}
                      {coin.change}%
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Rank
                    </dt>
                    <dd
                      className={`order-1 text-2xl font-bold text-[${coin.color}] sm:text-3xl sm:tracking-tight`}
                    >
                      {coin.rank}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ) : (
            <>
              <h1 className="py-12 font-bold text-center text-2xl animate-pulse">
                Fetching please wait .....
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
