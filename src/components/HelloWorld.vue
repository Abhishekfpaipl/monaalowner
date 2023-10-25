<template>
  <div class="container">
    <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-4 g-3">
      <div v-for="(data, index) in datas" :key="index" class="">
        <div class="col bg-warning py-4 px-2">
          <p class="text-start mb-0">{{ data.text }}</p>
        </div>
        <p class="text-center mb-0 bg-light">{{ data.info }} <i class="bi bi-chevron-right"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      datas: [
        {
          id: 1,
          text: 'New Orders',
          info: 'More Info'
        },
        {
          id: 2,
          text: 'Pending Orders',
          info: 'More Info'
        },
        {
          id: 3,
          text: 'Completed Orders',
          info: 'More Info'
        },
        {
          id: 4,
          text: 'Cancelled Orders',
          info: 'More Info'
        },
        {
          id: 5,
          text: 'Pending Bills',
          info: 'More Info'
        },
        {
          id: 6,
          text: 'Paid Bills',
          info: 'More Info'
        },
        {
          id: 7,
          text: 'Pending Credit Notes',
          info: 'More Info'
        },
        {
          id: 8,
          text: 'Cleared Credit Notes',
          info: 'More Info'
        },
      ]
    }
  }
};
</script>
