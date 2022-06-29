import React, {useEffect, useState} from "react";
import {gql, useQuery} from '@apollo/client';


const AllTasksQuery = gql`
  query GetDogs {
    tasks {
      id
      title
      description
      status
    }
  }
`;

const Board = () => {
  const {data, loading, error} = useQuery(AllTasksQuery, {
    onCompleted: data => {
      console.log(data);
    }
  });
  return (
    <div>
      Board
    </div>
  )
}

export default Board