<template>
    <!-- 这是分类页面 -->
    <div id="BookSortbox">
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>精品小说</h3>
                <p>1.长相思(杨紫 张晚意 邓3123weqqdwefw为 健)</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://img1.baidu.com/it/u=919505546,1590286426&fm=253&fmt=auto&app=138&f=JPG?w=386&h=500"
                    alt="">
            </div>
        </div>
        <!--历史 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>历史</h3>
                <p>1.明朝那些事儿(全集)</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://img0.baidu.com/it/u=356546501,750024762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707"
                    alt="">
            </div>
        </div>
        <!--文学 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>我与地坛</h3>
                <p>1.长相思(杨紫 张晚意 邓3123weqqdwefw为 健)</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="http://t15.baidu.com/it/u=1269254681,3593327121&fm=224&app=112&f=JPEG?w=336&h=499" alt="">
            </div>
        </div>
        <!--艺术 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>艺术</h3>
                <p>1.生活蒙太奇</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://img2.baidu.com/it/u=3870820230,3931271289&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666"
                    alt="">
            </div>
        </div>
        <!--人物传记 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>人物传记</h3>
                <p>1.邓小平时代</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://world.chinadaily.com.cn/img/dxpdc110znjn/attachement/jpg/site1/20140814/eca86bd9ddc7155693fd39.jpg"
                    alt="">
            </div>
        </div>
        <!--哲学宗教 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>哲学宗教</h3>
                <p>1.道德经</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://upload-up.qingting.fm/user/83060b2fdbb8d3e543f89a602a47b25e/de585e7208614d43556e01abac672ded.jpeg"
                    alt="">
            </div>
        </div>
        <!--计算机 -->
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>计算机</h3>
                <p>1.Python编程: 从入门到实践</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F808cb5e2-d629-4c92-89ad-0d0fcdf1a7b0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693740870&t=5c9e6d74f6f20057dadaa33b33aca754"
                    alt="">
            </div>
        </div>

        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>心理</h3>
                <p>1.认知觉醒:开启自我改变的原动力</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://img2.baidu.com/it/u=4140627482,3808499690&fm=253&fmt=auto&app=138&f=JPEG?w=461&h=614"
                    alt="">
            </div>
        </div>
        <div class="BookSortbox_top">
            <div class="BookSortbox_top_zuo">
                <h3>社会文化</h3>
                <p>1.厌女(增订本)</p>
                <p>2.剑来</p>
                <p>3.三体(全集)</p>
            </div>
            <div class="BookSortbox_top_you">
                <img src="https://p4.itc.cn/q_70/images03/20200618/671cdcd8706640eeb0cfc428825a1897.jpeg"
                    alt="">
            </div>
        </div>



    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#BookSortbox {
    width: 100%;
}

// :nth-child()
.BookSortbox_top {
    width: 90%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: #F8F8FA;
    height: 190px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    .BookSortbox_top_zuo {
        h3 {
            font-weight: 500;
        }

        p {
            font-size: 13px;
            color: #8A919B;
        }

        margin: 20px;
        line-height: 25px;

        p:nth-child(2) {
            -webkit-line-clamp: 1;
            /* 设置几行  */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .BookSortbox_top_you {
        width: 100px;
        height: 60px;

        img {
            width: 100px;
            height: 145px;
            // margin-left: 10px;
            border-radius: 0px 10px 10px 0px;
        }
    }

}
</style>