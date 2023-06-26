Page({

    data: {
        // need to be edit later
        poster: 'http://47.115.231.44/images/poster.jpg',
        user: {
            name: '暴走的全家桶',
            avatar: 'http://47.115.231.44/images/user.jpg'
        },
        shop: {
            address: '聚丰-51187272',
            address_detail: '聚丰园路165号',
            time: '营业时间: 06:00-23:00',
        }

    },

    getAvartar(){
        wx.request({
            url: 'http://47.115.231.44/images/user.jpg',
            method: 'GET',
            success: (res)=>{
                wx.saveFile({
                  tempFilePath: 'res.tempFilePaths',

                })
            }
        })
    },

    getUserProfile() {
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: (res) => {
                console.log("获取用户信息成功", res)
                let user = res.userInfo;
                app.globalData.userInfo = res.userInfo;
                wx.setStorageSync('user', user)
                this.setData({
                    isShowUserName: true,
                    userInfo: user,
                    avatar: res.userInfo.avatarUrl,
                });
                this.assignPicChoosed();
            },
            fail: res => {
                console.log("获取用户信息失败", res)
            }
        })
    },

    toMenu: function(){
        wx.navigateTo({
          url: '../menu/menu',
        })
    },
    // 只触发一次
    onLoad(options) {
        
    },


    // 从后台进入前台显示
    onShow(){

    },

    // 前台进入后台
    onHide(){

    },

})