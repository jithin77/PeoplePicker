const getListItembyId = async (listname, ID) => {
    const resp = await fetch(`/sites/Jithin-Dev/_api/web/lists/GetByTitle('${listname}')/items('${ID}')`, 
    {
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json; odata=verbose"
        },
    });
    const data = await resp.json();
    //console.log(data.d);
    return data.d;
 }

export default getListItembyId;
