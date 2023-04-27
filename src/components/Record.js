import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Table() {
  const [data, setData] = useState([]);
  const posts = () => {
    fetch("http://127.0.0.1:8000/posting_app/all_posts/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let arr = [];
        data = JSON.parse(data);

        for (let i = 0; i < data.length; i++) {
          arr.push({
            id: data[i].pk,
            post_message: data[i].fields.post_message,
            facebook: data[i].fields.facebook,
            linkedin: data[i].fields.linkedIn,
            twitter: data[i].fields.twitter,
            posting_time: data[i].fields.posting_time,
            post_done: data[i].fields.post_done,
          });
        }
        setData(arr);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    posts();
  }, []);
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  function social_icons(row) {
    let icons = [];
    if (row.facebook) {
      icons.push(<FontAwesomeIcon icon={faFacebook} />);
    }
    if (row.linkedin) {
      icons.push(<FontAwesomeIcon icon={faLinkedin} />);
    }
    if (row.twitter) {
      icons.push(<FontAwesomeIcon icon={faTwitter} />);
    }
    return <>{icons}</>;
  }
  const column = [
    { dataField: "id", text: "ID", headerStyle: { width: "5%" }, sort: true },
    { dataField: "post_message", text: "Text", headerStyle: { width: "65%" }, sort: true },
    {
      dataField: "social_fields",
      text: "Platforms",
      sort: true,
      headerStyle: { width: "10%" },
      formatter: (cellContent, row) => {
        return social_icons(row);
      },
    },
    { dataField: "posting_time", text: "PostTime", headerStyle: { width: "15%" }, sort: true },
    {
      dataField: "post_done",
      text: "Done",
      headerStyle: { width: "5%" },
      formatter: (cell, row) => {
        return <input type="checkbox" checked={cell} disabled />;
      },
      sort: true,
    },
  ];
  return (
    <div className="container">
      <BootstrapTable bootstrap4 keyField="id" data={data} columns={column} pagination={pagination} rowStyle={{ maxLines: 2 }} />
    </div>
  );
}

export default Table;
