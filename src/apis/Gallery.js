import Api from "../apis/Api";

export default {
  getGallery() {
    return Api().get("/gallery");
  },

  addGallery(gallery) {
    return Api().post("/gallery/add", gallery);
  },

  deleteGallery(id) {
    return Api().delete(`/gallery/delete/${id}`);
  },
};
