const customerController = require('../../controller/customer-controller');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000

const mockRequest = (sessionData) => {
    return {
      session: { data: sessionData },
    };
  };

  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

test('get Customer', async ()=>{

    const req = mockRequest();
    const res = mockResponse()
    await customerController.getCustomers(req,res)
    expect(res.status).toHaveBeenCalledWith(200);
})