import { defineComponent,h } from 'vue'
const renderItem = defineComponent({
  name: 'renderItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    render(){
      const {config}=this.data

      return (
        `<${config.tag}>
1111
        </${config.tag}>
        `
      )


    }
  },
  render() {
    // let data=this.render()
    const data={
      "class": {},
      "attrs": {
          "placeholder": "请输入单行文本",
          "maxlength": null
      },
      "props": {},
      "domProps": {},
      "nativeOn": {},
      "on": {},
      "style": {
          "width": "100%"
      },
      "directives": [],
      "scopedSlots": {
          "_normalized": {}
      },
      "slot": null,
      "key": null,
      "ref": null,
      "refInFor": true,
      "hook": {},
      "pendingInsert": null,
      "normalizedStyle": {
          "width": "100%"
      }
  }
    return h('el-button', data, 'hhhh')
  }

})

export default renderItem