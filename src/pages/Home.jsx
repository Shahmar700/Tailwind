import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
function Home() {
  const selector = useSelector((state) => state.dataReducer);
  let { id } = useParams();
  // console.log(selector);
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between text-mycolors-dark mt-10 flex-wrap">
        {selector &&
          selector.map((data, key) => (
            <div
              key={key}
              className="hover:drop-shadow-2xl duration-200 w-full sm:w-0.48 lg:w-0.32 xl:w-0.24 bg-gray-400 rounded-lg overflow-hidden mb-10"
            >
              <div className="w-full h-240 sm:h-200 lg:h-230">
                <img className="w-full h-full object-cover" src={data.image} />
              </div>
              <div className="p-2 md:p-4 w-full">
                <h2 className="text-2xl font-bold">{data.name}</h2>
                <h4 className="text-xl font-semibold">${data.price}</h4>
              </div>
              <div className="w-full text-center py-2 bg-mycolors-dark">
                <Link to={`details/${data.id}`}>
                  <button className="w-2/4 bg-mycolors-mybtn mx-auto rounded-md py-1 text-lg font-bold hover:bg-gray-400 hover:text-white ease-linear duration-200">
                    More
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* <div className="w-11/12 mx-auto flex justify-between text-mycolors-dark mt-10 flex-wrap">

      <div className="hover:scale-1005 hover:drop-shadow-2xl duration-200 w-0.23 bg-gray-400 rounded-lg overflow-hidden mb-10">
        <div>
          <img src="https://images.unsplash.com/photo-1672274388119-8676d270acfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
        <div className="p-4 w-full">
          <h2 className="text-2xl font-bold">Demo 1</h2>
          <h4 className="text-xl font-semibold">$15000</h4>
        </div>
        <div className="w-full text-center py-2 bg-mycolors-dark">
          <button className="w-2/4 bg-mycolors-mybtn mx-auto rounded-md py-1 text-lg font-bold hover:bg-gray-400 hover:text-white ease-linear duration-200">
            More
          </button>
        </div>
      </div>
      
    </div> */}
    </>
  );
}

let t = (s) => s;
export default connect(t)(Home);
