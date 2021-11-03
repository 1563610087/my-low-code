import mitt from 'mitt'
const emitter = mitt()

export default emitter

//获取随机ID，组件拖到预览视图后就会被设置个ID
export const getId = function() { 
  function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  return s4() + s4() + '-' + s4()
}
