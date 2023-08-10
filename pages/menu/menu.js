const app = getApp()

Page({
    data: {
        toView: 'default',
        swipers: [],
        foodlist: {},
        icon: {
            'orderbar': '/images/icon-hamburg.png'
        },
        expense: 0,
        total: 0,
        order: {},
        kinds: 0,
        detail_status: false,
        height: 0,
        detail_style: "hiden-detail",
        whole_style: "whole-before",
    },

    gotoSubmit: function(){
        let check = {
            order: this.data.order,
            expense: this.data.expense,
        }
        let checkStr = JSON.stringify(check)
        wx.navigateTo({
          url: '../menu/submit?check=' + checkStr,
        })
    },

    submit: function(){
        console.log(this.data.order);
        if(app.globalData.status != true){
            wx.showModal({
                title: '未登录',
                content: '请先登录',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else {
                    console.log('用户点击取消')
                  }
                }
              })
        }
        wx.request({
          url: app.globalData.submit,
          method: 'POST',
          data: {
              Order: this.data.order
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": app.globalData.token,
          },
        })
    },

    onLoad: function () {
        console.log("menu onLoad!");
        this.request();
    },

    request: function () {
        this.request_list();
        this.request_swipers();
    },

    request_list: function () {
        var that = this;
        wx.request({
            url: app.globalData.foodlist,
            method: 'GET',
            success: function (res) {
                that.setData({
                    foodlist: res.data.data,
                })
            }
        })
    },

    request_swipers: function () {
        var that = this;
        wx.request({
            url: app.globalData.swipers,
            method: 'GET',
            success: function (res) {
                console.log(res)
                that.setData({
                    swipers: res.data.data.swipers,
                })
            }
        })
    },

    

    scroll: function (e) {
        this.setData({
            toView: 'view' + e.currentTarget.dataset.smile,
        })
    },

    
    //#region  page navigator
    return: function () {
        wx.navigateBack();
    },

    gotoGuide: function(){
        wx.navigateTo({
          url: '../guide/guide',
        })
    },
    //#endregion

    //#region detail
    show_detail: function(){
        this.setData({
            detail_style: "show-detail",
            whole_style: "whole-after",
            detail_status: true,
            height: this.data.kinds * 100 + 150,
        })
    },

    hiden_detail: function(){
        this.setData({
            detail_style: "hiden-detail",
            whole_style: "whole-before",
            detail_status: false,
            height: 0,
        })
    },

    detail_button: function () {
        if(!this.data.detail_status){
            this.show_detail();
        }
        else{
            this.hiden_detail();
        }
    },

    addFood: function (e) {
        var food = e.target.dataset.id
        console.log(food)
        if (!(food.id in this.data.order)) {
            this.setData({
                ['order.' + food.id]: food,
                ['order.' + food.id + '.number']: 1,
                kinds: this.data.kinds + 1,
            })
        } else {
            var cnt = this.data.order[food.id].number;
            this.setData({
                ['order.' + food.id + '.number']: cnt + 1,
            })
        }
        var price = parseFloat(food.price)
        var exp = parseFloat(this.data.expense)
        exp = (price + exp).toFixed(2)
        var count = parseFloat(food.price)
        count = (count * this.data.order[food.id].number).toFixed(2)

        this.setData({
            expense: exp,
            ['order.' + food.id + '.count']: count,
            total: this.data.total + 1
        })
    },

    minusFood: function(e){
        var food = e.target.dataset.id
        var number = food.number;
        number = number - 1
        this.setData({
            ['order.' + food.id + '.number']: number,
            total: this.data.total - 1
        })

        var price = parseFloat(food.price)
        var exp = parseFloat(this.data.expense)
        exp = (exp - price).toFixed(2)
        var count = parseFloat(food.price)
        count = (count * number).toFixed(2)

        this.setData({
            expense: exp,
            ['order.' + food.id + '.count']: count,
        })

        // goods number
        if(number == 0){
            let new_order = this.data.order;
            delete new_order[food.id];
            console.log(new_order)
            this.setData({
                order: new_order,
                kinds: this.data.kinds - 1,
            })
            if(this.data.total == 0){
                this.hiden_detail()
            }
        }
    },

    add_button: function(e){
        this.addFood(e);
    },

    minus_button: function(e){
        this.minusFood(e);
    },

    clear: function(e){
        this.setData({
            total: 0,
            expense: 0,
            order: {},
            kinds: 0,
        })
        this.hiden_detail()
    },
    //#endregion
})