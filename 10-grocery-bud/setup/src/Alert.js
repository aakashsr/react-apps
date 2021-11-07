import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert, items }) => {
  useEffect(() => {
    let showToaster = setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
    return () => clearTimeout(showToaster);
  }, [items]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
