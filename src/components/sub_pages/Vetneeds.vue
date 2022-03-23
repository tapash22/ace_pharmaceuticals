<template>
    <div class="product">
        <div class="container">
            <h2>Products by Vet-Needs</h2>
            <div class="row">
                <div class="col-md-3" v-for="product in products" :key="product.id">  
                    <a :href="product.url" target="_blank"> 
                        <div class="card">
                            <div class="image">
                                <img :src="product.image"/>
                            </div>
                            <h4>{{product.name}}</h4>
                        </div> 
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[
                {id:1, name:" Tylophosh FS",url:"http://vetneedsgroup.com/products/poultry-feed-supplements/thylophos-fs/",image:require('../../assets/partner/ad.png')},
            ]
        };
    },
};
</script>

<style scoped>
@import "../../assets/css/Product.css";
</style>