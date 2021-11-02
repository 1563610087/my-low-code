import { defineComponent,h } from 'vue'
import Render from './render'
const FormItem = defineComponent({
  name: 'hh',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components:{
    Render:Render
  },
  methods: {
    colFormItem() {
      const { config } = this.data
      let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null
      return (
        <el-col span={config.span}>
          <el-form-item
            label-width={labelWidth}
            label={config.showLabel ? config.label : ''}
            required={config.required}>
              <Render data={this.data}/>
          </el-form-item>
        </el-col>
      )
    }
  },
  render() {
    return (
      <>
        <div>
          {
            this.colFormItem()
          }
        </div>
      </>
    )
  }

})

export default FormItem