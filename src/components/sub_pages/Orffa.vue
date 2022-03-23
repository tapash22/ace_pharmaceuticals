<template>
    <div class="product">
        <div class="container">
            <h2>Products by Orffa</h2>
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
                {id:1, name:"Excential Beta key",url:"https://orffa.com/products/excential-betakey/",image:require('../../assets/partner/or.png')},
                {id:2, name:"Excential Energy Plus",url:"https://orffa.com/products/excential-energy-plus/",image:require('../../assets/partner/or.png')},
                {id:3, name:"Excential Buty coat ",url:"https://orffa.com/products/excential-butycoat/",image:require('../../assets/partner/or.png')},
            ]
        };
    },
};
</script>

<style scoped>
@import "../../assets/css/Product.css";
</style>