<template>
    <div class="product">
        <div class="container">
            <h2>Products by Icc</h2>
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
                {id:1, name:"Immunowall",url:"https://www.iccbrazil.com/en/produtos/immunowall/",image:require('../../assets/partner/icc.png')},
                {id:2, name:"Rumen Yeast",url:"https://www.iccbrazil.com/en/produtos/rumenyeast/",image:require('../../assets/partner/icc.png')},
                {id:3, name:"Hilyses",url:"https://www.iccbrazil.com/en/produtos/hilyses/",image:require('../../assets/partner/icc.png')},
            ]
        };
    },
};
</script>

<style scoped>
@import "../../assets/css/Product.css";
</style>