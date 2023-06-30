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
            {
                tag: '人气热卖',
                list:[
                    {
                        food: 'hamburg',
                        price: 32,
                        img: '/images/food1.jpg',
                    },
                    {
                        food: 'hamburg',
                        price: 32,
                        img: '/images/food1.jpg',
                    }
                ]
            },
            {
                tag: '灵魂宵夜',
                list:[
                    {
                        food: 'else',
                        price: 32,
                        img: '/images/food2.jpg',
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