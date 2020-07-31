/**
 * 安卓原生返回行为按钮
 */
let num = 1
const timestamp = []
export default ({
    emptyFun: () => null,
    // 监听
    listen(callback) {
        document.addEventListener('backbutton', callback, false)
    },
    // 销毁
    remove(callback) {
        document.removeEventListener('backbutton', callback, false)
    },
    // 双击退出app
    doubleClick(callback) {
        timestamp.push(new Date().getTime()) // 记录时间戳
        const temp = timestamp.slice(-2)
        const len = temp.length
        const isLowTwoSecond = temp[1] - temp[0] < 2000
        // 界面2秒内的双击返回键退出app
        if (isLowTwoSecond && num === 2) navigator.app.exitApp();
        isLowTwoSecond || len < 2 ? num++ : num = 1
        typeof callback === 'function' && callback()
    }
})
