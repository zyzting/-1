/**
 * Created by Administrator on 2017/3/9 0009.
 */
var GLOBAL=GLOBAL||{};
$(function () {
    $(".head_ul li").hover(function () {
        var index=$(this).index();
        $(".head_ul li").eq(index).addClass("head_active");
    },function () {
        var index=$(this).index();
        $(".head_ul li").eq(index).removeClass("head_active");
        }
    );
    //获取宽高
    function compLateSize() {
        $(".main_warp,.main_slide,.warp_block").width($(window).width());
        GLOBAL.height=$(window).height()-50;
        $(".main_warp,.warp_block").height($(window).height()-50);
        $(".warp_banner").height($(window).height()-50);
    }
   //resize    窗口大小被改变
    $(window).resize(function () {
        compLateSize();
        mouseScrollMove();
    });
    //跳转
    $(".head_ul li").click(function () {
        var index=$(this).index();
        GLOBAL.mouseScrollIndex=index+1;
        if (index==4||index==3){
            GLOBAL.mouseScrollIndex=4;
            $(".head_ul li").removeClass("now")
            $(".head_ul li").eq(3).addClass("now")
            $(".head_ul li").eq(4).addClass("now")
        }
        else if(index==5){
           return;
        }
        else {
            GLOBAL.mouseScrollIndex=index+1;
            $(".head_ul li").removeClass("now")
            $(this).addClass("now");
        }
        mouseScrollMove();
    })




    window.onmousewheel= mouseScroll; //鼠标滚轮事件
    compLateSize();
    //ff
    window.addEventListener("DOMMouseScroll",mouseScroll);
    GLOBAL.mouseScrollIndex=0;
    var oWarpBlock=$(".warp_block");
    var oMainSlide=$(".main_slide");
    //控制每两秒钟切换一下
    GLOBAL.slidingTimer=null;
    GLOBAL.slidingDelay=2000;
    GLOBAL.slidingGoing=false;//是否在滚动
    //第一次 滚动   不允许翻页     false  不是第一次允许翻页
    GLOBAL.isFirstSlide=true;
    GLOBAL.firstSlideTimer=null;
    //不管是ie还是火狐下的，都用此函数处理
    //向上滚动
    function mouseScrollUp() {
        //时间
        if(!GLOBAL.slidingGoing){
            GLOBAL.slidingGoing=true;
            GLOBAL.slidingTimer=setTimeout(function () {
                GLOBAL.slidingGoing=false;
            },GLOBAL.slidingDelay)
        }else {
            return;//跳出循环
        }
        //次数
        if(GLOBAL.isFirstSlide){
            if (!GLOBAL.firstSlideTimer){
                GLOBAL.firstSlideTimer=setTimeout(function () {
                    GLOBAL.isFirstSlide=false;
                    GLOBAL.firstSlideTimer=null;
                },100);
            }
            return;
        }
        GLOBAL.isFirstSlide=true;
        GLOBAL.mouseScrollIndex--;
        if(GLOBAL.mouseScrollIndex<0){
            GLOBAL.mouseScrollIndex=0;
        }
        mouseScrollMove();
    }

    //向下滚动
    function mouseScrollDown() {
        if(!GLOBAL.welcomeAnimateOver){
        return;
        }
        if(!GLOBAL.slidingGoing){
            GLOBAL.slidingGoing=true;
            GLOBAL.slidingTimer=setTimeout(function () {
                GLOBAL.slidingGoing=false;
                GLOBAL.firstSlideTimer=null;
            },GLOBAL.slidingDelay)
        }else {
            return;//跳出循环
        };
        //次数
        if(GLOBAL.isFirstSlide){
            if (!GLOBAL.firstSlideTimer){
                GLOBAL.firstSlideTimer=setTimeout(function () {
                    GLOBAL.isFirstSlide=false;
                },100)
            }
            return;
        }
        GLOBAL.isFirstSlide=true;
        GLOBAL.mouseScrollIndex++;
        if(GLOBAL.mouseScrollIndex>=oWarpBlock.length-1){
            GLOBAL.mouseScrollIndex=oWarpBlock.length-2;
        }
        mouseScrollMove();
    }
    //移动
    function mouseScrollMove() {   //移动
        oMainSlide.animate({top:GLOBAL.mouseScrollIndex*-GLOBAL.height});
        if (GLOBAL.mouseScrollIndex==0||GLOBAL.mouseScrollIndex==1){
                $(".head_ul li").removeClass("now")
                $(".head_ul li").eq(0).addClass("now")

            }
            else if (GLOBAL.mouseScrollIndex==4){
                $(".head_ul li").removeClass("now")
                $(".head_ul li").eq(3).addClass("now")
                $(".head_ul li").eq(4).addClass("now")
            }
            else {
                $(".head_ul li").removeClass("now")
                $(".head_ul li").eq(GLOBAL.mouseScrollIndex-1).addClass("now");
            }
       
    }
    function mouseScroll(ev) {
        //判断滚轴滚动方向
        //事件对象  兼容性问题
        var oEvent=window.event||ev;
        //兼容性问题    e判断方向    ie  chorme   wheeldlta       火狐  detail
        if(oEvent.wheelDelta){
            if(oEvent.wheelDelta<0){
                //向下滚动
                mouseScrollDown();
            }else {
               //向上滚动 
                mouseScrollUp();
            }
        }else {
            if(oEvent.detail>0){
                //向下滚动
                mouseScrollDown();
            }else{
                //向上滚动
                mouseScrollUp();
            }
            
        }
        
    }


    //4秒中之后，图片向上移动
    //将文字按照顺序出现
    //将蓝色欢迎界面收起   slideingUp
    GLOBAL.welcomeAnimateOver=false;
    doWelcomeAnimate();
    function doWelcomeAnimate() {
        setTimeout(function () {
            $(".shuaxin_img").animate({top:"30%"},600,function () {
                $(".xin").each(function (index) {
                    var $this=$(this);
                    setTimeout(function () {
                        $this.show().addClass("animated fadeInUp")
                    },200*index);
                })
            });
        },4000)
        setTimeout(function () {
            $(".shuaxin").slideUp();
            GLOBAL.welcomeAnimateOver=true;
        },7000)
    }


//点击收起welcome页面
    $("#shuaxin").dblclick(function () {
        $(".shuaxin").slideUp();
        GLOBAL.welcomeAnimateOver=true;
    })



    // 1.动画结束前  滚轴能够操作轮播图
    // 2.当屏幕放大缩小时   能够修正到正确的位置
    // 3.导航
    // 4.双击收起蓝屏动画
    
    
    
    
    /*小鸟掌云*/
    // $(".yun em").hover(function () {
    //     var index=$(this).index(".yun em");
    //     $(".yun em").eq(index).addClass("yun_jl yun_active");
    // },function () {
    //     var index=$(this).index(".yun em");
    //     $(".yun em").eq(index).removeClass("yun_active");
    // })
    $(".yun em").click(function () {
        var index=$(this).index(".yun em");
        $(".yun1").hide();
        $(".yun1").eq(index).show();
        $(".yun em").removeClass("yun_active");
        $(".yun em").eq(index).addClass("yun_jl yun_active");

    })
    
    
    /*概述轮播*/
    $(".gaishu_you").click(function () {
        $(".warp_lun:not(:animated)").animate({left:"-866px"},function () {   //在动画执行之前先
            $(".gaishu_warp").first().appendTo($(this))
            $(this).css("left",0);
        })
    })

    $(".gaishu_zuo").click(function () {
        $(".gaishu_warp").last().prependTo($(".warp_lun"))
        $(".warp_lun").css("left","-866px")
        $(".warp_lun:not(:animated)").animate({left:0})
    })
    
    
    
    
    /*头部跳转*/
    //确定点击了哪一页；
    var index1=location.hash.substr(1);

    location.hash="";
        if(index1){    //如果index存在      取消蓝色欢迎页
            $("#shuaxin").hide();
            GLOBAL.welcomeAnimateOver=true;
            GLOBAL.mouseScrollIndex=index1;
            mouseScrollMove();
        }

    
});