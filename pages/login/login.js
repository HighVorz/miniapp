Page({


    data: {

    },

    getInfo(){
        wx.request({
          url: 'https://www.escook.cn/api/get',
          method: 'GET',
          data: {
              name: 'zs',
              age: 20
          },
          success: (res)=>{
              console.log(res)
          }
        })
    },

    

})