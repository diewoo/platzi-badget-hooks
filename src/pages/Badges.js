import React, { useState, useEffect } from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
//import MiniLoader from "../components/MiniLoader";
import { Link } from "react-router-dom";

import api from "../api";
const Badges = () => {
  const [data, setData] = useState({
    data: undefined,
    error: null,
    loading: true,
  });
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [data]);
  const fetchData = async () => {
    try {
      const response = await api.badges.list();
      setData({ ...data, data: response, loading: false });
    } catch (error) {
      console.log(error);
      setData({ ...data, loading: false });
    }
  };
  return (
    <>
      {data.error ? (
        <>Hay un error {data.error.message}</>
      ) : (
        <>
          {data.loading === true ? (
            <PageLoading />
          ) : (
            <>
              <div className='Badges'>
                <div className='Badges__hero'>
                  <div className='Badges__container'>
                    <img
                      className='Badges_conf-logo'
                      src={confLogo}
                      alt='confLogo'
                    />
                  </div>
                </div>
              </div>
              <div className='Badges__container'>
                <div className='Badges__buttons'>
                  <Link to='/badges/new' className='btn btn-primary'>
                    New Badge
                  </Link>
                </div>
                <BadgesList data={data} />
                {/* {data.loading === true && <MiniLoader />} */}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Badges;
