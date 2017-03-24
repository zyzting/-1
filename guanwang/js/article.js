/**
 * Created by Administrator on 2017/3/9 0009.
 */
var GLOBAL=GLOBAL||{};     //避免系统变量冲突
$(function () {

    //头部
    $("#header").load("header.html");
  

    var name="articleid";
    // var reg=new RegExp("(^/&)"+name+"=([^&]*)(&/$)");//不灵活
    //var rex="c"
//new RegExp(rex);
//     alert(getUrlParams("articleid"));
//     alert(getUrlParams("type"));

    GLOBAL.articleid=getUrlParams(name);     //获取URL传过去的参数
    GLOBAL.type=getUrlParams("type");       //xiaoniaonews

    LoadArticleData();

    //下面的心           先出现横向的    在上下滑动
    $(".xin").hover(function () {
                $(".xin1").stop().animate({"width":"135px"},500,function () {
                    // $(".xin").stop().animate({"backgroundPositionY":"-73px"},500);
                })
            },function () {
                $(".xin1").stop().animate({"width":"0px"},500,function () {
                    // $(".xin").stop().animate({"backgroundPositionY": "0"}, 500);
                })
                });
    var arrayRun=["娘娘威武","皇上万岁","你好啊","哈哈哈哈哈","再点一下试试"];
    GLOBAL.firstClick=true;//表示第一次点击
    $(".xin").click(function () {
        //判断是否第一次点击
        if(GLOBAL.firstClick){
            GLOBAL.firstClick=false;
            var index=Math.floor(Math.random()*arrayRun.length);
            var content=arrayRun[index];
            $(".kuang").html(content);
            doMove();
            
        }
        else if($(".kuang").html()=="再点一下试试"){
            $(".kuang").html("让你点，你就点哈");
            doMove();
        }
    });
    function doMove() {
        //让小块移动到上面
        $(".kuang").animate({top:100,opacity:1},600,"elasticOut")
            .delay(600)
            .animate({left:-400,opacity:0},400,"backIn",function () {
                $(".kuang").css({top:370,left:-40});
                $(".xin").animate({"background-position-y":"-73px"})
                
            })
    };

//底部
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
    })();
    
});
function getUrlParams(name){
    //利用正则
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  r[2];
    else
        return "";

}
function LoadArticleData() {
    // alert(GLOBAL.type)
    if (GLOBAL.type){
        var articleData1=articleData[GLOBAL.type+GLOBAL.articleid];
        // alert(JSON.stringify(articleData1))
        $(".title_big").html(articleData1.data.typeTitle);
        $(".zhu2_p1").html(articleData1.data.typeEntitle);
        $("#aa").html(articleData1.data.title);
        $(".creatByFullName").html(articleData1.data.creatByFullName);
        $(".covimg").attr("src",articleData1.data.coverImg);
        $("#bird4").html(articleData1.data.content);

    }
}

