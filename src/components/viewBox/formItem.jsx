import { defineComponent } from 'vue'
const hh = defineComponent({
  name: 'hh',
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  methods:{
    colFormItem(){
      console.log(this.data,222)
      return(
        <el-col>
          
        </el-col>
      )
    }
  },
  render () {
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

export default hh