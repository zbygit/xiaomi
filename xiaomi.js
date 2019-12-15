//轮播
var i = 0;
var banner_img_box = $("#banner_img_box");
// 获取轮播图个数
var allimg = $("#banner_img_box li").length;
// 图片更改方法
function img_change() {
	// 判断当前加载的图片位置，确定left距离
	var img_i = i * -1226 + "px";
	// 通过jq的动画方法改变透明度
	banner_img_box.animate({
		opacity: ".2"
	},
	100,
	function() {
		// 这是left距离
		banner_img_box.css("left", img_i);
		// 将要显示的图片的透明度更改为1
		banner_img_box.animate({
			opacity: "1"
		},
		100);
	})
}
// 定时器开启时执行该方法设置全局变量i的数值 即当前现实的图片下标
function automatic() {
	i += 1;
	if (i >= allimg) {
		i = 0;
	}
	img_change();
}
// 页面进入开启定时器实现轮播
change_self_time = setInterval(automatic, 3000);
// 鼠标移入是清除定时器，停止播放
$("#banner_paly").hover(function() {
	clearInterval(change_self_time);
	// 设置控制箭头显示
	$("#banner_paly").children().show();
},
function() {
	// 鼠标移出开启定时器
	change_self_time = setInterval(automatic, 3000);
	// 设置控制箭头消失
	$("#banner_paly").children().hide();
})
// 上一个
$("#prev").click(function() {
	// 图片下标加1
	i += 1;
	// 若i大于图片数量设置为0
	if (i >= allimg) {
		i = 0;
	}
	// 执行图片改变方法
	img_change();
})
// 下一个
$("#next").click(function() {
	i -= 1;
	if (i <= 0) {
		i = allimg - 1;
	}
	img_change();
})