Page({
    data:{
        list: [
            {
                img: '/images/icon-order-red.png',
                content: '我的订单',
                url: '../order/order',
            },
            {
                img: '/images/icon-package-red.png',
                content: '我的卡包',
                url: '../package/package'
            },
            {
                img: '/images/icon-vipCode-red.png',
                content: '会员码',
                func: 'to',
                url: '../vipcode/vipcode'
            },
            {
                img: '/images/icon-guide-red.png',
                content: '在线客服',
                func: 'to',
                url: '../guide/guide'
            },
            {
                img: '/images/icon-privacy-red.png',
                content: '隐私政策',
                func: 'to',
                url: '../privacy/privacy'
            },
            {
                img: '/images/icon-help-red.png',
                content: '帮助中心',
                func: 'to',
                url: '../help/help'
            },
            {
                img: '/images/icon-warning-red.png',
                content: '如何自助点餐?',
                func: 'to',
                url: '../order/order'
            },
            {
                img: '/images/icon-warning-red.png',
                content: '会员工作日午餐时间说明',
                func: 'to',
                url: '../order/order'
            },
        ]
    },
    to: function(e){
        wx.navigateTo({
          url: e.currentTarget.dataset.smile.url,
        })
    },

    return: function(){
        wx.navigateTo({
          url: '../home/home',
        })
    }
})