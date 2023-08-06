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
                    img: "https://p4.itc.cn/q_70/images03/20200618/671cdcd8706640eeb0cfc428825a1897.jpeg",
                    title: '厌女(增订本)',
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮',
                    people: 3000,
                },
                {
                    xuihao: 2,
                    img: "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1219%2F26d199f5j00r4c8cg000tc000eq00jlg.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
                    title: '法治的细节',
                    people: 2800,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 3,
                    img: "https://weread-1258476243.file.myqcloud.com/weread/cover/43/cpplatform_uksuobynut7k8guvdp7jpb/t6_cpplatform_uksuobynut7k8guvdp7jpb1690794764.jpg",
                    title: '快乐上等：女性怎样自在地活',
                    people: 2700,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 4,
                    img: "https://img57.ddimg.cn/10122421837.jpg",
                    people: 3000,
                    title: '乡土中国',
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 5,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2e9d566d-ec1a-463c-b993-c32e102cefb1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742316&t=14e30306df117f8732c68f9a92028b2c",
                    people: 2231,
                    title: '始于极限:女性主义往复书简',
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 6,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1a81b242-9603-459e-ab5e-8b3d24c3d6a5%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742362&t=543cdb3fd3839c24e3f7100316c9310f",
                    title: '枪炮、病菌与钢铁',
                    people: 2100,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },

                {
                    xuihao: 7,
                    img: "https://5b0988e595225.cdn.sohucs.com/images/20180903/c0b7847167494090bbb259105c337be7.jpeg",
                    title: '小镇喧嚣:一个乡镇政治运作的演绎与阐释',
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮',
                    people: 1900,
                },
                {
                    xuihao: 8,
                    img: "https://img14.360buyimg.com/pop/jfs/t1/199235/6/33799/41350/645a0dc7F8fb59805/4a77f80197155584.jpg",
                    title: '圆圈正义:作为自由前提的信念',
                    people: 1300,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 9,
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F0e52fd9b-ea3e-408e-8e99-b685eee6abaa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742500&t=70894c850ae8221098486ffa73f8703f",
                    title: '刑法学讲义(法律男神)',
                    people: 1000,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 10,
                    img: "https://img0.baidu.com/it/u=118917471,140785797&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
                    people: 900,
                    title: '从零开始的女性主义',
                    author: '上野千鹤子',
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