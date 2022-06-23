import Api from "./Api";

export default {
  addPartner(partner) {
    return Api().post("/partner/add", partner);
  },

  getPartner() {
    return Api().get("/partner");
  },

  editPartner(id) {
    return Api().get(`/partner/edit/${id}`);
  },

  updatePartner(id) {
    return Api().post(`/partner/update/${id}`);
  },

  deletePartner(id) {
    return Api().delete(`/partner/delete/${id}`);
  },
};
