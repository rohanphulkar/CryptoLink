import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Prices = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=${
        page == 1 ? 0 : page - 1
      }`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCoins(data.data.coins));
  }, [page]);
  return (
    <div>
      {/* Table Section */}
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6  lg:py-14 mx-auto"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
      >
        {/* Card */}
        {coins.length ? (
          <div className="flex flex-col">
            <div className="bg-white  rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Crypto Prices
                  </h2>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Name
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Current Price
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Market Capital
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Change in 24 Hours
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {coins.map((coin) => (
                    <tr key={coin.uuid}>
                      <td className="">
                        <div className="px-6 py-2">
                          <div className="flex items-center gap-x-2">
                            <img
                              src={coin.iconUrl}
                              alt={coin.id}
                              width={24}
                              height={24}
                            />
                            <div className="grow">
                              <span className="text-sm text-gray-600">
                                {coin.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-800 font-semibold">
                            &#36;{" "}
                            {parseFloat(coin.price).toFixed(2).toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-800 font-medium text-right">
                            &#36;{" "}
                            {parseFloat(coin.marketCap)
                              .toFixed(2)
                              .toLocaleString()}
                          </span>
                        </div>
                      </td>

                      <td className="">
                        <div className="px-6 py-2 flex gap-x-1">
                          <span
                            className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium  ${
                              coin.change > 0
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {coin.change > 0 ? "+" : ""}
                            {coin.change} %
                          </span>
                        </div>
                      </td>
                      <td className="">
                        <div className="px-6 py-2">
                          <Link
                            to={`/${coin.uuid}`}
                            className="text-sm text-blue-700 font-medium text-right"
                          >
                            Show Details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* End Table */}
            </div>
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                    type="button"
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                  >
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                  >
                    Next
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="py-12 font-bold text-center text-2xl animate-pulse">
            Fetching please wait .....
          </h1>
        )}

        {/* End Card */}
      </div>
      {/* End Table Section */}
    </div>
  );
};

export default Prices;
