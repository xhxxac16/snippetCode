// 这个分号的作用是防止和其他jquery插件合并时，别人不规范的jquery插件忘记使用分号结束
// 影响到我们当前的插件，导致无法运行的问题。
;(function ( $, window, document, undefined ){
    // undefined作为形参的目的是因为在es3中undefined是可以被修改的
    // 比如我们可以声明var undefined = 123,这样就影响到了undefined值的判断，幸运的是在es5中,undefined不能被修改了。
    // window和document本身是全局变量，在这个地方作为形参的目的是因为js执行是从里到外查找变量的（作用域），把它们作为局部变量传进来，就避免了去外层查找，提高了效率。

    //函数体内具体代码
    var PluginName = function(element, options) {
        var defaults = {

        };
        // 将默认属性对象和传递的参数对象合并到第一个空对象中
        this.settings = $.extend({}, defaults, options);
        this.initialize();
    };

    PluginName.prototype = {
        initialize: function() {
        }
    }

    $.fn.pluginName = function (options) {
        return this.each(function (key, value) {
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('pluginName')) return element.data('pluginName');
            // Pass options to plugin constructor
            var pluginName = new PluginName(this, options);
            // Store plugin object in this element's data
            element.data('pluginName', pluginName);
        });
    };

})(jQuery, window,document);