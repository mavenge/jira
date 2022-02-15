import React, { useState, useEffect } from 'react';
import qs from 'qs'

import Search from './components/Search';
import List from './components/List';

import { cleanEmpty } from 'utils/cleanEmpty';
import {useDebounce, useMount} from 'utils/hooks'

const baseUrl = process.env.REACT_APP_API_URL

function SearchList() {

  const [params, setParams] = useState({
    name: '',
    personId: '',
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debounceParams = useDebounce(params, 500)

  useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(cleanEmpty(debounceParams))}`).then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParams]);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <>
      <Search params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </>
  );
}

export default SearchList;
