import { defineComponent } from 'vue'
import Render from './render'
import './formItem.scss'
const FormItem = defineComponent({
  name: 'hh',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Render: Render
  },
  methods: {
    colFormItem() {
      const { config } = this.data
      let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null
      return (
        
      )
    }
  },
  render() {
    return (
      <div class='item-box'>
        <div class='item-btn'>
          <span>1</span>
          <span>2</span>
        </div >
        {
          this.colFormItem()
        }
      </div >
    )
  }

})

export default FormItem