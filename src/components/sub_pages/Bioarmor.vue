<template>
    <div class="product">
        <div class="container">
            <h2>Products by Bio armor</h2>
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
                {id:1, name:"Biobron Air",url:"https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7842-biobron.html",image:require('../../assets/partner/bio.png')},
                {id:2, name:"Hotlyte",url:"https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7859-hot-lyte.html",image:require('../../assets/partner/bio.png')},
            ]
        };
    },
};
</script>

<style scoped>
@import "../../assets/css/Product.css";
</style>