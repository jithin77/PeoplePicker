const getListName = async (listname) => {
  const resp = await fetch(`/sites/Jithin-Dev/_api/web/lists/GetByTitle('${listname}')`, {
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json; odata=verbose"
    },
  });

  const data = await resp.json();
  return data;
}

export default getListName;