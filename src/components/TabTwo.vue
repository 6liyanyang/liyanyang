<template>
    <div id="box">
        <ul>
            <li class="btn" v-for="(item, index) in items" :key="index">
                <div class="btn1">
                    <img :src="item.img" alt="">
                </div>
                <div class="btn2">
                    <h2>{{ item.biaoti }}</h2>
                    <p>{{ item.PP }}</p>
                    <span>{{ item.span }}</span>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe74f6225-b4a9-45bc-966c-62f5b696438e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693739936&t=4446b9353ce07d6322a2bd7eabc1ccea",
                    biaoti: "平凡的世界(全三册)",
                    PP: "路遥|推荐值93.1%",
                    span: "大家都在读"
                },
                {
                    img: "https://img1.baidu.com/it/u=4128112777,3592295491&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                    biaoti: "长安的荔枝",
                    PP: "马伯庸|推荐值95.5%",
                    span: "大家都在读"
                },
                {
                    img: "https://img0.baidu.com/it/u=356546501,750024762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707",
                    biaoti: "明朝那些事儿(全集)",
                    PP: "路遥|推荐值93.1%",
                    span: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=4140627482,3808499690&fm=253&fmt=auto&app=138&f=JPEG?w=461&h=614",
                    biaoti: "认知觉醒: 开启自我改变的原动力",
                    PP: "周玲|推荐值91.3%",
                    span: "大家都在读"
                },
                {
                    img: "https://img0.baidu.com/it/u=82332744,1654612956&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=719",
                    biaoti: "被讨厌的勇气: '自我启发之父...'",
                    PP: "岸减一郎 古贺史键|推荐值87.0%",
                    span: "大家都在读"
                },
                {
                    img: "https://img1.baidu.com/it/u=919505546,1590286426&fm=253&fmt=auto&app=138&f=JPG?w=386&h=500",
                    biaoti: "长相思: 如初见(杨紫 张晚意 邓为...)",
                    PP: "桐华|推荐值88.3%",
                    span: "大家都在读"
                },
                {
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4117a729-d12d-4980-9838-3b6713183732%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693740170&t=a3e62d520d236527c682d8fd17dc7092",
                    biaoti: "活着",
                    PP: "余华|推荐值91.9%",
                    span: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=788462920,793788890&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                    biaoti: "剑来 (1-42册) 出版精校版",
                    PP: "烽火戏诸侯|推荐值80.8%",
                    span: "大家都在读"
                },
                
            ]
        }
    }
}
</script>
<style>
#box {
    width: 100%;
    height: 800px;
}

.btn {
    position: relative;
    top: -10px;
    margin-top: 15px;
    margin-left: -40px;
    width: 359px;
    height: 120px;
    display: flex;
    list-style: none;
}

.btn1 {
    flex: 1;
}

.btn2 {
    flex: 3;
    margin-left: 10px;
}

.btn2 h2 {
    margin-top: -5px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
}

.btn2 p {
    margin-top: -5px;
    color: rgb(55, 55, 55);
}

.btn2 span {
    position: relative;
    top: -3px;
    color: rgb(92, 92, 92);
    font-size: 14px;
}

.btn1 img {
    padding: 5px;
    width: 100%;
    height: 100%;
}</style>