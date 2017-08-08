
$(function () {
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mounseover，mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color','#fff');
    }).mouseout(function () {
        $(this).css('color','#a4b094');
    });
    $('.shopCar').mouseover(function () {
        $(this).css({color:'#ff6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    /*表单的输入框移入效果*/
    var flag = true;
    $('.ser1').mouseover(function () {
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function () {
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    });
    /*热门搜索的移入效果*/
    yellow('.hot a')
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
       if(flag) {
           $('.ser2 input').css({
               'border': '1px solid #000',
               'border-right': 'none'
           })

           $(this).css({
               'background': 'orange',
               'color': '#fff',
               'border': 'none'
           })
       }
    }).mouseout(function () {
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({
               'background':'#fff',
               'color':'#000',
               'border':'1px solid #ccc',
               'border-left':'none'
           })
       }
    });
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function () {
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })

    /*二级导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color','#ff6700');
        if($(this).index() < 7){
            $('select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').slideDown();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp().finish();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();//停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,2000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 2000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background','transparent');
    })
    /*鼠标移除二级导航的范围后，让它消失*/
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })

    /*小明星单品*/
    var clockLR;
   /* 向左翻页*/
    $('.starPro .prev').mouseover(function(){
        if($('.scroll').css('left')!='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});
        }
    }).click(function(){
        if($('.scroll').css('left')!='0px'){
            $('.scroll').css('left','0px');
            $(this).css({color:'#dfdfe0',cursor:'default'});
            $('.next').css('color','#b0b4bc');
        }
    }).mouseout(function(){
        if($('.scroll').css('left')!='0px'){
            $(this).css('color','#b0b4bc');
        }else{
            $(this).css('color','#dfdfe0');
        }
    });

    /*向右翻页*/
    $('.starPro .next').mouseover(function(){
        if($('.scroll').css('left')=='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});
        }
    }).click(function(){
        if($('.scroll').css('left')=='0px'){
            $('.scroll').css('left','-1226px');
            $(this).css({color:'#dfdfe0',cursor:'default'});
            $('.prev').css('color','#b0b4bc');
        }
    }).mouseout(function(){
        if($('.scroll').css('left')=='0px'){
            $(this).css('color','#b0b4bc');
        }else{
            $(this).css('color','#dfdfe0');
        }
    });
    /*自动播放*/
    clockLR=setInterval(autoLR,5000);
    function autoLR(){
        if($('.scroll').css('left')!='0px'){
            $('.scroll').css('left','0px');
        }else if($('.scroll').css('left')=='0px'){
            $('.scroll').css('left','-1226px');
        }
    }
    /*智能硬件*/
    shadow('#shadow li'); yellow('.box a');
    /*搭配*/
    shadow('.ul-row li');shadow('.ul-call > li'); Mark('.ul-row li'); table('.list1','.display1');
    /*配件、*/
    table('.list2','.display2');
    /*周边*/
    table('.list3','.display3');
    /*为你推荐*/
    $('.scroll-second li').mouseover(function () {
        $(this).find('img').css('marginTop','48px');
    }).mouseout(function () {
        $(this).find('img').css('marginTop','50px');
    })
    /*翻页效果*/
    var age = 0;
    $('.prev-second').mouseover(function(){
        if($('.scroll-second').css('left')!='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});
        }
    }).click(function(){
        if($('.scroll-second').css('left')!='0px'){
            $(this).css({color:'#dfdfe0',cursor:'default'});
            $('.next-second').css('color','#b0b4bc');
        }
        if(age > 0 && age <= 3) {
            age--;
            $('.scroll-second').css('marginTop', (-300 * age) + 'px')//向上移动300px
        }
        console.log(age);
    }).mouseout(function(){
        if($('.scroll-second').css('left')!='0px'){
            $(this).css('color','#b0b4bc');
        }else{
            $(this).css('color','#dfdfe0');
        }
    });
    /*向右翻页*/
    $('.next-second').mouseover(function(){
        if($('.scroll-second').css('left')=='px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});
        }
    }).click(function(){

        if($('.scroll-second').css('left')=='0px'){
            $(this).css({color:'#dfdfe0',cursor:'default'});
            $('.prev-second').css('color','#b0b4bc');
        }
        if(age >= 0 && age < 3) {
            age ++;
            $('.scroll-second').css('marginTop', (-300 * age) + 'px')
        }
    }).mouseout(function(){
        if($('.scroll-second').css('left')=='0px'){
            $(this).css('color','#b0b4bc');
        }else{
            $(this).css('color','#dfdfe0');
        }
    });
    /*热评产品*/
    shadow('.hotList li');
    /*内容效果*/
    var arr = [0, 0, 0, 0]
    var index = 0;
    $('.contList > li').mouseover(function () {
        index = $(this).index();
        $(this).find('.c').removeClass('hide');
    }).mouseout(function () {
        $(this).find('.c').addClass('hide');
    })
    $('.contList').find('.r2').click(function () {
        if(arr[index] >= 0 && arr[index] < 3){
            arr[index]++;
        }
        $(this).siblings('.contBox').css('left', (-300 * arr[index]) + 'px')
        $(this).nextAll('.round2').find('p').eq(arr[index]).addClass('active').siblings().removeClass('active')
    })
    $('.contList').find('.l2').click(function () {
        if(arr[index] > 0 && arr[index] <= 3){
            arr[index]--;
        }
        $(this).siblings('.contBox').css('left', (-300 * arr[index]) + 'px')
        $(this).nextAll('.round2').find('p').eq(arr[index]).addClass('active').siblings().removeClass('active')
    })
    /*点击圆圈*/
    $('.round2 p').mouseover(function () {
        $(this).css('background','orange')
    }).mouseout(function () {
        $(this).css('background','#aaa')
    })
    $('.round2 p').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().prevAll('.contBox').css('left',(-300 * ($(this).index())) + 'px')

    })
    $('.videoList li').mouseover(function () {
        $(this).find('.icon-bofang').css('color','orange');
    }).mouseout(function () {
        $(this).find('.icon-bofang').css('color','white');
    })
    /*视频*/
    shadow('.videoList li'); yellow('.videoList li h2 a');
    yellow('.ul-nav >li');
    /*页脚*/
    yellow('.nav-start li a');

});
/*添加阴影*/
function shadow(obj1) {
    $(obj1).mouseover(function () {
        // $(this).css({'transform': 'translate(0, -2px)', 'transition': 'transform .001s', 'box-shadow': '0 15px 30px rgba(0, 0, 0, 0.1)'});
        $(this).css({
            'position': 'relative',
            'bottom': '2px',
            'box-shadow': '0 15px 30px rgba(0, 0, 0, 0.1)'
        })
    }).mouseout(function () {
        // $(this).css({'transform': 'translate(0, 0)', 'transition': 'transform .001s', 'box-shadow': 'none'})
        $(this).css({
            'position': 'relative',
            'bottom': '0',
            'box-shadow': 'none'
        })
    })
}
/*触摸滑块*/
function Mark(obj2) {
        $(obj2).mouseover(function () {
            $(this).find('.cover').stop(true,false).slideDown('fast').siblings('.cover').slideUp();
        }).mouseout(function () {
            $(this).find('.cover').stop(true,false).slideUp('fast')
        })
}
/*触摸变颜色*/
function yellow(obj3) {
    $(obj3).mouseover(function () {
        $(this).css('color','orange');
    }).mouseout(function () {
        $(this).css('color','#000');
    })
}
/*触摸变换*/
function table(obj4,obj5) {
    $(obj4).find('li').mouseover(function () {
        $(obj5).find('.ul-row').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
    })
}

