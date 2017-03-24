/**
 * Created by Administrator on 2017/3/9 0009.
 */
$(function () {
    $("#header").load("header.html");


    /*banner*/
    // var t=0;
    // var arr=["url('image/banner01_bg.jpg')no-repeat center",
    //     "url('image/banner02_bg.jpg')no-repeat center",
    //     "url('image/banner01_bg.jpg')no-repeat center"
    // ]
    // $(".banner_next").click(function () {
    //     auto();
    // });
    // $(".banner_prev").click(function () {
    //     t--;
    //     if(t<0){
    //         t=$(".banner_ul li").length-1;
    //     }
    //         $(".banner").css("background",arr[t]);
    //     $(".banner_ul li").removeClass("banner_active");
    //     $(".banner_ul li").eq(t).addClass("banner_active");
    // })
    // function auto() {
    //     t++;
    //     t%=$(".banner_ul li").length;
    //     $(".banner").css("background",arr[t]);
    //     $(".banner_ul li").removeClass("banner_active");
    //     $(".banner_ul li").eq(t).addClass("banner_active");
    // }
    // $(".banner_ul li").mouseover(function () {
    //     var index=$(this).index();
    //     $(".banner").css("background",arr[index]);
    //     $(".banner_ul li").removeClass("banner_active");
    //     $(".banner_ul li").eq(index).addClass("banner_active");
    // })
    //
    
    //函数自执行  主banner
    (function () {
        var oBanner=$(".banner");
        var oBannerOne=oBanner.find(".banner_one")/*图片*/
        var arrNav=oBanner.find(".banner_ul li");
        var oNext=oBanner.find(".banner_next");
        var oPrev=oBanner.find(".banner_prev");
        var index=0;
            arrNav.click(function () {
            index=$(this).index();
            // oBannerOne.stop().fadeOut().eq(index).fadeIn();
            // arrNav.removeClass("banner_active");
            // $(this).addClass("banner_active");
            animate();
        });


        animate();
        function animate() {
            oBannerOne.stop().fadeOut().eq(index).fadeIn();
            arrNav.removeClass("banner_active");
            arrNav.eq(index).addClass("banner_active");
            $(".banner_img1").hide();
            $(".banner_img1").eq(index).show();
            var aImg=$(".banner_img1").eq(index).find("img");
            aImg.eq(0).show().addClass("animated fadeInLeft");
            setTimeout(function () {
                aImg.eq(1).show().addClass("animated fadeInRight");
                aImg.eq(2).show().addClass("animated fadeIn");
            },300)

        }
        oNext.click(function () {
            index++;
            index%=$(".banner_ul li").length;
            // oBannerOne.stop().fadeOut().eq(index).fadeIn();
            // arrNav.removeClass("banner_active");
            // arrNav.eq(index).addClass("banner_active");
            animate();
        })
        oPrev.click(function () {
            index--;
            if(index<0){
                index=$(".banner_ul li").length-1;
            }
            // oBannerOne.stop().fadeOut().eq(index).fadeIn();
            // arrNav.removeClass("banner_active");
            // arrNav.eq(index).addClass("banner_active");
            animate();
        })
    })();
//    主banner结束
    
    
//    主要产品开始
    (function () {
        var oBanner=$(".zhu3");
        var oRight=oBanner.find(".zhu3_right");
        var arrBanner1=oBanner.find(".zhu3_right1");
        var arrBanner2=oBanner.find(".zhu3_right2");
        var arrNav=oBanner.find(".zhu3_left li");
        var oNext=$(".zhu6_em3");
        var oPrev=$(".zhu6_em1");
        var index=0;
        arrNav.click(function () {
            var action="";    //用来存储值
            if($(this).index()>index){
                arrBanner1.hide().removeClass("animated fadeInLeft");
                action="animated fadeInRight";
            }
            else {
                arrBanner1.hide().removeClass("animated fadeInRight");
                action="animated fadeInLeft";
            }

            index=$(this).index();
            move(action);
        })
        oPrev.click(function () {
            arrBanner1.hide().removeClass("animated fadeInRight");
            arrBanner2.children("div").hide().removeClass("animated fadeInRight");
            index--;
            if(index<=0){
                index=arrNav.length-1;
            }
            move("animated fadeInLeft");

        })
        oNext.click(function () {
            arrBanner1.hide().removeClass("animated fadeInLeft");          //隐藏
            arrBanner2.children("div").hide().removeClass("animated fadeInLeft");
            index++;
            if(index>=arrNav.length){
                index=0;
            }
            move("animated fadeInRight");
        })

        function move(action) {
            oRight.hide()
            oRight.eq(index).show();
            var t= oRight.eq(index).find(".zhu3_right1");
            t.show().addClass(action);

            arrBanner2.find(".zhu3_top").show().addClass(action);
            arrBanner2.find(".zhu3_p").show().addClass(action)
            arrBanner2.find(".zhu5").show().addClass(action);
            arrNav.find("em").removeClass("em").addClass("zhu3_em zhu3_ji");
            arrNav.eq(index).find("em").removeClass("zhu3_em").addClass("em");
        }
    })();

/*简介  隐藏多余的*/
    // .$(".gs .zhu3_left").css("visibility","hidden")
    
    /*业务范围*/
    // (function () {
    //     $(".yw2_m6").hover(function () {
    //         $(this).addClass("animated tada");
    //     },function () {
    //         $(this).removeClass("animated tada");
    //         }
    //     );
    //     $(".yw2_m3 img").hover(function () {
    //             $(this).addClass("animated tada");
    //         },function () {
    //             $(this).removeClass("animated tada");
    //         }
    //     );
    //     $(".yw2_m6").click(function () {
    //         var index=$(this).index(".yw2 .yw2_m6");
    //         if($(this).hasClass("yw_ji yw2_m6")){
    //             $(this).removeClass("yw_ji yw2_m6");
    //             $(this).addClass("yw_ji yw2_m7")
    //         }else{
    //             $(this).removeClass("yw_ji yw2_m7");
    //             $(this).addClass("yw_ji yw2_m6")
    //         }
    //         $(".yw2_12").each(function (index) {
    //             if($(".yw2_12").eq(index).css("display")=="block"){
    //                 $(".yw2_12").eq(index).css("display","none");
    //             }
    //         })
    //         $(".yw2_12").eq(index).stop().slideToggle();
    //
    //         });
    //     // $(".yw2_m3 img").click(function () {
    //     //     var index=$(this).index(".yw2_m3 img");
    //     //     $(".yw2_12").slideDown().css("display","block");
    //     //     $(".yw2_12").eq(index).slideUp().css("display","none");
    //     // })
    //
    // })();



    (function () {
        var scope_zt=$(".yw2");
        var aImg=scope_zt.find("img");
        var aBtn=scope_zt.find(".yw2_m6");
        var scope_nav_gd=scope_zt.find(".yw2_12");
        aBtn.click(function () {
            var ind=$(this).index(".yw2 .yw2_m6");

            auto3(ind);
        });
        aImg.click(function () {
            var index=$(this).index(".yw2 img");
            auto3(index);
        });
        function auto3(ind) {
            scope_nav_gd.each(function (index) {
                if( scope_nav_gd.eq(index).css("display")=="block"){
                    scope_nav_gd.eq(index).stop().slideUp();
                }
                if(aBtn.eq(index).css("background-position-y")=="-67px"){
                    aBtn.eq(index).stop().animate({"background-position-y":"0"},300);
                }
            });
            scope_nav_gd.eq(ind).stop().slideToggle();
            if(aBtn.eq(ind).css("background-position-y")=="-67px"){
                aBtn.eq(ind).stop().animate({"background-position-y":"0"},300);
            }else{
                aBtn.eq(ind).stop().animate({"background-position-y":"-67px"},300);
            }
        }
        aBtn.hover(function () {
            $(this).addClass("animated tada");
        },function () {
            $(this).removeClass("animated tada");
        });
        aImg.hover(function () {
            $(this).addClass("animated tada");
        },function () {
            $(this).removeClass("animated tada");
        });
    })();
    
    /*团队介绍*/
    (function () {
        var oBanner=$(".td_lun");
        var oBannerOne=oBanner.find(".td_lun1")/*图片*/
        var arrNav=$(".banner_bottom1 .banner_ul1 li");
        var oNext=$(".banner_bottom1 .banner_next");
        var oPrev=$(".banner_bottom1 .banner_prev1");
        oBanner.width($(".td_lun .td_lun1:first").width()*$(".td_lun .td_lun1").length)
        var index=0;
        oNext.click(function () {
            index++;
            index%=$(".banner_ul1 li").length;
            oBanner.stop().animate({"left":"100px"}).animate({"left":"-1100px"},function () {
                oBanner.append($(".td_lun .td_lun1:first"))
                oBanner.css("left",0)
            })
            auto();
        })
        function auto() {
            arrNav.removeClass("banner_active1");
            arrNav.eq(index).addClass("banner_active1");

        }
        oPrev.click(function () {
            index--;
            if(index<0){
                index=$(".banner_ul1 li").length-1;
            }
            oBanner.prepend($(".td_lun .td_lun1:last"))
            oBanner.css("left","-1100px")
            oBanner.stop().animate({"left":"-1200"}).animate({"left":"0"})
           auto();
        })
        for (var i=0;i<$(".td_lun .td_lm").length;i++){

            $(".td_lun .td_lm").eq(i).find("li:first").hover(function () {
                    // var index1=$(this).index(".td_lun .td_lm")
                    $(this).find("img").eq(1).fadeIn();
                },function () {
                    // var index1=$(this).index(".td_lun .td_lm")
                    $(this).find("img").eq(1).fadeOut();
                }
            )
        }


    })();


    $("#footer").load("footer.html");
    
    /*返回顶部*/
    (function () {
        $(".fan2_em1").hover(function () {

            $(".fan2_em").animate({"width":"135px"});

        },function () {
            $(".fan2_em").animate({"width":"0"});
            }
        )
        $(window).scroll(function () {
            if($(window).scrollTop()>500){
                $("#fan").fadeIn();
            }
            else {
                $("#fan").fadeOut();
            }
        })
        $(".fan_em").click(function () {
            // $(window).scrollTop(0);
            // $(this).parent().animate({"bottom":1000,"opacity":0},400,function () {
            //     $("#fan").css("opacity",1).fadeOut(0).css("bottom",200);
            // })
            $('body,html').animate({"scrollTop":0},400);
        })

    })()
})