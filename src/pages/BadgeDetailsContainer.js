import React, { useState, useEffect } from "react";

import PageLoading from "../components/PageLoading";
import BadgeDetails from "./BadgeDetails";
import PageError from "../components/PageError";

import api from "../api";
const BadgeDetailsContainer = (props) => {
  const [data, setData] = useState({
    data: undefined,
    error: null,
    loading: true,
  });
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (e) => {
    setmodalIsOpen(true);
  };

  const handleCloseModal = (e) => {
    setmodalIsOpen(false);
  };

  const handleDeleteBadge = async (e) => {
    try {
      await api.badges.remove(props.match.params.badgeId);
      setData({ ...data, data: data, loading: false });
      props.history.push("/badges");
    } catch (error) {
      console.log(error);
      setData({ ...data, error: error.message, loading: false });
    }
  };
  const fetchData = async () => {
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setData({ ...data, data: data, loading: false });
    } catch (error) {
      console.log(error);
      setData({ ...data, error: error.message, loading: false });
    }
  };
  return (
    <>
      {data.error ? (
        <PageError error={data.error} />
      ) : (
        <>
          {data.loading === true ? (
            <>
              <PageLoading />
            </>
          ) : (
            <>
              <BadgeDetails
                onCloseModal={handleCloseModal}
                onOpenModal={handleOpenModal}
                modalIsOpen={modalIsOpen}
                onDeleteBadge={handleDeleteBadge}
                data={data}
              />
              ;
            </>
          )}
        </>
      )}
    </>
  );
};

export default BadgeDetailsContainer;
