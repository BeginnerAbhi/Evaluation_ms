function createOrderManager()
{
    //array to store orders
    const orders=[];

    //function to add the orders
    function addOrder(order)
    {
        orders.push(order);
    }

    //function to update the orders
    function updateOrder(id,newStatus)
    {
        order.status=newStatus;
    }

    //function to filter the orders
    function filterOrders(status)
    {
        return orders.filter((status)=>status=this.staus);
    }

    //function to sort the orders
    function sortOrders(date)
    {
        orders.sort(order.date);
    }

    //generate total revenue
    function getTotalRevenue()
    {
        return orders.reduce((acc,val)=>acc+ order.amont);
    }

    //export order as JSON
    function exportOrders()
    {
        JSON.stringify(orders);
    }

}