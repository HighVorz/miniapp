Page({
    data:{
        food: {
            id: 1,
            name: '奥尔良烤翅',
            price: 12,
            tag: '人气热卖'
        },

        toView: 'default',

        poster1: '/images/menu-poster1.jpg',
        poster2: '/images/menu-poster2.jpg',
        poster3: '/images/menu-poster3.jpg',

        taglist:[
            {
                tag: '人气热卖',
                foodlist:[
                    {
                        food: 'hamburg',
                        price: 32,
                        img: '/images/food1.jpg',
                        tag: '人气热卖'
                    },
                    {
                        food: 'hamburg',
                        price: 32,
                        img: '/images/food1.jpg',
                        tag: '人气热卖'
                    }
                ]
            },
            {
                tag: '灵魂宵夜',
                foodlist:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
                        tag: '灵魂宵夜'
                    }
                ]
            },
            {
                tag: 'OK餐单人餐',
                foodlist:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
                        tag: '灵魂宵夜'
                    }
                ]
            },
            {
                tag: '多人餐',
                foodlist:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
                        tag: '灵魂宵夜'
                    }
                ]
            },
            {
                tag: '全鸡',
                foodlist:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
                        tag: '灵魂宵夜'
                    }
                ]
            },
            {
                tag: '炸鸡小食',
                foodlist:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
                        tag: '灵魂宵夜'
                    }
                ]
            },
        ],

        price: 0,

        list:{
            food1: 3,
            food2: 4,
        }

    },

    scroll: function(e){
        this.setData({
            toView: 'view' + e.currentTarget.dataset.smile,
       })
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