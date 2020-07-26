const getListItems = async (listname) => {
    const resp = await fetch(`/sites/Jithin-Dev/_api/web/lists/GetByTitle('${listname}')/items')`, {
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json; odata=verbose"
        },
    });
    const data = await resp.json();
    //console.log(data.d.results);
    return data.d.results;
 }

export default getListItems;