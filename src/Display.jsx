import React, { useState, useEffect } from "react"
import Card from "./Card"
import Pagination from "./Pagination"
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
// import axios from "axios"

function Display() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [page, setPage] = useState({})
  // let pageNumber = 8
  // function handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   setPage({ activePage: pageNumber });
  // }
  async function getData() {
    setLoading(true)
    const res = await fetch(`https://randomuser.me/api/`)
    try {
      const response = await res.json()
      const result = response.results
      const info = response.info
      setData(result)
      console.log(result)
      console.log(info)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }

  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center" }}>
        {
          loading ? <h1>loading....</h1> :
            data.map((item, idx) => {
              console.log(item)
              return (
                <Card data={item} key={idx} />
              )
            })
        }
        <div style={{ width: "15rem" }}>
          <Pagination
            UsersPerPage={1}
            totalUsers={5}
            currentPage={1}
            setCurrentPage={4}
          />
        </div>
      </div>
    </>
  )
}
export default Display;