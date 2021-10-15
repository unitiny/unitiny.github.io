/*获取图片实例*/
var dom = document.getElementsByClassName('hero');
var img = dom.getElementsByTagName('img');
/*定义位置变量*/


/*给图片赋予鼠标聚焦事件*/
img.onmouseover = function() {
    var current = 0;
    var flag = 0;

    /*开启定时执行function函数*/
    var temTemp = setInterval(function() {

        if (flag != 90) {
            current = (current + 4) % 360;
            flag++;

            img.onmouseout = function() {
                clearInterval(temTemp);
                setInterval(function() {
                    if (flag != 0) {
                        current = (current - 4) % 360;
                        flag--;
                    } else {
                        current = 0;
                        return;
                    }

                    img.style.transform = 'rotate(' + current + 'deg)';
                }, 10);
            }
        } else {
            current = 0;
            return;
        }

        img.style.transform = 'rotate(' + current + 'deg)';
        window.console.log(current);
    }, 10);
};