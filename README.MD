# better-cover-image
解决了小程序原生组件[cover-image](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html#cover-image)不支持图片居中的问题

## 使用
```jsx
<better-cover-image
    src="https://cdn.weipaitang.com/static/20190129a4e70a7c-cdc3-4018-aaa1-0ee3701e84f0-W750H1531/w/320"
    width="200" // 需要指定图片的宽高
    height="200"
    bindtap="handleImgClick" // 事件绑定
    styles="border-radius: 10rpx;" // 指定其他样式
/>
```
