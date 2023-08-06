<template>
    <!-- 这是文学艺术页面 -->
    <div id="bookCharacterbox">
        <div class="bookCharacterbox_box" v-for="(item, index) in bookCharacter" :key="index">
            <div class="bookCharacterbox_box_zuo"></div>
            <div class="box_zuo_aracter">
                <h3>{{ item.xuihao }}</h3>
            </div>
            <div class="box_you_aracter">
                <div class="box_you_aracter_img">
                    <img :src="item.img" alt="">
                </div>
                <div class="box_you_aracter_wenzi">
                    <p>{{ item.title }}</p>
                    <p>{{ item.author }}</p>
                    <p>{{ item.spell }}<span>【{{ item.easy }}】</span></p>
                </div>

            </div>
            <div class="bookCharacterbox_box_you">
                <p>{{ item.people }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bookCharacter: [
                {
                    xuihao: 1,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ff29ad38a-0b7b-4153-9ac6-51da1b8d6192%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742635&t=9a6d16a43221114f0a4f50b67b12aca5",
                    title: '纳瓦尔宝典',
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮',
                    people: 2200,
                },
                {
                    xuihao: 2,
                    img: "https://img2.baidu.com/it/u=93366619,3875700480&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
                    title: '富爸爸穷爸爸',
                    people: 2100,
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 3,
                    img: "http://t13.baidu.com/it/u=3021779037,3963539582&fm=224&app=112&f=JPEG?w=356&h=500",
                    title: '资本的秘密',
                    people: 1800,
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 4,
                    img: "http://t15.baidu.com/it/u=2189074274,1319323991&fm=224&app=112&f=JPEG?w=500&h=500",
                    people: 1600,
                    title: '告别百年激进',
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 5,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F4fb3e488-a160-538e-8e0f-a26e06242af5%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742851&t=d14272c673e7cb89649954abb14b9ac2",
                    people: 1560,
                    title: '原则',
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 6,
                    img: "http://t13.baidu.com/it/u=3802358244,3050300056&fm=224&app=112&f=JPEG?w=500&h=500",
                    title: '芯片战争',
                    people: 1390,
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },

                {
                    xuihao: 7,
                    img: "https://img1.baidu.com/it/u=3969014036,1895478142&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=874",
                    title: '国富论',
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮',
                    people: 1123,
                },
                {
                    xuihao: 8,
                    img: "https://img0.baidu.com/it/u=2280859248,2934676279&fm=253&fmt=auto&app=138&f=JPEG?w=452&h=5961",
                    title: '干法',
                    people: 1098,
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 9,
                    img: "https://img1.baidu.com/it/u=2375823150,1611406050&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=644",
                    title: '卓有成效的管理者',
                    people: 988,
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 10,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F43de92f5-7808-4a11-9ceb-6e1e4c7a37ec%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693743053&t=83f76b32cdad75d08824064bf2c295d3",
                    people: 899,
                    title: '百万富翁快车道',
                    author: '埃里克·乔根森',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
            ]
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#bookCharacterbox {
    width: 100%;
}

.bookCharacterbox_box {
    width: 90%;
    margin: auto;
    height: 120px;
    display: flex;
    margin-bottom: 16px;

    .bookCharacterbox_box_you {
        width: 60px;
        text-align: center;
        margin-top: 15px;
        font-size: 13px;
        // margin-left: 50px;
        line-height: 0px;
        border-radius: 50px;
        color: #9DA4AE;
        height: 25px;
        background-color: #F6F6F6;
    }

    .box_zuo_aracter {
        padding: 5px;
        line-height: 90px;
        margin-left: -10px;
    }

    .box_you_aracter_wenzi {

        width: 200px;
        margin-left: 10px;
        margin-top: 10px;
        line-height: 14px;

        span {
            color: #F86E4B;
            font-weight: 900;
        }

        p:nth-child(1) {
            font-weight: 900;
        }

        p:nth-child(3) {
            font-size: 12px;
        }
    }

    .box_you_aracter {
        display: flex;
    }

    img {
        width: 70px;
        height: 100px;
        margin-top: 10px;
    }
}
</style>