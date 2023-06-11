import { Service } from "../apiservices"; 

const getAll = async()=>{ 
  const params = { }; 
  const resp = await Service('entries', params, 'GET');
  const body = await resp.json();
  return body;
}

const getOne = async(id)=>{ 
  const params = { }; 
  const resp = await Service(`entries/${id}`, params, 'GET');
  const body = await resp.json();
  return body;
}

const save = async(payload)=>{ 
  const resp = await Service('entries', payload, 'POST');
  const body = await resp.json();
  return body;
}

export { getAll, getOne, save}
