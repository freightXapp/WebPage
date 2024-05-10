<template>
    <div class="container">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  padding: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
