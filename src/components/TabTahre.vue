
<template>
    <!-- 这是排行页面 -->
    <div id="BookRankingbox">
        <div id="BookRankingbox_top">
            <div class="BookRankingbox_top_son" v-for="(item, index) in BookRanking" :key="index">
                <div class="BookRankingbox_top_sonimg">
                    <img :src="item.img" alt="">
                </div>
                <div class="BookRankingbox_top_sonyou">
                    <p><span>{{ item.xiyao }}&nbsp;&nbsp;</span>{{ item.bookming }}</p>
                    <p style="color: #878E97;"> &nbsp;&nbsp;&nbsp;{{ item.zuozhe }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            BookRanking: [
                {
                    img: 'https://img0.baidu.com/it/u=3480231300,2577881851&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    xiyao: 1,
                    bookming: '资本的秘密',
                    zuozhe: '赫尔南多·德·索托'
                },
                {
                    img: 'https://weread-1258476243.file.myqcloud.com/weread/cover/43/cpplatform_uksuobynut7k8guvdp7jpb/t6_cpplatform_uksuobynut7k8guvdp7jpb1690794764.jpg',
                    xiyao: 2,
                    bookming: '快乐上等：女性怎样自在地活',
                    zuozhe: '上野千鹤子 汤山玲子'
                },
                {
                    img: 'https://img14.360buyimg.com/pop/jfs/t355/241/2058037946/137223/4073d1d0/544e1f92N49e316f1.jpg',
                    xiyao: 3,
                    bookming: '挣脱',
                    zuozhe: '刘任侠'
                },
                {
                    img: 'https://img1.baidu.com/it/u=4038546253,244914527&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    xiyao: 4,
                    bookming: '法医秦明：白卷',
                    zuozhe: '法医秦明'
                },
                {
                    img: 'http://t13.baidu.com/it/u=3080994591,4118980810&fm=224&app=112&f=JPEG?w=500&h=500',
                    xiyao: 5,
                    bookming: '宋慈洗冤笔记',
                    zuozhe: '一枚铜钱'
                },
                // 
                {
                    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1b48c78f-d836-4c92-99d2-fd2a1fb381c9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693741944&t=db332e2e6fa9909c5284aaf755af96b1',
                    xiyao: 6,
                    bookming: '长安的荔枝',
                    zuozhe: '马伯庸'
                },
                {
                    img: 'https://img50.ddimg.cn/198550084570740.jpg',
                    xiyao: 7,
                    bookming: '三体',
                    zuozhe: '刘慈欣'
                },
                {
                    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F74b068d9-bd7a-4f5b-85ed-6d3fd130c153%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693742042&t=990f2998d57953d034070aa95d0c578c',
                    xiyao: 8,
                    bookming: '明朝那些事儿',
                    zuozhe: '当年明月'
                },
                {
                    img: 'https://img1.baidu.com/it/u=1584727091,2567807774&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
                    xiyao: 9,
                    bookming: '地铁三部曲',
                    zuozhe: '德米特里·格鲁霍夫斯基'
                },
                {
                    img: 'https://img2.baidu.com/it/u=3338606810,1871554748&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
                    xiyao: 10,
                    bookming: '让人拍案叫绝的中国史',
                    zuozhe: '渤海小吏'
                },
            ]
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#BookRankingbox {
    width: 100%;
    height: 100vh !important;
}

#BookRankingbox_top {
    width: 90%;
    margin: auto;
    height: 76vh;
    line-height: 25px;

    .BookRankingbox_top_sonyou {
        margin-top: -15px;

        p:nth-child(2) {
            -webkit-line-clamp: 1;
            /* 设置几行  */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .BookRankingbox_top_son {
        display: flex;
        margin-bottom: 10px;
        width: 100%;
        height: 90px;

        img {
            width: 60px;
            height: 80px;
        }
    }
}
</style>