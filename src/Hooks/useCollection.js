import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";

/**
 *
 * this hook is uset to get data from a fireBase collection
 * gets:query => excemple for a query const q=query(collection Reference)
 * returns: an arrey of the documents in the collection
 * @param {firebase query} q
 * @returns [collection]
 */

export const useCollection = (q) => {
  const [data, setData] = useState([]);

  const getArreyData = async (q) => {
    //gets the data eng listn to
    await onSnapshot(q, (snapshot) => {
      console.log(snapshot);
      let _collectionData = [];
      snapshot.forEach((doc) => {
        console.log(doc);
        _collectionData.push({ ...doc.data(), id: doc.id });
      });
      // console.log(_collectionData);
      setData(_collectionData);
    });
  };

  useEffect(() => {
    getArreyData(q);
  }, []);
  // console.log(data);
  return { data };
};
