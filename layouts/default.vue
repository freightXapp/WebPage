<template>
  <div class="site-container">
    <Navbar> </Navbar>
    <slot />
    <Footer> </Footer>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%; /* Ensures container takes full width */
  padding: 0; /* Adjust or remove padding if necessary */

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
