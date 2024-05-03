<template>
  <section>
    <dialog ref="baseDialog" class="dialog" :class="{ 'is-closing': dialogClose }">
      <slot name="modal-body"></slot>
    </dialog>
  </section>
</template>

<script lang="ts" setup>
const isDialogSupported = ref(true);
const dialogClose = ref(false);

const baseDialog = ref<HTMLDialogElement>();

const openModal = () => {

  baseDialog.value?.showModal();
  window.history.pushState({ checkoutModal: true }, '');
  document.body.style.overflow = 'hidden';
};

const modalExistsAndIsOpen = (): boolean | undefined => baseDialog.value && baseDialog.value.open;

const closeModal = () => {
  dialogClose.value = true;
  console.log('close')
  baseDialog.value?.addEventListener('webkitAnimationEnd', ()=>{
    if (modalExistsAndIsOpen()) {
      baseDialog.value?.close();
    } 
    document.body.style.overflow = 'auto';
    if (baseDialog.value) baseDialog.value.style.overflow = 'auto';
  })
  
};


onMounted(() => {
  openModal();
  // close modal on native back event
  window.addEventListener('popstate', () => {
    closeModal()

  });

  // close on ESC to also clear history state
  baseDialog.value?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
    }
  });

  // fixes overflow on dialog close event if needed.It is replaced by '!important css'
  baseDialog.value?.addEventListener('close', () => {
    document.body.style.overflow = 'auto';
  });
});

onUnmounted(() => {
  closeModal();
});

defineExpose({
  openModal,
  closeModal,
});
</script>

<style lang="scss" scoped>
.dialog {
  border: none;
  height: 100vh;
  margin: 0;
  max-height: none;
  max-width: none;
  padding: 0;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  animation: slide-in-right 0.3s ease-in-out forwards;
}
.is-closing {
  animation: slide-out-left 0.3s ease-in-out forwards; /* Use the left-slide-out animation */
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
