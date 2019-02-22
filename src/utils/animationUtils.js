const AnimationUtils = {
	/**
	 * 新增一个动画类，并设置时间，动画结束，清除动画类
	 * @param {*} targetClassName 目标类
	 * @param {*} animationClassName 动画类
 	 * @param {*} time 毫秒
	 */
	triggerAnimation(targetClassName, animationClassName, time) {
		const StopAnimation = () => {
			document.querySelector(targetClassName).className = targetClassName;
		}
		document.querySelector(targetClassName).className = targetClassName + " " + animationClassName;
		setTimeout(StopAnimation(), time);//延迟关闭动画 移除open类
	}
};
export default AnimationUtils
