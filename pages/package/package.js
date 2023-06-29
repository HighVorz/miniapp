Page({
    data:{
        title: '我的卡包'
    },
    
    return: function(){
        wx.navigateTo({
          url: '../home/home',
        })();
    }
})