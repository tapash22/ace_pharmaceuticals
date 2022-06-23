<template>
  <div class="partner">
    <div class="row">
      <div class="col-md-6">
        <h2>Add Partners</h2>
        <form>
          <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" />
          </div>
          <div class="form-group">
            <label>Website Link</label>
            <input class="form-control" type="text" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              class="form-control"
              type="file"
              ref="ptimage"
              @change="uploadImage()"
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadImage() {
      this.ptimage = this.$refs.ptimage.files[0];
    },
  },
};
</script>

<style scoped>
.partner {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.partner .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-6 {
  width: 60%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-6 h2 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.col-md-6 form {
  padding: 10px;
  margin: 0;
}
.col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
  font-family: "Playfair Display", serif;
}
</style>