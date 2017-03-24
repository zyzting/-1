/**
 * Created by Administrator on 2017/3/9 0009.
 */


var GLOBAL=GLOBAL||{};      //全局变量


//头部
$(function () {

    LoadArticleList();

    //点击  加载图片
    $(".body_em1").click(function () {
        if(GLOBAL.pageStart<GLOBAL.pageCount){
            LoadArticleList();
        }
        else{
            $(".body_chakan img").attr("src","image/list_gomore_bg_nomore.jpg");
        }


    });

    //事件绑定
//    事件流     1.事件捕获    2.事件目标阶段    3.事件冒泡
//    事件委托      将子元素发生的事件交给父级去执行

    $("#articleList").delegate(".body_li1","click",function () {   //回调函数
        var articleId=$(this).attr("articleid");
        window.open("article.html?articleid="+articleId+"&type=xiaoniaoNews");
    });

    //头部
    $("#header").load("header.html");
    //清右
    $(".body_li .body_li1").each(function (index) {
            $(".body_li1:odd").eq(index).css("marginRight",0)
        })
    //底部
    $("#footer").load("footer.html");
    /*列表线*/
    (function () {
        $(".body_em").click(function () {
            $(".body_em").hide(10,function () {
                $(".body_list").css("width","120px")
                $(".body_list").css("backgroundPositionX","-900px");
                $(".body_em").show();
                $(".body_list").animate({"width":"1100px","backgroundPositionX":"0px"},1000)
            })
        })
    })();
        /*列表*/
    (function () {
        $(".body_li1").hover(function () {
            // var index=$(this).index();
            $(this).css("borderColor","black");
            $(this).animate({"bottom":"10"},500);
            $(this).find($(".body_jiantou")).animate({"left":"50px"},500)
        },
            function () {
                $(this).css("borderColor","transparent");
                $(this).animate({"bottom":"0"},500);
                $(this).find($(".body_jiantou")).animate({"left":"0"},500)
            }
        )
    })();
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
// function LoadArticleList() {
//     //第一次加载数据     将列表清空
//     //pageStart    数据开始位置
//     if(!GLOBAL.pageStart){      //还没有加载的时候
//         GLOBAL.pageStart=0;
//         $("#articleList").html("");
//     }
//     // GLOBAL.pageStart++;
//     //请求到的数据
//     var result= listData["listData0"+GLOBAL.pageStart];      //保存数据
//     var list=result.data.list;
//
//
//     if(!list||!list.length)  {    //让其不报错
//         $("#articleList").html("没有数据可加载");
//     }
//
//
//     for(var i=0;i<list.length;i++){
//         var updateTime=list[i].creatAt||list[i].updateTime;
//         var model=$("#itemHtml").html();     //模板
//         model=model.replace("$articleId$",list[i].sysId)//将谁替换给谁         把模板里的替换成list里相对应的
//             .replace("$articleCover$",list[i].coverImg)  //图片
//             .replace("$articleTitle$",list[i].title)    //标题
//             .replace("$updateTime$",list[i].creatAt.slice(0,10))     //日期
//             .replace("$describe$",list[i].describe);      //内容
//         $("#articleList").append(model);     //追加
//     }
//     GLOBAL.pageStart++;
//
// //    判断是否有数据可以加载
//     //15
//     var count=result.data.count;
//     //6
//    GLOBAL.pageCount= Math.ceil(count/result.data.pageSize);
//     //没有数据可以加载       就把按钮的透明度改掉
//     if(GLOBAL.pageStart>=GLOBAL.pageCount){
//         $(".body_em1").fadeTo(500,0.5);
//     }
//
//
// }

function LoadArticleList() {
    if(!GLOBAL.pageStart){
        GLOBAL.pageStart=0;
        $("#articleList").html("");    //清空以前的
    }
    $.ajax({
        type: "GET",
        url: "http://localhost/listData.php",
        data:{
            page:GLOBAL.pageStart,
        },
        success:function (data) {
            // alert(data);
            // alert(JSON.stringify(JSON.parse(data)))
            showData(JSON.parse(data));
        }
    })
}
function showData(data) {
    var list=data.data.list;
    for(var i=0;i<list.length;i++){
        var model=$("#itemHtml").html();
        var updateTime=list[i].creatAt||list[i].updateTime;
        // var model=$("#itemHtml").html();     //模板
        model=model.replace("$articleId$",list[i].sysId)//将谁替换给谁         把模板里的替换成list里相对应的
            .replace("$articleCover$",list[i].coverImg)  //图片
            .replace("$articleTitle$",list[i].title)    //标题
            .replace("$updateTime$",list[i].creatAt.slice(0,10))     //日期
            .replace("$describe$",list[i].describe);      //内容
        $("#articleList").append(model);     //追加

    }
    GLOBAL.pageStart++;
    var count=data.data.count;
   GLOBAL.pageCount= Math.ceil(count/data.data.pageSize);
//     //没有数据可以加载       就把按钮的透明度改掉
    if(GLOBAL.pageStart>=GLOBAL.pageCount){
        $(".body_em1").fadeTo(500,0.5);
    }






    //清右
    $(".body_li .body_li1").each(function (index) {
        $(".body_li1:odd").eq(index).css("marginRight",0)
    })
    /*列表*/
    $(".body_li1").hover(function () {
            // var index=$(this).index();
            $(this).css("borderColor","black");
            $(this).animate({"bottom":"10"},500);
            $(this).find($(".body_jiantou")).animate({"left":"50px"},500)
        },
        function () {
            $(this).css("borderColor","transparent");
            $(this).animate({"bottom":"0"},500);
            $(this).find($(".body_jiantou")).animate({"left":"0"},500)
        }
    )

}


