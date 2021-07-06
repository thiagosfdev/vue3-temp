<template>
  <custom-header @create-account="handleAccountCreate" @login="handleLogin()" />

  <contact />

  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker&copy; 2021</p>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import useModal from '../../hooks/userModal'

export default {
  components: {
    Contact,
    CustomHeader
  },

  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')

      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin () {
      console.log('object')
      modal.open({ component: 'ModalLogin' })
    }

    function handleAccountCreate () {}

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>

<style></style>
