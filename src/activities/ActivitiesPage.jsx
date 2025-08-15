import { useState } from "react";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  //getting the token
  const { token } = useAuth();

  //call the function
  const { data: activity, error, loading } = useQuery("/activities");

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>

      <div>
        {activity?.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            {token && <button onClick={() =>(console.log(`${item.description}`))}>Delete</button>}
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}
