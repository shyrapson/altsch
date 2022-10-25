import React from "react";

const Paginate = ({
  totalUsers,
  userPerpage,
  page,
  nextpage,
  prevpage,
  loading,
  pageNum,
}) => {
  console.log(pageNum, "fff");
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerpage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {!loading && (
        <ul className="pageNumber">
          <li>
            <button onClick={prevpage} disabled={pageNum === 1} href="/#">
              prev
            </button>
          </li>
          {pageNumber.map((number) => (
            <li>
              <a onClick={() => page(number)} href="/#" className="pagenums">
                {number}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={nextpage}
              disabled={pageNum === totalUsers}
              href="/#"
            >
              next
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Paginate;
