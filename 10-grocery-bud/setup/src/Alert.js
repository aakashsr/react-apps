import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert ,items}) => {
  useEffect(() => {
    let showToaster = setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
    return () => clearTimeout(showToaster);
  },[items]);
  if (type === "success") {
    return <p className="alert alert-success">{msg}</p>;
  }

  if (type === "danger") {
    return <p className="alert alert-danger">{msg}</p>;
  }
};

export default Alert;
