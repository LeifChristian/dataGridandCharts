let apicall = async () => {
 
    var config = {
      method: 'get',
      url: 'http://localhost:5000/',
      headers: { }
    };
    
    await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log(typeof(response?.data));
      dataArray = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
      // console.log(typeof(response));
      console.log(typeof(dataArray));
      const propertyValues = Object.values(dataArray);
      console.log(propertyValues[0], 'property');
    
    }
  