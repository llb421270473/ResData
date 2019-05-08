<p align="center">
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
</p>

# VueData

仅保留Vue的数据驱动能力，移除VNode相关操作。为各小程序平台提供数据驱动能力。

基于Vue（v2.6.10）。

## 示例

```javascript
import Vue from 'vueData'

const vm = new Vue({
  data:{
    name: 'calvin'
  }
}, (vmCtx) => {
  const vData = vRender(vmCtx)
  console.log(vData.name)
})

function vRender (vm) {
  const keys = ['_data','_computedWatchers','_props']
  return keys
      .map(item => Object.keys(vm[item] || {}))
      .reduce((res, item) => res.concat(item), [])
      .reduce((res, key) => {
        res[key] = vm[key]
        return res
      }, {})
}

vm.name = 'calvin lee'
```


## 安装

```bash
npm install
npm run dev:vuedata // 开发版本
npm run build:vuedata // 生产版本
```

## License

[MIT](http://opensource.org/licenses/MIT)
