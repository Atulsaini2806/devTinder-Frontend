import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

  const fetchRequests = async () => {
     try{
        const response = await axios.get(BASE_URL + "/user/requests/received" , 
            {withCredentials: true});
        dispatch(addRequests(response.data.data));

     } catch (error) {
        console.error("Error fetching requests:", error);
     }
  };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return;

  if (requests.length === 0) return <h1> No Requests Found!!!</h1>;

  return (
    <div className="text-center my-5">
      <h1 className="text-bold text-3xl">Connection Requests</h1>

       {requests
                ?.filter(Boolean)
                .map((request) => {
               const { firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;

        return (
          <div key={request._id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"> 
            <div>
              <img
                alt="photo"  
                className="w-20 h-20 rounded-full "
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
                <button className="btn btn-primary my-2 ">Reject</button>
                <button className="btn btn-secondary my-2">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;