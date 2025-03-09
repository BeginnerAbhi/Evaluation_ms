function createFunctionRegistry()
{
    const functions=[];
    
    //register the functions
    function registerFunctions(name, fn)
    {
        this.name=name;
        this.function=fn;
    }

    //execute the functions
    function executeFunction(name,args,context=null)
    {
        const execute= executeFunction.apply(...args);
    }

    //Transforming data 
    function mapFunction(name,dataArray)
    {
       
      return  dataArray.map(transform=> fn=executeFunction(name));
    }

    //filer the Data
    function filterFunction(name,dataArray)
    {
        return dataArray.filer(data=> data.executeFunction(name)==true);
    }

    //reduce the data
    function reduceFunction(name,dataArray,initialValue)
    {
        return dataArray.reduce(data=> (acc,val)=acc+val,0);
    }
    
    //executing asynchronously
    function executeFunctionAsync(name,args,delay)
    {
        return new Promise(resole)
        {
            setTimeout(()=>{
                executeFunctionAsync();
            },delay);
        }
    }

    //export functions
    function exportFunctions()
    {
        return JSON.stringify(functions);
    }
}