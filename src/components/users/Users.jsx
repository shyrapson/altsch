import React, { useEffect, useState } from "react";
import Error from "../../pages/Error";
import { PublicRequest } from "../../utils/requestMethod";
import Loading from "../Loading";
import Paginate from "../Paginate";
import User from "./User";

const People = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userPerpage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [wahala, setWahala] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const res = await PublicRequest.get("/?results=50");

        setUsers(res.data.results);
        setLoading(false);
      } catch (error) {
setLoading(false)
setWahala(true)
setError(error.message)

      }
    };
    fetchdata();
  }, []);

  const lastUserIndex = currentPage * userPerpage;
  const firstUserIndex = lastUserIndex - userPerpage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);
  const numberPages = Math.ceil(users.length / userPerpage)

  const Page = (pageIndex) => setCurrentPage(pageIndex);

  const nextpage=()=>{
    if(currentPage !==numberPages ){
      setCurrentPage(currentPage+1)
    }
    }
  const prevpage=()=>{
    if(currentPage !==numberPages ){
      setCurrentPage(currentPage-1)
    }
    }

  return (
    <div >
      {loading&& (<div>
        <Loading/>
      </div>)}<Error error={error} wahala={wahala}/>

      <div className="user__container">
      {currentUser.map((user, index) => (
        <User user={user} key={index} loading={Loading} />
      ))}
      </div>
     
      <Paginate
        userPerpage={userPerpage}
        totalUsers={users.length - 1}
        page={Page}
        prevpage={prevpage}
        nextpage={nextpage}
        loading={wahala}
        pageNum={currentPage}
      />
    </div>
  );
};

export default People;
