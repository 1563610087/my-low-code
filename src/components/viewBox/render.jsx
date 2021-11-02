import { defineComponent,h,resolveComponent} from 'vue'
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
    const {config}=this.data
    return h(resolveComponent(config.tag),)
  }

})

export default renderItem