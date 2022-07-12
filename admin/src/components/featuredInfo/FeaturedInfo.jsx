import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const { data } = await userRequest.get("orders/income");
        const sortedData = data.sort((a, b) => a._id - b._id) 
        setIncome(sortedData);
        setPerc((data[data?.length - 1].total * 100) / data[data?.length - 2].total - 100);
      } catch (error) {
        console.log(error);
      }
    };

    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {income[income?.length - 1]?.total}</span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)}%{" "}
            {perc < 1 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
