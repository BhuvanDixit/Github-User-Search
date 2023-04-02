import SearchBox from '../SearchBox';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const SearchBoxContainer = () => {
  const APIURL = 'https://api.github.com/search/users';

  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiLimitExceed, setApiLimitExceed] = useState(false);

  // const getSearchedUsers = () => {
  //   if (text === '') {
  //     setUsers([]);
  //   } else {
  //     setLoading(true);
  //     axios
  //       .get(APIURL + '?q=' + text)
  //       .then((res) => {
  //         setLoading(false);
  //         setUsers(res.data.items);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setApiLimitExceed(true);
  //         setTimeout(() => {setApiLimitExceed(false)}, 10000);
  //       })
  //       .finally(() => {
  //         if (text === '') setUsers([]);
  //       });
  //   }
  // };

  const handleChange= (event) => {
    setText(event.target.value);
  };

  let id;

  const debouncedOnChange = (event) => {
    clearTimeout(id);

    id = setTimeout(() => handleChange(event), 500);
  };

  useEffect(() => {
    const getSearchedUsers = () => {
      if (text === '') {
        setUsers([]);
      } else {
        setLoading(true);
        axios
          .get(APIURL + '?q=' + text)
          .then((res) => {
            setLoading(false);
            setUsers(res.data.items);
          })
          .catch((err) => {
            setLoading(false);
            setApiLimitExceed(true);
            setTimeout(() => {setApiLimitExceed(false)}, 10000);
          })
          .finally(() => {
            if (text === '') setUsers([]);
          });
      }
    };
    getSearchedUsers();
  }, [text]);

  return (
    <SearchBox inputOnChange={debouncedOnChange} users={users} text={text} loading={loading} apiLimitExceed={apiLimitExceed} />
  );
};
