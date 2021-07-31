<template>
  <div class="row">
    <div class="col-lg-4 mt-3" v-for="(product, index) in products" :key="index">
      <div class="card">
        <div class="card-header">{{ product.Nama_Produk }}</div>
        <div class="card-header">{{ product.Gambar }}</div>
        <div class="card-body">
          <h5 class="card-text">{{ product.Harga_Produk }}</h5>
          <p class="card-text">{{ product.Bahan }}</p>
          <p class="card-text">{{ product.kategoris.name }}</p>
        </div>
        <div class="card-footer title-muted">
          <router-link
            class="btn btn-primary"
            :to="{ name: 'Detailproducts', params: { id: product.id } }"
            >Detail</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style>
</style>