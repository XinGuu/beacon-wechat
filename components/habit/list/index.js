Component({
  data: {
    list: [],
  },
  methods: {
    getData() {
      // send initial http request here
      // TODO: get initial data from backend
      console.log('get data');
      this.setData({
        list: [{
          id: 0,
          name: '吃早餐',
          frequency: 0,
          today: 0,
        }, {
          id: 1,
          name: '20分钟有氧运动',
          frequency: 0,
          today: 0,
        }, {
          id: 2,
          name: '处理邮件',
          frequency: 0,
          today: 0,
        }],
      });
    },
    increase(idx) {
      console.log('increase', idx);
      const nlist = this.data.list;
      nlist[idx].today++;
      nlist[idx].frequency++;
      this.setData({
        list: nlist,
      });
    },
    decrease(idx) {
      console.log('decrease', idx);
      const nlist = this.data.list;
      nlist[idx].today--;
      nlist[idx].frequency--;
      this.setData({
        list: nlist,
      });
    },
    habitListTap(e) {
      const id = e.currentTarget.dataset.id;
      const idx = e.currentTarget.dataset.idx;
      switch (e.target.dataset.type) {
        case 'increase':
          this.increase(idx);
          break;
        case 'item':
          // go to detail
          // TODO: jump to detail page
          console.log('item', idx);
          break;
        case 'decrease':
          this.decrease(idx);
          break;
        default:
          break;
      }
    }
  },
  lifetimes: {
    attached() {
      this.getData();
    }
  },
});
