<template>
  <div class="site-container">
    <Navbar> </Navbar>
    <slot />
    <Footer> </Footer>
  </div>
</template>
<style lang="scss" scoped>
.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
