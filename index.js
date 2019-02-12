function cover(origin, target) {
  const OB = origin.h / origin.w
  const TB = target.h / target.w

  // 图片要比目标容器高
  if (OB > TB) {
    return {
      left: 0,
      top: -(origin.h / origin.w * target.w - target.h) / 2,
      w: target.w,
      h: origin.h / origin.w * target.w,
    }
  }
  return {
    left: -(origin.w / origin.h * target.h - target.w) / 2,
    top: 0,
    w: origin.w / origin.h * target.h,
    h: target.h,
  };
}

/* 组件 custom-component.js */
Component({
  properties: {
    src: {
      type: String,
      value: '',
    },
    styles: {
      type: String,
      value: '',
    },
    width: {
      type: Number,
      value: 0,
    },
    height: {
      type: Number,
      value: 0,
    }
  },
  data: {
    w: 1,
    h: 1,
    top: 0,
    left: 0,
    src: '',
  },
  lifetimes: {
    attached() {
      const { width, height } = this.data;
      // 支持w120h22格式图片，默认为正方形
      const [, w = 100, h = w] = this.data.src.match(/-w(\d+)h(\d+)/i) || [];
      this.setData(cover({w, h}, { w: width, h: height }));
    },
  },
  methods: {
    handleTap() {
      this.bindTap && this.bindTap();
    }
  }
})
