<template>
  <div>
    <!-- {{$route.query.item.restaurant.name}} -->
    <DetailContent></DetailContent>
  </div>
</template>
<script>
import DetailContent from "./DetailContent";
import { getDetail } from "../../api/Msite";



export default {
  data() {
    return {
      id: "",
      datalist: {
        items: []
      }
    };
  },
  components: {
    DetailContent
  },
  methods: {
    async getDetailMsg() {
      //restaurants/E15073769956088574058/batch_shop?user_id=6225488146&code=0.11130707480876256&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=34.629495&longitude=112.611363
      //restaurants/E11691681935025234793/batch_shop?user_id=6225488146&code=0.11130707480876256&extras=%255B%27activities%27%252C%27albums%27%252C%27license%27%252C%27identification%27%252C%27qualification%27%255D&terminal=h5&latitude=34.629495&longitude=112.611363
      let parmas = {
        // user_id: 6225488146,
        // code: 0.11130707480876256,
        // extras:
        //   "%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D",
        // terminal: "h5",
        // latitude: 34.629495,
        // longitude: 112.611363
      };
      let i = this.$route.query.item.restaurant.id;
      let rs = await getDetail(parmas, i);
      console.log(rs);
    }
  },
  async mounted() {
    let rs = this.getDetailMsg();
    // let id="6225488146"
    // let rs = getDetail(id)
   
  }
};
</script>