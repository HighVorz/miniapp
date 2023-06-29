Page({
    data:{
        food: {
            id: 1,
            name: '奥尔良烤翅',
            price: 12,
        },

        poster1: '/images/menu-poster1.jpg',
        poster2: '/images/menu-poster2.jpg',
        poster3: '/images/menu-poster3.jpg',

        anchorlist:[
            '人气\n热卖',
            '灵魂\n宵夜',
            'OK餐\n单人餐',
            '多人餐',
            '全鸡',
            '炸鸡\n小食',
        ],

        price: 0,

        list:{
            food1: 3,
            food2: 4,
        }

    },

    count: function(){
        var price = 0;
        for(i in list){
            price += i.price;
        }
        return price;
    },

    setPrice: function(){
        this.setData({
            price: this.count()
        })

        console.log("the price is "+this.price);
    },
    
    addFood: function(){
        
    },

    return: function(){
        wx.navigateTo({
          url: '../home/home',
        })();
    }
})